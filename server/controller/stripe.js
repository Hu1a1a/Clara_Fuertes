"use strict";
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);
const pool = require("../../db/db");
const { nodemailer, config } = require("../../mail/mail");

exports.asesoramiento = async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: req.body.StripeId,
          quantity: 1,
        },
      ],
      phone_number_collection: { enabled: true },
      //invoice_creation: { enabled: true },
      mode: "payment",
      success_url: `${process.env.FRONT_DOMAIN}#/${req.body.CallBack}/pay`,
      cancel_url: `${process.env.FRONT_DOMAIN}#/${req.body.CallBack}/pay`,
      consent_collection: { terms_of_service: "required" },
      custom_text: {
        after_submit: { message: "Tras realizar el pago, Clara se pondra en contacto contigo para el asesoramiento personalizado!" },
        submit: { message: "Estas a un paso de tener tu asesoramiento personalizado!" },
        terms_of_service_acceptance: {
          message: `Acepto los términos y condiciones.`,
        },
      },
      expires_at: Math.floor(new Date().getTime() / 1000 + 32 * 60),
    });
    res.json({ ok: true, url: session.url });
  } catch (e) {
    res.send({ ok: false, msg: e.toString() });
  }
};

exports.asesoramientoCheck = async (req, res) => {
  if (req.body.url) {
    const Url = req.body.url.toString().split("/pay/")[1].split("#")[0];
    try {
      const session = await stripe.checkout.sessions.retrieve(Url);
      if (session.status === "complete") {
        const transporter = nodemailer.createTransport(config);
        const mailOptions = {
          from: `Clara Fuertes Nutrición <${process.env.EMAIL_USER}>`,
          to: process.env.EMAIL_CONTACTO,
          subject: "Asesoramiento pagado",
          html: `
          <h1> Asesoramiento pagado !</h1>
          id: <b> ${session.id} </b><br>
          Nombre: ${session.customer_details.name} <br>
          Email: ${session.customer_details.email} <br>
          Telefono: ${session.customer_details.phone} <br>
          Importe pagado: ${session.amount_total / 100} € <br>
          Verifica en el Stripe que el pago se ha realizado correctamente`,
        };
        transporter.sendMail(mailOptions, function (e, info) {
          transporter.close();
          if (e) {
            res.json({
              ok: true,
              msg:
                "Se ha realizado el pago correctamente, contacte con nosotros por el correo y facilitanos sus datos, debido a un problema técnico, Email: " +
                process.env.EMAIL_CONTACTO,
            });
          } else {
            const transporter1 = nodemailer.createTransport(config);
            const mailOptions = {
              from: `Clara Fuertes Nutrición <${process.env.EMAIL_USER}>`,
              to: session.customer_details.email,
              subject: "[Clara Fuertes] Asesoramiento personalizado pagado",
              html: `
            Gracias por su compra en el asesoramiento personalizado por Clara Fuertes!
            En breve contactaremos contigo para el asesoramiento!
            <h4>
            <br>
            ¡Un super abrazo!
            <br>
            Clara
            <br>
            </h4>
            <img src="cid:logo" style='height:100px'>
            <br>
            <span style='font-size:5pt;color:rgb(127,127,127)'>
            Este mensaje y sus archivos adjuntos van dirigidos exclusivamente a su destinatario, pudiendo contener información confidencial sometida a secreto profesional. No está permitida su reproducción o distribución sin la autorización expresa de Clara Fuertes Camprubi. Si usted no es el destinatario final por favor elimínelo e infórmenos por esta vía.
            En cumplimiento de lo establecido en el Reglamento General de Protección de Datos (RGPD) (UE) 2016/679 y a la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos de Carácter Personal y Garantía de los Derechos Digitales (LOPD-GDD), le informamos que tratamos sus datos personales con la finalidad de responder a su solicitud de información, realizar la gestión administrativa derivada de la prestación del servicio, así como enviarle comunicaciones comerciales sobre nuestros servicios.
            La legitimación será en base a un interés legítimo, por ejecución de un contrato y/o por consentimiento, en algunos casos. Los datos proporcionados se conservarán mientras se mantenga la relación contractual o durante los años necesarios para cumplir con las obligaciones legales. Los datos no se cederán a terceros salvo en los casos en que exista una obligación legal o sea necesario para la prestación del servicio. No se tomarán decisiones automatizadas que puedan causar un efecto jurídico significativo, salvo que se haya recabado previamente el consentimiento.
            Asimismo, le informamos de la posibilidad de ejercer los siguientes derechos sobre sus datos personales: derecho de acceso, rectificación, supresión u olvido, limitación, oposición, portabilidad y a retirar el consentimiento prestado. Para ello podrá enviar un email a: info@claranutricion.com, adjuntando copia de su DNI.
            Además, el interesado puede dirigirse a la Autoridad de Control en materia de Protección de Datos competente (AEPD, en España) para obtener información adicional o presentar una reclamación.
            </span>
            `,
              attachments: [
                {
                  filename: 'LogoClaraX.jpg',
                  path: __dirname + '/../../public/LogoClaraX.jpg',
                  cid: 'logo'
                }
              ],
            };
            transporter1.sendMail(mailOptions, function (e, info) {
              transporter1.close();
              if (e) {
                res.json({
                  ok: true,
                  msg:
                    "Se ha realizado el pago correctamente, contacte con nosotros por el correo y facilitanos sus datos, debido a un problema técnico, Email: " +
                    process.env.EMAIL_CONTACTO,
                });
              } else {
                pool.getConnection((e, c) => {
                  pool.query(
                    `INSERT INTO regemail VALUES (?,?,?,?,?);`,
                    [session.customer_details.name, session.customer_details.email, new Date(), "Asesoramiento pagado",
                    `
          <h1> Asesoramiento pagado !</h1>
          id: <b> ${session.id} </b><br>
          Nombre: ${session.customer_details.name} <br>
          Email: ${session.customer_details.email} <br>
          Telefono: ${session.customer_details.phone} <br>
          Importe pagado: ${session.amount_total / 100} € <br>
          Verifica en el Stripe que el pago se ha realizado correctamente`],
                    () => {
                      res.json({
                        ok: true,
                        msg: "Se ha realizado el pago correctamente, en breve nos pondremos en contacto con contigo!",
                      });
                      c.release();
                    }
                  );
                });
              }
            });
          }
        });
      } else res.json({ ok: false, msg: "Pago fallido!" });
    } catch (e) {
      res.json({ ok: false, msg: e.toString() });
    }
  } else res.json({ ok: false, msg: "erronea!" });
};

/*
exports.paySession = async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: req.body.StripeId,
          quantity: 1,
        },
      ],
      phone_number_collection: { enabled: true },
      invoice_creation: { enabled: true },
      mode: "payment",
      success_url: `${process.env.FRONT_DOMAIN}#/compra/pay`,
      cancel_url: `${process.env.FRONT_DOMAIN}#/compra/pay`,
      expires_at: Math.floor(new Date().getTime() / 1000 + 32 * 60),
    });
    res.json({ ok: true, url: session.url });
  } catch (e) {
    res.send({ ok: false, msg: e.toString() });
  }
};

exports.checkSession = async (req, res) => {
  if (req.body.url) {
    const Url = req.body.url.toString().split("/pay/")[1].split("#")[0];
    try {
      const session = await stripe.checkout.sessions.retrieve(Url);
      if (session.status === "complete") {
        pool.getConnection((e, c) => {
          pool.query(
            `INSERT INTO user (User, Pass, Email, Phone, Admin) VALUES ('${session.customer_details.name}', 'Nutricion', '${session.customer_details.email}', '${session.customer_details.phone}', 0);`,
            async (e, r) => {
              pool.query(`UPDATE user SET User = '${session.customer_details.name + r.insertId}' WHERE id = ${r.insertId}`, async (e, r) => {
                c.release();
                res.json({
                  ok: true,
                  msg: "Curso comprado correctamente!",
                  phone: session.customer_details.phone,
                  email: session.customer_details.email,
                  name: session.customer_details.name,
                  importe: session.amount_total / 100,
                });
              });
            }
          );
        });
      } else res.json({ ok: false, msg: "Pago fallido! Contacte con el administrador en caso de error!" });
    } catch (e) {
      res.json({ ok: false, msg: e.toString() });
    }
  } else res.json({ ok: false, msg: "erronea!" });
};
*/
