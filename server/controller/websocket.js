"use strict";
const pool = require("../../db/db");

exports.setup = (wsServer) => {
    wsServer.on("connection", (ws) => {
        pool.getConnection((e, c) => {
            pool.query(`SELECT * FROM chat;`, (e, r) => {
                c.release();
                ws.send(JSON.stringify(r))
            });
        });
        ws.on("message", (data) => {
            const d = JSON.parse(data.toString())
            pool.getConnection((e, c) => {
                pool.query(`INSERT INTO chat (user, message, data) VALUES ('${d.user}','${d.message}','${d.data}')`, (e, r) => {
                    c.release();
                    wsServer.clients.forEach(client => client.send(JSON.stringify([d])))
                });
            });
        })
    })
}

