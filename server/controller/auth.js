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
        c.query(`SELECT Expiration, Admin FROM User WHERE User = ? AND Pass = ?;`, [req.body.User, req.body.Password], (err, result) => {
          if (err) {
            c.release();
            return res.json({ ok: false, msg: "Error desconocido, contacte con administrador!" });
          } else if (result.length > 0) {
            if (new Date(result[0].Expiration) > new Date()) {
              const token = crypto.randomBytes(64).toString("hex");
              c.query(`UPDATE User SET Token = ? WHERE USER = ?;`, [token, req.body.User], () => {
                c.release();
                const TokenFind = tokenFile.data.find((a) => a.User === req.body.User);
                if (TokenFind) TokenFind.token = token;
                else tokenFile.data.push({ User: req.body.User, token, admin: result[0].Admin });
                fs.writeFileSync(file, JSON.stringify(tokenFile));
                if (result[0].Admin) {
                  return res.json({ ok: true, token, admin: true });
                } else {
                  return res.json({ ok: true, token });
                }
              });
            } else {
              return res.json({ ok: false, msg: "Usuario caducado, renueve los cursos!" });
            }
          } else {
            return res.json({ ok: false, msg: "Usuario o contraseña erronea!" });
          }
        });
      });
    } else {
      return res.json({ ok: false, msg: "Introducir usuario y contraseña!" });
    }
  } catch (e) {
    return res.json({ ok: false, msg: e });
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
  if ((await auth(req)) === 1) res.json({ ok: true, msg: "Token vàlido!" });
  else if ((await auth(req)) === 2) res.json({ ok: true, msg: "Token vàlido!", admin: true });
  else res.json({ ok: false, msg: "Token no vàlido!" });
};
