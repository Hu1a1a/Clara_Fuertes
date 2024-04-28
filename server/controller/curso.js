"use strict";
const pool = require("../../db/db");

exports.curso = (req, res) => {
  try {
    pool.getConnection((e, c) => {
      pool.query(`SELECT * FROM course;`, async (e, r) => {
        if (e) return res.json({ ok: false, msg: JSON.stringify(e) });
        else if (r.length > 0) return res.json({ ok: true, data: r });
        c.release();
      });
    });
  } catch (e) {
    return res.json({ ok: false, msg: JSON.stringify(e) });
  }
};
