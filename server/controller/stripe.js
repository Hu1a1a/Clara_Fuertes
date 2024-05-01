"use strict";
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

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
  console.log(req.body);
  if (req.body.Url) {
    const Url = req.body.Url.toString().split("/pay/")[1].split("#")[0];
    try {
      const session = await stripe.checkout.sessions.retrieve(Url);
      if (session.status === "complete") {
        let sqlString = "";
        let date = [];
        con.query(sqlPaying, (err, result) => {
          if (err) res.send();
          else {
            for (const item of result) {
              if (item.Striper === Url) {
                sqlString += `,(${item.Date}, "${session.customer_details.phone}", "${session.customer_details.email}", 
                "${session.customer_details.name}", "${Url}", "${session.amount_total / 100}")`;
                date.push(item.Date);
              }
            }
            if (sqlString) {
              con.query(`INSERT INTO Reserva VALUES ${sqlString.replace(",", "")}`, (err) => {
                if (!err) {
                  con.query(`DELETE FROM Paying WHERE Striper = "${Url}"`, (err) => {
                    if (!err) {
                      con.query(
                        `DELETE FROM Paying WHERE ExpireDate < ${GetDay(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())}`
                      );
                    }
                  });
                }
              });
            }
            res.json({
              mensaje: "realizado!",
              date: date,
              phone: session.customer_details.phone,
              email: session.customer_details.email,
              name: session.customer_details.name,
              importe: session.amount_total / 100,
              Url: Url,
            });
          }
        });
      } else res.json({ mensaje: "erronea!" });
    } catch {
      res.json({ mensaje: "erronea!" });
    }
  }
};
