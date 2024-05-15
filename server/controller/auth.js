"use strict";
const pool = require("../../db/db");
const crypto = require("crypto");
const { privateKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048,
  privateKeyEncoding: { type: 'pkcs1', format: 'pem' }
});

exports.login = (req, res) => {
  try {
    if (req.body.User && req.body.Password) {
      pool.getConnection((e, c) => {
        c.query(`SELECT Admin, id FROM user WHERE User = ? AND Pass = ?;`, [req.body.User, req.body.Password], (e, r) => {
          c.release();
          if (e) return res.json({ ok: false, msg: JSON.stringify(e) });
          else if (r.length === 1) {
            if (r[0].Admin) return res.json({ ok: true, token: crypto.sign('RSA-SHA256', req.body.User + "_____Admin", privateKey).toString("base64"), admin: true });
            else return res.json({ ok: true, token: crypto.sign('RSA-SHA256', req.body.User, privateKey).toString("base64"), id: r[0].id });
          } else if (r.length > 1) return res.json({ ok: false, msg: "Usuario anomalo, contacte con administrador!" });
          else return res.json({ ok: false, msg: "Usuario o contraseña erronea!" });
        });
      });
    } else return res.json({ ok: false, msg: "Introducir usuario y contraseña!" });
  } catch (e) { return res.json({ ok: false, msg: e.toString() }); }
};

function auth(req) {
  if (req.headers.authorization) {
    if (req.headers.authorization.split("_____").length > 2)
      return Boolean(crypto.verify('RSA-SHA256', req.headers.authorization.split("_____")[1] + "_____" + req.headers.authorization.split("_____")[2], privateKey, Buffer.from(req.headers.authorization.split("_____")[0], "base64"))) ? 2 : false
    else if (req.headers.authorization.split("_____").length > 1)
      return Boolean(crypto.verify('RSA-SHA256', req.headers.authorization.split("_____")[1], privateKey, Buffer.from(req.headers.authorization.split("_____")[0], "base64"))) ? 1 : false
    else return false
  } else return false
}

exports.checkToken = (req, res) => {
  if (auth(req) === 1) res.json({ ok: true, msg: "Token válido!" });
  else if (auth(req) === 2) res.json({ ok: true, msg: "Token válido!", admin: true });
  else res.json({ ok: false, msg: "Token no vàlido!" });
};

exports.auth = (req) => {
  if (auth(req) > 0) return true;
  return false
};

exports.authAdmin = (req) => {
  if (auth(req) > 1) return true;
  return false
};

exports.resetPassword = (req, res) => {
  if (req.body.email && req.body.token && req.body.password) {
    pool.getConnection((e, c) => {
      pool.query(`UPDATE user SET Pass = '${req.body.password}' WHERE Email = '${req.body.email}' AND Token = '${req.body.token}';`, (e, r) => {
        c.release();
        if (r) res.json({ ok: true, msg: "Se ha cambiado la contraseña correctamente!" });
        else res.json({ ok: false, msg: "Parametros no válidos!" });
      });
    });
  } else res.json({ ok: false, msg: "Parametros no válidos!" });
};
