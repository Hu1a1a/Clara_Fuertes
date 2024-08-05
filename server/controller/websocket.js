"use strict";
const pool = require("../../db/db");

exports.setup = (app_websocket, wsServer) => {
    // app_websocket.on('upgrade', (req, socket, head) => {
    //     wsServer.handleUpgrade(req, socket, head, (ws) => {
    //         pool.getConnection((e, c) => {
    //             pool.query(`SELECT * FROM chat;`, (e, r) => {
    //                 c.release();
    //                 ws.send(JSON.stringify(r))
    //             });
    //         });
    //     })
    // })
}

