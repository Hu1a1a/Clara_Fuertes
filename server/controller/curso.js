const pool = require("../../db/db");

exports.login = (req, res) => {
  pool.query(`SELECT Expiration FROM User WHERE User = ? AND Pass = ?;`, [req.body.User, req.body.Password], async (err, result, fields) => {
    if (err) {
      return res.json({ ok: false, msg: "Error desconocido, contacte con administrador!" });
    } else if (result.length > 0) {
      if (new Date(result[0].Expiration) > new Date()) {
        return res.json({ ok: true });
      } else {
        return res.json({ ok: false, msg: "Usuario caducado, renueve los cursos!" });
      }
    } else {
      return res.json({ ok: false, msg: "Usuario o contraseña erronea!" });
    }
  });
};

exports.curso = (req, res) => {
  pool.query(`SELECT * FROM course;`, async (err, result, fields) => {
    if (err) {
      return res.json({ ok: false, msg: "Error desconocido, contacte con administrador!" });
    } else if (result.length > 0) {
      return res.json({ ok: true, data: result });
    }
  });
};
