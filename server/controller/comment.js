"use strict";
const { authAdmin } = require("./auth");
const { SELECT, ADD, UPDATE, DELETE } = require("./controller");

exports.get = async (req, res) => {
  try {
    SELECT("comentario", req, res);
  } catch (e) {
    return res.json({ ok: false, msg: e.toString() });
  }
};

exports.add = async (req, res) => {
  try {
    if (await authAdmin(req, res)) ADD("comentario", req, res);
  } catch (e) {
    return res.json({ ok: false, msg: e.toString() });
  }
};

exports.update = async (req, res) => {
  try {
    if (await authAdmin(req, res)) UPDATE("comentario", req, res);
  } catch (e) {
    return res.json({ ok: false, msg: e.toString() });
  }
};

exports.delete = async (req, res) => {
  try {
    if (await authAdmin(req, res)) DELETE("comentario", req, res);
  } catch (e) {
    return res.json({ ok: false, msg: e.toString() });
  }
};
