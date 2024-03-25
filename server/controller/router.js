exports.main = async (req, res) => {
  const messages = await req.flash("info");
  const locals = {
    title: "El Vestidor de Sofía - App",
    description: "CRM - El Vestidor de Sofía",
    messages: messages,
  };
  res.render("main", locals);
};

exports.ensalada = async (req, res) => {
  const messages = await req.flash("info");
  const locals = {
    title: "El Vestidor de Sofía - Ensalada",
    description: "CRM - El Vestidor de Sofía",
    messages: messages,
  };
  res.render("ensalada", locals);
};

const nodeoutlook = require("nodejs-nodemailer-outlook");
exports.email_ensalada = async (req, res) => {
  const locals = {
    title: "El Vestidor de Sofía - Mensage",
    description: "CRM - El Vestidor de Sofía",
  };
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
      onError: () => (locals.messages = ["No se ha enviado correctamente, contacte con el administrador!"]),
      onSuccess: () => (locals.messages = ["Tienes Tu Guía de Ensaladas en tu e-mail", "Espero de corazón que te sirva de ayuda"]),
    });
  } else {
    locals.messages = ["Introducir nombre y correo correctamente!"];
  }
  res.render("msg", locals);
};

exports.patologia = async (req, res) => {
  const messages = await req.flash("info");
  const locals = {
    title: "El Vestidor de Sofía - Patologia Digestiva",
    description: "CRM - El Vestidor de Sofía",
    messages: messages,
  };
  res.render("patologia", locals);
};
