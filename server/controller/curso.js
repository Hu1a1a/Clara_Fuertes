"use strict";
const { auth, authAdmin } = require("./auth");
const { SELECT, ADD, UPDATE, DELETE, SELECTBYID } = require("./controller");

exports.level1 = (req, res) => {
  try { SELECT("level1", req, res); }
  catch (e) { return res.json({ ok: false, msg: e.toString() }); }
};

exports.level2 = (req, res) => {
  try {
    if (auth(req)) SELECT("level2", req, res);
    else res.json({ ok: false, msg: "Token no válido!" });
  } catch (e) { return res.json({ ok: false, msg: e.toString() }); }
};

exports.video = (req, res) => {
  try {
    if (auth(req)) SELECT("video", req, res);
    else res.json({ ok: false, msg: "Token no válido!" });
  } catch (e) { return res.json({ ok: false, msg: e.toString() }); }
};

exports.add_level1 = (req, res) => {
  try {
    if (authAdmin(req)) ADD("level1", req, res);
    else res.json({ ok: false, msg: "Token no válido!" });
  } catch (e) { return res.json({ ok: false, msg: e.toString() }); }
};

exports.add_level2 = (req, res) => {
  try {
    if (authAdmin(req, res)) ADD("level2", req, res);
    else res.json({ ok: false, msg: "Token no válido!" });
  } catch (e) { return res.json({ ok: false, msg: e.toString() }); }
};

exports.add_video = (req, res) => {
  try {
    if (authAdmin(req, res)) ADD("video", req, res);
    else res.json({ ok: false, msg: "Token no válido!" });
  } catch (e) { return res.json({ ok: false, msg: e.toString() }); }
};

exports.update_level1 = (req, res) => {
  try {
    if (authAdmin(req, res)) UPDATE("level1", req, res);
    else res.json({ ok: false, msg: "Token no válido!" });
  } catch (e) { return res.json({ ok: false, msg: e.toString() }); }
};

exports.update_level2 = (req, res) => {
  try {
    if (authAdmin(req, res)) UPDATE("level2", req, res);
    else res.json({ ok: false, msg: "Token no válido!" });
  } catch (e) { return res.json({ ok: false, msg: e.toString() }); }
};

exports.update_video = (req, res) => {
  try {
    if (authAdmin(req, res)) UPDATE("video", req, res);
    else res.json({ ok: false, msg: "Token no válido!" });
  } catch (e) { return res.json({ ok: false, msg: e.toString() }); }
};

exports.delete_level1 = (req, res) => {
  try {
    if (authAdmin(req, res)) DELETE("level1", req, res);
    else res.json({ ok: false, msg: "Token no válido!" });
  } catch (e) { return res.json({ ok: false, msg: e.toString() }); }
};

exports.delete_level2 = (req, res) => {
  try {
    if (authAdmin(req, res)) DELETE("level2", req, res);
    else res.json({ ok: false, msg: "Token no válido!" });
  } catch (e) { return res.json({ ok: false, msg: e.toString() }); }
};

exports.delete_video = (req, res) => {
  try {
    if (authAdmin(req, res)) DELETE("video", req, res);
    else res.json({ ok: false, msg: "Token no válido!" });
  } catch (e) { return res.json({ ok: false, msg: e.toString() }); }
};

exports.curso = (req, res) => {
  try {
    if (authAdmin(req, res)) SELECT("curso", req, res);
    else res.json({ ok: false, msg: "Token no válido!" });
  } catch (e) { return res.json({ ok: false, msg: e.toString() }); }
};
exports.cursobyid = (req, res) => {
  try {
    if (auth(req, res)) SELECTBYID("curso", req, res);
    else res.json({ ok: false, msg: "Token no válido!" });
  } catch (e) { return res.json({ ok: false, msg: e.toString() }); }
};

exports.add_curso = (req, res) => {
  try {
    if (authAdmin(req, res)) ADD("curso", req, res);
    else res.json({ ok: false, msg: "Token no válido!" });
  } catch (e) { return res.json({ ok: false, msg: e.toString() }); }
};

exports.update_curso = (req, res) => {
  try { UPDATE("curso", req, res); }
  catch (e) { return res.json({ ok: false, msg: e.toString() }); }
};

exports.delete_curso = (req, res) => {
  try {
    if (authAdmin(req, res)) DELETE("curso", req, res);
    else res.json({ ok: false, msg: "Token no válido!" });
  } catch (e) { return res.json({ ok: false, msg: e.toString() }); }
};

exports.master = (req, res) => {
  try {
    SELECT("master", req, res);
  } catch (e) { return res.json({ ok: false, msg: e.toString() }); }
};

exports.add_master = (req, res) => {
  try {
    if (authAdmin(req, res)) ADD("master", req, res);
    else res.json({ ok: false, msg: "Token no válido!" });
  } catch (e) { return res.json({ ok: false, msg: e.toString() }); }
};

exports.update_master = (req, res) => {
  try {
    if (authAdmin(req, res)) UPDATE("master", req, res);
    else res.json({ ok: false, msg: "Token no válido!" });
  }
  catch (e) { return res.json({ ok: false, msg: e.toString() }); }
};

exports.chat = (req, res) => {
  try {
    if (auth(req, res)) SELECT("chat", req, res);
    else res.json({ ok: false, msg: "Token no válido!" });
  } catch (e) { return res.json({ ok: false, msg: e.toString() }); }
};
exports.update_chat = (req, res) => {
  try {
    if (authAdmin(req, res)) UPDATE("chat", req, res);
    else res.json({ ok: false, msg: "Token no válido!" });
  }
  catch (e) { return res.json({ ok: false, msg: e.toString() }); }
};

exports.delete_chat = (req, res) => {
  try {
    if (authAdmin(req, res)) DELETE("chat", req, res);
    else res.json({ ok: false, msg: "Token no válido!" });
  } catch (e) { return res.json({ ok: false, msg: e.toString() }); }
};