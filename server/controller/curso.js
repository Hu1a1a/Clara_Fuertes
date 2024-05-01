"use strict";
const pool = require("../../db/db");
const { auth, authAdmin } = require("./auth");
exports.level1 = async (req, res) => {
  try {
    if (await auth(req, res)) SELECT("level1", req, res);
  } catch (e) {
    return res.json({ ok: false, msg: JSON.stringify(e) });
  }
};

exports.level2 = async (req, res) => {
  try {
    if (await auth(req, res)) SELECT("level2", req, res);
  } catch (e) {
    return res.json({ ok: false, msg: JSON.stringify(e) });
  }
};

exports.video = async (req, res) => {
  try {
    if (await auth(req, res)) SELECT("video", req, res);
  } catch (e) {
    return res.json({ ok: false, msg: JSON.stringify(e) });
  }
};

function SELECT(Table, req, res) {
  pool.getConnection((e, c) => {
    pool.query(`SELECT * FROM ${Table};`, async (e, r) => {
      c.release();
      if (e) return res.json({ ok: false, msg: JSON.stringify(e) });
      else return res.json({ ok: true, data: r });
    });
  });
}

exports.add_level1 = async (req, res) => {
  try {
    if (await authAdmin(req, res)) ADD("level1", req, res);
  } catch (e) {
    return res.json({ ok: false, msg: JSON.stringify(e) });
  }
};

exports.add_level2 = async (req, res) => {
  try {
    if (await authAdmin(req, res)) ADD("level2", req, res);
  } catch (e) {
    return res.json({ ok: false, msg: JSON.stringify(e) });
  }
};

exports.add_video = async (req, res) => {
  try {
    if (await authAdmin(req, res)) ADD("video", req, res);
  } catch (e) {
    return res.json({ ok: false, msg: JSON.stringify(e) });
  }
};

function ADD(Table, req, res) {
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
    pool.query(`INSERT INTO ${Table} (${stringK}) VALUES (${stringd});`, async (e, r) => {
      c.release();
      if (e) return res.json({ ok: false, msg: JSON.stringify(e) });
      else return res.json({ ok: true, data: r });
    });
  });
}

exports.update_level1 = async (req, res) => {
  try {
    if (await authAdmin(req, res)) UPDATE("level1", req, res);
  } catch (e) {
    return res.json({ ok: false, msg: JSON.stringify(e) });
  }
};

exports.update_level2 = async (req, res) => {
  try {
    if (await authAdmin(req, res)) UPDATE("level2", req, res);
  } catch (e) {
    return res.json({ ok: false, msg: JSON.stringify(e) });
  }
};

exports.update_video = async (req, res) => {
  try {
    if (await authAdmin(req, res)) UPDATE("video", req, res);
  } catch (e) {
    return res.json({ ok: false, msg: JSON.stringify(e) });
  }
};

function UPDATE(Table, req, res) {
  let string = "";
  for (const key of Object.keys(req.body.data)) string += `, ${key}  = '${req.body.data[key]}'`;
  string = string.replace(",", "");
  pool.getConnection((e, c) => {
    pool.query(`UPDATE ${Table} SET ${string} WHERE id = ${req.body.data.id};`, async (e, r) => {
      c.release();
      if (e) return res.json({ ok: false, msg: JSON.stringify(e) });
      else return res.json({ ok: true, data: r });
    });
  });
}

exports.delete_level1 = async (req, res) => {
  try {
    if (await authAdmin(req, res)) DELETE("level1", req, res);
  } catch (e) {
    return res.json({ ok: false, msg: JSON.stringify(e) });
  }
};

exports.delete_level2 = async (req, res) => {
  try {
    if (await authAdmin(req, res)) DELETE("level2", req, res);
  } catch (e) {
    return res.json({ ok: false, msg: JSON.stringify(e) });
  }
};

exports.delete_video = async (req, res) => {
  try {
    if (await authAdmin(req, res)) DELETE("video", req, res);
  } catch (e) {
    return res.json({ ok: false, msg: JSON.stringify(e) });
  }
};

function DELETE(Table, req, res) {
  pool.getConnection((e, c) => {
    pool.query(`DELETE FROM ${Table} WHERE id = ${req.body.data.id};`, async (e, r) => {
      c.release();
      if (e) return res.json({ ok: false, msg: JSON.stringify(e) });
      else return res.json({ ok: true, data: r });
    });
  });
}
