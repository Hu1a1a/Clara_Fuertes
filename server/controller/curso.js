"use strict";
const { auth, authAdmin } = require("./auth");
const { SELECT, ADD, UPDATE, DELETE } = require("./controller");

exports.level1 = async (req, res) => {
  try {
    SELECT("level1", req, res);
  } catch (e) {
    return res.json({ ok: false, msg: e.toString() });
  }
};

exports.level2 = async (req, res) => {
  try {
    if (await auth(req, res)) SELECT("level2", req, res);
  } catch (e) {
    return res.json({ ok: false, msg: e.toString() });
  }
};

exports.video = async (req, res) => {
  try {
    if (await auth(req, res)) SELECT("video", req, res);
  } catch (e) {
    return res.json({ ok: false, msg: e.toString() });
  }
};

exports.add_level1 = async (req, res) => {
  try {
    if (await authAdmin(req, res)) ADD("level1", req, res);
  } catch (e) {
    return res.json({ ok: false, msg: e.toString() });
  }
};

exports.add_level2 = async (req, res) => {
  try {
    if (await authAdmin(req, res)) ADD("level2", req, res);
  } catch (e) {
    return res.json({ ok: false, msg: e.toString() });
  }
};

exports.add_video = async (req, res) => {
  try {
    if (await authAdmin(req, res)) ADD("video", req, res);
  } catch (e) {
    return res.json({ ok: false, msg: e.toString() });
  }
};

exports.update_level1 = async (req, res) => {
  try {
    if (await authAdmin(req, res)) UPDATE("level1", req, res);
  } catch (e) {
    return res.json({ ok: false, msg: e.toString() });
  }
};

exports.update_level2 = async (req, res) => {
  try {
    if (await authAdmin(req, res)) UPDATE("level2", req, res);
  } catch (e) {
    return res.json({ ok: false, msg: e.toString() });
  }
};

exports.update_video = async (req, res) => {
  try {
    if (await authAdmin(req, res)) UPDATE("video", req, res);
  } catch (e) {
    return res.json({ ok: false, msg: e.toString() });
  }
};

exports.delete_level1 = async (req, res) => {
  try {
    if (await authAdmin(req, res)) DELETE("level1", req, res);
  } catch (e) {
    return res.json({ ok: false, msg: e.toString() });
  }
};

exports.delete_level2 = async (req, res) => {
  try {
    if (await authAdmin(req, res)) DELETE("level2", req, res);
  } catch (e) {
    return res.json({ ok: false, msg: e.toString() });
  }
};

exports.delete_video = async (req, res) => {
  try {
    if (await authAdmin(req, res)) DELETE("video", req, res);
  } catch (e) {
    return res.json({ ok: false, msg: e.toString() });
  }
};
