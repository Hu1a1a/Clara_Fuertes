"use strict";
const { auth, authAdmin } = require("./auth");
const { SELECT, ADD, UPDATE, DELETE } = require("./controller");

exports.get = async (req, res) => {
  try {
    if (await auth(req, res)) SELECT("user", req, res);
  } catch (e) {
    return res.json({ ok: false, msg: e.toString() });
  }
};

exports.add = async (req, res) => {
  try {
    if (await authAdmin(req, res)) ADD("user", req, res);
  } catch (e) {
    return res.json({ ok: false, msg: e.toString() });
  }
};

exports.update = async (req, res) => {
  try {
    if (await authAdmin(req, res)) UPDATE("user", req, res);
  } catch (e) {
    return res.json({ ok: false, msg: e.toString() });
  }
};

exports.delete = async (req, res) => {
  try {
    if (await authAdmin(req, res)) DELETE("user", req, res);
  } catch (e) {
    return res.json({ ok: false, msg: e.toString() });
  }
};
