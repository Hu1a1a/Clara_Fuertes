"use strict";
const pool = require("../../db/db");
const crypto = require("crypto");
const fs = require("fs");
const file = "./server/json/token.json";
const tokenFile = JSON.parse(fs.readFileSync(file, "utf8"));

exports.login = (req, res) => {
  try {
    if (req.body.User && req.body.Password) {
      pool.getConnection((e, c) => {
        c.query(`SELECT Admin, id FROM user WHERE User = ? AND Pass = ?;`, [req.body.User, req.body.Password], (e, r) => {
          if (e) {
            c.release();
            return res.json({ ok: false, msg: JSON.stringify(e) });
          } else if (r.length > 0) {
            const token = crypto.randomBytes(64).toString("hex");
            c.query(`UPDATE User SET Token = ? WHERE USER = ?;`, [token, req.body.User], () => {
              c.release();
              const TokenFind = tokenFile.data.find((a) => a.User === req.body.User);
              if (TokenFind) TokenFind.token = token;
              else tokenFile.data.push({ User: req.body.User, token, admin: r[0].Admin });
              fs.writeFileSync(file, JSON.stringify(tokenFile));
              if (r[0].Admin) {
                return res.json({ ok: true, token, admin: true });
              } else {
                return res.json({ ok: true, token, id: r[0].id });
              }
            });
          } else {
            return res.json({ ok: false, msg: "Usuario o contraseña erronea!" });
          }
        });
      });
    } else {
      return res.json({ ok: false, msg: "Introducir usuario y contraseña!" });
    }
  } catch (e) {
    return res.json({ ok: false, msg: e.toString() });
  }
};

async function auth(req) {
  if (req.headers.authorization) {
    const t = tokenFile.data.find((a) => a.token === req.headers.authorization.replace("Bearer ", ""));
    if (t.admin) return 2;
    else return 1;
  }
  return false;
}

exports.checkToken = async (req, res) => {
  if ((await auth(req)) === 1) res.json({ ok: true, msg: "Token válido!" });
  else if ((await auth(req)) === 2) res.json({ ok: true, msg: "Token válido!", admin: true });
  else res.json({ ok: false, msg: "Token no vàlido!" });
};

exports.auth = async (req, res) => {
  if ((await auth(req)) > 0) return true;
  return false
};

exports.authAdmin = async (req, res) => {
  if ((await auth(req)) > 1) return true;
  return false
};

exports.resetPassword = async (req, res) => {
  if (req.body.email && req.body.token && req.body.password) {
    pool.getConnection((e, c) => {
      pool.query(`UPDATE user SET Pass = '${req.body.password}' WHERE Email = '${req.body.email}' AND Token = '${req.body.token}';`, async (e, r) => {
        console.log(r);
        c.release();
        if (r) {
          res.json({ ok: true, msg: "Se ha cambiado la contraseña correctamente!" });
        } else {
          res.json({ ok: false, msg: "Parametros no válidos!" });
        }
      });
    });
  } else {
    res.json({ ok: false, msg: "Parametros no válidos!" });
  }
};
