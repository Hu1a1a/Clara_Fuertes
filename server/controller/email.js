const nodeoutlook = require("nodejs-nodemailer-outlook");
const pool = require("../../db/db");

exports.email_ensalada = async (req, res) => {
  try {
    if (req.body.Name && req.body.Email) {
      nodeoutlook.sendEmail({
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
        from: process.env.EMAIL_USER,
        to: req.body.Email,
        subject: "ENSALADAS. LA GUIA INFALIBLE QUE RESUELVE TODAS TUS DUDAS",
        html: `
      <h3>Hi ${req.body.Name}, </h3>
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
      `,
        attachments: [
          {
            filename: "/ENSALADAS. LA GUIA INFALIBLE QUE RESUELVE TODAS TUS DUDAS.pdf",
            path: __dirname + "../../../public/ENSALADAS.pdf",
          },
        ],
        onError: (err) => {
          console.log(err);
          res.json({ ok: false, msg: "Comprueba el email introducido." });
        },
        onSuccess: () => {
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
        },
      });
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
              nodeoutlook.sendEmail({
                auth: {
                  user: process.env.EMAIL_USER,
                  pass: process.env.EMAIL_PASSWORD,
                },
                from: process.env.EMAIL_USER,
                to: req.body.Email,
                subject: "Clara Fuertes Reset de contraseña",
                html: `
                <h3>Hi, </h3>
                <div>
                You are receiving this email because we received a password reset request for your account.
                <br>
                Your user: ${r[0].User}
                <br>
                <a href="${process.env.FRONT_DOMAIN + "#/resetPass?token=" + token + "&email=" + req.body.Email}">
                ${process.env.FRONT_DOMAIN + "#/resetPass?token=" + token + "&email=" + req.body.Email}
                </a>
                <br>
                If you did not request a password reset, no further action is required.
                Regards,
                </div>
                `,
                onError: (err) => {
                  console.log(err);
                  res.json({ ok: true, msg: "Compruebe en su buzon." });
                },
                onSuccess: () => {
                  console.log("succ");
                  res.json({ ok: true, msg: "Compruebe en su buzon." });
                },
              });
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
      nodeoutlook.sendEmail({
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_CONTACTO,
        subject: "Formulario de contacto",
        html: `
         <h1> Formulario de contacto: </h1> <br>
            Nombre: ${req.body.Name} <br>
            Email: ${req.body.Email} <br>
            Mensaje: ${req.body.Msg}
                `,
        onError: (err) => {
          console.log(err);
          res.json({ ok: true });
        },
        onSuccess: () => {
          console.log("succ");
          res.json({ ok: true });
        },
      });
    };
  } catch (e) { res.json({ ok: false, msg: e.toString() }); }
}; 
