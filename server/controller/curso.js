"use strict";
const pool = require("../../db/db");

exports.level1 = (req, res) => {
  try {
    SELECT("level1", req, res);
  } catch (e) {
    return res.json({ ok: false, msg: JSON.stringify(e) });
  }
};

exports.level2 = (req, res) => {
  try {
    SELECT("level2", req, res);
  } catch (e) {
    return res.json({ ok: false, msg: JSON.stringify(e) });
  }
};

exports.video = (req, res) => {
  try {
    SELECT("video", req, res);
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

exports.add_level1 = (req, res) => {
  try {
    ADD("level1", req, res);
  } catch (e) {
    return res.json({ ok: false, msg: JSON.stringify(e) });
  }
};

exports.add_level2 = (req, res) => {
  try {
    ADD("level2", req, res);
  } catch (e) {
    return res.json({ ok: false, msg: JSON.stringify(e) });
  }
};

exports.add_video = (req, res) => {
  try {
    ADD("video", req, res);
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

exports.update_level1 = (req, res) => {
  try {
    UPDATE("level1", req, res);
  } catch (e) {
    return res.json({ ok: false, msg: JSON.stringify(e) });
  }
};

exports.update_level2 = (req, res) => {
  try {
    UPDATE("level2", req, res);
  } catch (e) {
    return res.json({ ok: false, msg: JSON.stringify(e) });
  }
};

exports.update_video = (req, res) => {
  try {
    UPDATE("video", req, res);
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

exports.delete_level1 = (req, res) => {
  try {
    DELETE("level1", req, res);
  } catch (e) {
    return res.json({ ok: false, msg: JSON.stringify(e) });
  }
};

exports.delete_level2 = (req, res) => {
  try {
    DELETE("level2", req, res);
  } catch (e) {
    return res.json({ ok: false, msg: JSON.stringify(e) });
  }
};

exports.delete_video = (req, res) => {
  try {
    DELETE("video", req, res);
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
