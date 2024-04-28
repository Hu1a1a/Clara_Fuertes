"use strict";
const pool = require("../../db/db");

exports.curso = (req, res) => {
  pool.query(`SELECT * FROM course;`, async (err, result, fields) => {
    if (err) {
      return res.json({ ok: false, msg: "Error desconocido, contacte con administrador!" });
    } else if (result.length > 0) {
      return res.json({ ok: true, data: result });
    }
  });
};
