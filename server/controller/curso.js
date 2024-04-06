const title = "Clara Fuertes";
const description = "¡Hola! Soy Clara, Dietista-Nutricionista Colegiada, Especializada en inflamación, patología digestiva y pérdida de grasa";
const connection = require("../../db/db");
exports.login = async (req, res) => {
  const messages = await req.flash("info");
  const locals = {
    title: title + " - Login",
    description: description,
    messages: messages,
  };
  res.render("curso/login", locals);
};

exports.login_auth = (req, res) => {
  connection.query(`SELECT Expiration FROM User WHERE User = ? AND Pass = ?`, [req.body.User, req.body.Password], async (err, result, fields) => {
    if (err) {
      await req.flash("info", "Error desconocido, contacte con administrador!");
    } else if (result.length > 0) {
      if (new Date(result[0].Expiration) > new Date()) {
        return res.redirect("/curso/index");
      } else {
        await req.flash("info", "Usuario caducado, renueve los cursos!");
      }
    } else {
      await req.flash("info", "Usuario o contraseña erronea!");
    }
    return res.redirect("/curso/login");
  });
};

exports.index = async (req, res) => {
  const messages = await req.flash("info");
  const locals = {
    title: title + " - index",
    description: description,
    messages: messages,
  };
  res.render("curso/index", locals);
};
