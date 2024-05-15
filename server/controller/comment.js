"use strict";
const { authAdmin } = require("./auth");
const { SELECT, ADD, UPDATE, DELETE } = require("./controller");

exports.get = (req, res) => {
  try { SELECT("comentario", req, res); }
  catch (e) { return res.json({ ok: false, msg: e.toString() }); }
};

exports.add = (req, res) => {
  try {
    if (authAdmin(req)) ADD("comentario", req, res);
    else res.json({ ok: false, msg: "Token no válido!" });
  } catch (e) { return res.json({ ok: false, msg: e.toString() }); }
};

exports.update = (req, res) => {
  try {
    if (authAdmin(req)) UPDATE("comentario", req, res);
    else res.json({ ok: false, msg: "Token no válido!" });
  } catch (e) { return res.json({ ok: false, msg: e.toString() }); }
};

exports.delete = (req, res) => {
  try {
    if (authAdmin(req)) DELETE("comentario", req, res);
    else res.json({ ok: false, msg: "Token no válido!" });
  } catch (e) { return res.json({ ok: false, msg: e.toString() }); }
};
