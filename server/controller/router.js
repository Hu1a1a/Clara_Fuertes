const nodeoutlook = require("nodejs-nodemailer-outlook");
exports.email_ensalada = async (req, res) => {
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
      <h3>Hi ${eq.body.Name}, </h3>
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
      onError: () => res.json({ ok: true, msg: "error send" }),
      onSuccess: () => res.json({ ok: true, msg: "email send" }),
    });
  } else {
    res.json({ ok: false, msg: "error desconocido" });
  }
};
