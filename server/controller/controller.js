"use strict";
const pool = require("../../db/db");

exports.SELECT = (Table, req, res) => {
  pool.getConnection((e, c) => {
    pool.query(`SELECT * FROM ${Table};`, (e, r) => {
      c.release();
      if (e) return res.json({ ok: false, msg: JSON.stringify(e) })
      else return res.json({ ok: true, data: r })
    });
  });
};

exports.ADD = (Table, req, res) => {
  let stringK = "";
  let stringd = "";
  for (const key of Object.keys(req.body.data)) {
    if (key !== "id") {
      stringK += `, ${key}`;
      stringd += `, '${req.body.data[key]}'`;
    }
  }
  stringK = stringK.replace(",", "");
  stringd = stringd.replace(",", "");
  pool.getConnection((e, c) => {
    pool.query(`INSERT INTO ${Table} (${stringK}) VALUES (${stringd});`, (e, r) => {
      c.release();
      if (e) return res.json({ ok: false, msg: JSON.stringify(e) });
      else return res.json({ ok: true, data: r });
    });
  });
};

exports.UPDATE = (Table, req, res) => {
  let string = "";
  for (const key of Object.keys(req.body.data)) string += `, ${key}  = '${req.body.data[key]}'`;
  string = string.replace(",", "");
  pool.getConnection((e, c) => {
    pool.query(`UPDATE ${Table} SET ${string} WHERE id = ${req.body.data.id};`, (e, r) => {
      c.release();
      if (e) return res.json({ ok: false, msg: JSON.stringify(e) });
      else return res.json({ ok: true, data: r });
    });
  });
};

exports.DELETE = (Table, req, res) => {
  pool.getConnection((e, c) => {
    pool.query(`DELETE FROM ${Table} WHERE id = ${req.body.data.id};`, (e, r) => {
      c.release();
      if (e) return res.json({ ok: false, msg: JSON.stringify(e) });
      else return res.json({ ok: true, data: r });
    });
  });
};

exports.SELECTBYID = (Table, req, res) => {
  pool.getConnection((e, c) => {
    pool.query(`SELECT * FROM ${Table} WHERE userId = '${req.params.id}';`, (e, r) => {
      c.release();
      if (e) return res.json({ ok: false, msg: JSON.stringify(e) });
      else return res.json({ ok: true, data: r });
    });
  });
};
