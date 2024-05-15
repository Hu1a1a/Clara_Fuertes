"use strict";
const { auth, authAdmin } = require("./auth");
const { SELECT, ADD, UPDATE, DELETE } = require("./controller");

exports.get = (req, res) => {
  try {
    if (auth(req)) SELECT("user", req, res);
    else res.json({ ok: false, msg: "Token no válido!" });
  } catch (e) { return res.json({ ok: false, msg: e.toString() }); }
};

exports.add = (req, res) => {
  try {
    if (authAdmin(req)) ADD("user", req, res);
    else res.json({ ok: false, msg: "Token no válido!" });
  } catch (e) { return res.json({ ok: false, msg: e.toString() }); }
};

exports.update = (req, res) => {
  try {
    if (authAdmin(req)) UPDATE("user", req, res);
    else res.json({ ok: false, msg: "Token no válido!" });
  } catch (e) { return res.json({ ok: false, msg: e.toString() }); }
};

exports.delete = (req, res) => {
  try {
    if (authAdmin(req)) DELETE("user", req, res);
    else res.json({ ok: false, msg: "Token no válido!" });
  } catch (e) { return res.json({ ok: false, msg: e.toString() }); }
};
