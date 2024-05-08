const { nodemailer, config } = require("../../mail/mail");
const pool = require("../../db/db");
const { SELECT } = require("./controller");

exports.email_ensalada = async (req, res) => {
  try {
    if (req.body.Name && req.body.Email) {
      const transporter = nodemailer.createTransport(config);
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: req.body.Email,
        subject: "ENSALADAS. LA GUIA INFALIBLE QUE RESUELVE TODAS TUS DUDAS",
        html: `
        <h3>Hola ${req.body.Name}, </h3>
        <div class="e0">
          Te regalo la Guía GRATUITA que necesitas para hacer tus ensaladas
          equilibradas, completas y suficientes
          <br>
          ¡Se acabaron las dudas!
      </div>
      <div class="e1">
          <li>
              Llega el buen tiempo y sabes que vas a recurrir más de una vez a las
              ensaladas
          </li>
          <li>
              Deja de preguntarte si tus ensaladas están bien hechas, te descubro
              todo lo que debes saber
          </li>
          <li>
              ¿Qué lleva una ensalada que sirve de acompañamiento? ¿Qué lleva una
              ensalada que es plato único?
          </li>
          <li>
              ¿Una ensalada es buena opción en una alimentación antiinflamatoria?
              Te explico como potenciarlo
          </li>
          <li>
              ¡No te aburras y hazlas variadas! Hay opciones más allá de la
              lechuga y el tomate
          </li>
          <li>
              Combínalas, hay infinitas posibilidades
          </li>
          <li>
              Te dejo un menú semanal a base de ensaladas fáciles y completas
          </li>
          <li>
              Descubre opciones de aliños saludables más allá del aceite y el
              vinagre.
          </li>
          <li>
              Descubre los trucos para que se conserven mejor si te las dejas
              preparadas
          </li>
          <li>
              ¡Resuelve todas tus dudas sobre este plato tan recurrido y
              disfrútalas sabiendo que te lo estás haciendo bien!
          </li>
      </div>
        ` , attachments: [
          {
            filename: "/ENSALADAS. LA GUIA INFALIBLE QUE RESUELVE TODAS TUS DUDAS.pdf",
            path: __dirname + "/../../public/ENSALADAS.pdf",
          },
        ],
      };
      transporter.sendMail(mailOptions, function (e, info) {
        transporter.close()
        if (e) {
          res.json({ ok: false, msg: e.toString() });
        } else {
          try {
            pool.getConnection((e, c) => {
              pool.query(`INSERT INTO regemail VALUES (?,?,?,?);`, [req.body.Name, req.body.Email, new Date(), "Guia Ensalada"], () => {
                res.json({ ok: true, msg: "Guia enviada correctamente, comprueba en su bandeja de entrada!" });
                c.release();
              });
            });
          } catch (e) {
            return res.json({ ok: false, msg: e.toString() });
          }
        }
      })
    } else {
      res.json({ ok: false, msg: "Introducir usuario y correo!" });
    }
  } catch (e) {
    return res.json({ ok: false, msg: e.toString() });
  }
};

const crypto = require("crypto");
exports.email_resetPass = async (req, res) => {
  try {
    if (req.body.Email) {
      const token = crypto.randomBytes(64).toString("hex");
      pool.getConnection((e, c) => {
        pool.query(`SELECT User FROM user WHERE Email = '${req.body.Email}';`, async (e, r) => {
          if (r) {
            pool.query(`UPDATE user SET Token = '${token}' WHERE Email = '${req.body.Email}';`, async (e, rx) => {
              c.release();
              const transporter = nodemailer.createTransport(config);
              const mailOptions = {
                from: process.env.EMAIL_USER,
                to: req.body.Email,
                subject: "Restaurar tu contraseña",
                html: `
                <h3>Buenas, </h3>
                <div>
                Si has recibido este correo es porque hemos recibido una peticion de reset de contraseña a tu cuenta
                <br>
                Tu usuario es ${r[0].User}
                <br>
                <a href="${process.env.FRONT_DOMAIN + "#/resetPass?token=" + token + "&email=" + req.body.Email}">
                ${process.env.FRONT_DOMAIN + "#/resetPass?token=" + token + "&email=" + req.body.Email}
                </a>
                <br>
                Si tu no has solicitado el reset de contraseña, no tienes que hacer nada.
                Saludo Clara
                </div>`
              };
              transporter.sendMail(mailOptions, function (e, info) {
                transporter.close()
                if (e) {
                  res.json({ ok: true, msg: "Compruebe en su buzon." });
                } else {
                  pool.getConnection((e, c) => {
                    pool.query(`INSERT INTO regemail VALUES (?,?,?,?);`, ["", req.body.Email, new Date(), "Reset contraseña"], () => {
                      res.json({ ok: true, msg: "Guia enviada correctamente, comprueba en su bandeja de entrada!" });
                      c.release();
                    });
                  });
                  res.json({ ok: true, msg: "Compruebe en su buzon." });
                }
              })
            });
          } else {
            c.release();
            res.json({ ok: true, msg: "Compruebe en su buzon." });
          }
        });
      });
    } else {
      res.json({ ok: false, msg: "Introducir el correo!" });
    }
  } catch (e) {
    return res.json({ ok: false, msg: e.toString() });
  }
};


exports.email_contacto = async (req, res) => {
  try {
    if (req.body.Name && req.body.Email) {
      const transporter = nodemailer.createTransport(config);
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_CONTACTO,
        subject: req.body.Title,
        html: `
        <h1> ${req.body.Title}: </h1> <br>
           Nombre: ${req.body.Name} <br>
           Email: ${req.body.Email} <br>
           Mensaje: ${req.body.Msg}`
      };
      transporter.sendMail(mailOptions, function (e, info) {
        transporter.close()
        if (e) {
          res.json({ ok: true });
        } else {
          pool.getConnection((e, c) => {
            pool.query(`INSERT INTO regemail VALUES (?,?,?,?);`, [req.body.Name, req.body.Email, new Date(), "Contacto"], () => {
              res.json({ ok: true, msg: "Guia enviada correctamente, comprueba en su bandeja de entrada!" });
              c.release();
            });
          });
          res.json({ ok: true });
        }
      })
    };
  } catch (e) { res.json({ ok: false, msg: e.toString() }); }
};


exports.get = async (req, res) => {
  try {
    SELECT("regemail", req, res);
  } catch (e) {
    return res.json({ ok: false, msg: e.toString() });
  }
};