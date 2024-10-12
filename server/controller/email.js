"use strict";
const { nodemailer, config } = require("../../mail/mail");
const pool = require("../../db/db");
const { SELECT, DELETEBY } = require("./controller");
const crypto = require("crypto");
const from = `Clara Fuertes Nutrición <${process.env.EMAIL_USER}>`
const footer = `
      <h4>
      <br>
      ¡Un super abrazo!
      <br><br>
      Clara Fuertes Camprubí
      </h4>
      Colegiada CAT00866
      <br>
      Dietista - Nutricionista
      <br><br>
      <img src="cid:logo" style='height:100px'>
      <br>
      <span style='font-size:5pt;color:rgb(127,127,127);display: inline-table;'>
      Este mensaje y sus archivos adjuntos van dirigidos exclusivamente a su destinatario, pudiendo contener información confidencial sometida a secreto profesional. No está permitida su reproducción o distribución sin la autorización expresa de Clara Fuertes Camprubi. Si usted no es el destinatario final por favor elimínelo e infórmenos por esta vía.
      En cumplimiento de lo establecido en el Reglamento General de Protección de Datos (RGPD) (UE) 2016/679 y a la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos de Carácter Personal y Garantía de los Derechos Digitales (LOPD-GDD), le informamos que tratamos sus datos personales con la finalidad de responder a su solicitud de información, realizar la gestión administrativa derivada de la prestación del servicio, así como enviarle comunicaciones comerciales sobre nuestros servicios.
      La legitimación será en base a un interés legítimo, por ejecución de un contrato y/o por consentimiento, en algunos casos. Los datos proporcionados se conservarán mientras se mantenga la relación contractual o durante los años necesarios para cumplir con las obligaciones legales. Los datos no se cederán a terceros salvo en los casos en que exista una obligación legal o sea necesario para la prestación del servicio. No se tomarán decisiones automatizadas que puedan causar un efecto jurídico significativo, salvo que se haya recabado previamente el consentimiento.
      Asimismo, le informamos de la posibilidad de ejercer los siguientes derechos sobre sus datos personales: derecho de acceso, rectificación, supresión u olvido, limitación, oposición, portabilidad y a retirar el consentimiento prestado. Para ello podrá enviar un email a: info@claranutricion.com, adjuntando copia de su DNI.
      Además, el interesado puede dirigirse a la Autoridad de Control en materia de Protección de Datos competente (AEPD, en España) para obtener información adicional o presentar una reclamación.
      </span>`

const recursos = [
  {
    Req: "ensalada",
    Title: "ENSALADAS - LA GUIA INFALIBLE QUE RESUELVE TODAS TUS DUDAS",
    Html: `
      <div class="e0">
          Te regalo la Guía GRATUITA que necesitas para hacer tus ensaladas
          equilibradas, completas y suficientes
      <br>
          ¡Se acabaron las dudas!
      </div>
      <div>
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
      ${footer}`,
    Doc: {
      filename: "/ENSALADAS. LA GUIA INFALIBLE QUE RESUELVE TODAS TUS DUDAS.pdf",
      path: __dirname + "/../../public/ENSALADAS.pdf",
    }
  },
  {
    Req: "intestinal",
    Title: "TEST PERMEABILIDAD INTESTINAL - Averigua con este Test Rápido tu salud digestiva",
    Html: `
      <div class="e0">Averigua con este Test Rápido tu salud digestiva</div>
      <div>
      Un intestino hiperpermeable está estrechamente relacionado con la inflamación, y no solo inflamación intestinal, si no que esta inflamación se traslada a otras partes del organismo.
      <br>
      Descubre si esto puede ser un problema en tu caso, resolviendo este TEST DE PERMEABILIDAD INTESTINAL.
      </div>
      ${footer}`,
    Doc: {
      filename: "/TEST PERMEABILIDAD INTESTINAL.pdf",
      path: __dirname + "/../../public/TEST PERMEABILIDAD INTESTINAL.pdf",
    }
  },
  {
    Req: "desayuno",
    Title: "EMPIEZA EL DÍA SIN INFLAMACIÓN - El desayuno: La comida más importante del día",
    Html: `
      <div class="e0">Ebook gratuito Todo sobre el Desayuno</div>
      <div>
      Te regalo el Ebook sobre desayunos más completo, para que empieces el día sin inflamación. Apréndelo todo sobre la comida más importante del día.
      <br>
      Además, tienes marcadas las opciones aptas en una dieta baja en FODMAP.
      </div>
      ${footer}`,
    Doc: {
      filename: "/Empieza el día sin inflamación. Desayuno, la comida más importante.pdf",
      path: __dirname + "/../../public/Empieza el día sin inflamación. Desayuno, la comida más importante.pdf",
    }
  }
]


exports.email_recursos = (req, res) => {
  try {
    if (req.body.Name && req.body.Email) {
      const Doc = recursos.find((a) => a.Req === req.body.Doc)
      if (Doc) {
        const transporter = nodemailer.createTransport(config);
        const mailOptions = {
          from: from,
          to: req.body.Email,
          subject: Doc.Title,
          html:
            `<h3>Buenas ${req.body.Name}, </h3>
            ${Doc.Html}`,
          attachments: [
            Doc.Doc,
            {
              filename: 'LogoClaraX.jpg',
              path: __dirname + '/../../public/LogoClaraX.jpg',
              cid: 'logo'
            }
          ],
        };
        transporter.sendMail(mailOptions, (e) => {
          transporter.close();
          if (e) res.json({ ok: false, msg: e.toString() });
          else {
            try {
              pool.getConnection((e, c) => {
                pool.query(`INSERT INTO regemail VALUES (?,?,?,?,?,?);`, [, req.body.Name, req.body.Email, new Date(), "Recursos - " + req.body.Doc, ""], () => {
                  res.json({ ok: true, msg: "Recurso enviado correctamente, comprueba en su bandeja de entrada!" });
                  c.release();
                });
              });
            } catch (e) { return res.json({ ok: false, msg: e.toString() }); }
          }
        });
      } else res.json({ ok: false, msg: "Error desconocido, contacte con el administrador!" });
    } else res.json({ ok: false, msg: "Introducir usuario y correo!" });
  } catch (e) { return res.json({ ok: false, msg: e.toString() }); }
};

exports.email_resetPass = (req, res) => {
  try {
    if (req.body.Email) {
      const token = crypto.randomBytes(64).toString("hex");
      pool.getConnection((e, c) => {
        pool.query(`SELECT User FROM user WHERE Email = '${req.body.Email}';`, (e, r) => {
          if (r && r[0]) {
            pool.query(`UPDATE user SET Token = '${token}' WHERE Email = '${req.body.Email}';`, (e, rx) => {
              c.release();
              const transporter = nodemailer.createTransport(config);
              const mailOptions = {
                from: `Clara Fuertes Nutrición <${process.env.EMAIL_USER}>`,
                to: req.body.Email,
                subject: "Restaurar tu contraseña",
                html:
                  `
                <h3>Buenas, </h3>
                <div>
                Si has recibido este correo es porque hemos recibido una peticion de reset de contraseña a tu cuenta
                <br>
                Tu usuario es ${r[0].User}
                <br>
                <a href="${process.env.FRONT_DOMAIN + "resetPass?token=" + token + "&email=" + req.body.Email}">
                ${process.env.FRONT_DOMAIN + "resetPass?token=" + token + "&email=" + req.body.Email}
                </a>
                <br>
                Si tu no has solicitado el reset de contraseña, no tienes que hacer nada.
                </div>
                ${footer}`,
                attachments: [
                  {
                    filename: 'LogoClaraX.jpg',
                    path: __dirname + '/../../public/LogoClaraX.jpg',
                    cid: 'logo'
                  }
                ],
              };
              transporter.sendMail(mailOptions, (e) => {
                transporter.close();
                if (e) res.json({ ok: true, msg: "Compruebe en su buzón." });
                else {
                  pool.getConnection((e, c) => {
                    pool.query(`INSERT INTO regemail VALUES (?,?,?,?,?,?);`, [, "", req.body.Email, new Date(), "Reset contraseña", ""], () => {
                      res.json({ ok: true, msg: "Reset de contraseña enviada correctamente, comprueba en su bandeja de entrada!" });
                      c.release();
                    });
                  });
                  res.json({ ok: true, msg: "Compruebe en su buzon." });
                }
              });
            });
          } else {
            c.release();
            res.json({ ok: true, msg: "Compruebe en su buzon." });
          }
        });
      });
    } else res.json({ ok: false, msg: "Introducir el correo!" });
  } catch (e) { return res.json({ ok: false, msg: e.toString() }); }
};

exports.email_contacto = (req, res) => {
  try {
    if (req.body.Name && req.body.Email) {
      const transporter = nodemailer.createTransport(config);
      const mailOptions = {
        from: `Clara Fuertes Nutrición <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_CONTACTO,
        subject: req.body.Title,
        html: `
        <h1> ${req.body.Title}: </h1> 
        <br>
        Nombre: ${req.body.Name} 
        <br>
        Email: ${req.body.Email} 
        <br>
        Mensaje: ${req.body.Msg} 
        <br>
        ${footer}`,
      };
      transporter.sendMail(mailOptions, (e) => {
        transporter.close();
        if (e) res.json({ ok: true });
        else {
          pool.getConnection((e, c) => {
            pool.query(`INSERT INTO regemail VALUES (?,?,?,?,?,?);`, [, req.body.Name, req.body.Email, new Date(), req.body.Title, req.body.Msg], () => {
              res.json({ ok: true, msg: "Guia enviada correctamente, comprueba en su bandeja de entrada!" });
              c.release();
            });
          });
        }
      });
    }
  } catch (e) { res.json({ ok: false, msg: e.toString() }); }
};

exports.get = (req, res) => {
  try { SELECT("regemail", req, res); }
  catch (e) { return res.json({ ok: false, msg: e.toString() }); }
};

exports.delete_by_email = (req, res) => {
  try { DELETEBY("regemail", "Email", req, res); }
  catch (e) { return res.json({ ok: false, msg: e.toString() }); }
};
