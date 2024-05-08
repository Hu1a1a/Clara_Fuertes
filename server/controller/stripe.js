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
      invoice_creation: { enabled: true },
      mode: "payment",
      success_url: `${process.env.FRONT_DOMAIN}#/${req.body.CallBack}/pay`,
      cancel_url: `${process.env.FRONT_DOMAIN}#/${req.body.CallBack}/pay`,
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
          from: process.env.EMAIL_USER,
          to: process.env.EMAIL_CONTACTO,
          subject: "Curso pagado",
          html: `
          <h1> Curso pagado !</h1>
          id: <b> ${session.id} </b><br>
          Nombre: ${session.customer_details.name} <br>
          Email: ${session.customer_details.email} <br>
          Telefono: ${session.customer_details.phone} <br>
          Importe pagado: ${session.amount_total / 100} € <br>
          Verifica en el Stripe que el pago se ha realizado correctamente`
        };
        transporter.sendMail(mailOptions, function (e, info) {
          transporter.close()
          if (e) {
            res.json({
              ok: true,
              msg: "Se ha realizado el pago correctamente, contacte con nosotros por el correo y facilitanos sus datos, debido a un problema técnico, Email: " + process.env.EMAIL_CONTACTO
            });
          } else {
            const transporter1 = nodemailer.createTransport(config);
            const mailOptions = {
              from: process.env.EMAIL_USER,
              to: session.customer_details.email,
              subject: "Curso pagado",
              html: `
            Gracias por su compra en el curso!
            En breve contactaremos contigo para el asesoramiento!`
            };
            transporter1.sendMail(mailOptions, function (e, info) {
              transporter1.close()
              if (e) {
                res.json({
                  ok: true,
                  msg: "Se ha realizado el pago correctamente, contacte con nosotros por el correo y facilitanos sus datos, debido a un problema técnico, Email: " + process.env.EMAIL_CONTACTO
                });
              } else {
                pool.getConnection((e, c) => {
                  pool.query(`INSERT INTO regemail VALUES (?,?,?,?);`, [session.customer_details.name, session.customer_details.email, new Date(), "Curso pagado"], () => {
                    res.json({ ok: true, msg: "Guia enviada correctamente, comprueba en su bandeja de entrada!" });
                    c.release();
                  });
                });
                res.json({
                  ok: true,
                  msg: "Se ha realizado el pago correctamente, en breve nos pondremos en contacto con contigo!",
                });
              }
            })

          }
        })
      } else res.json({ ok: false, msg: "Pago fallido!" });
    } catch (e) { res.json({ ok: false, msg: e.toString() }); }
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