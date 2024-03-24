exports.main = async (req, res) => {
  const messages = await req.flash("info");
  const locals = {
    title: "El Vestidor de Sofía - App",
    description: "CRM - El Vestidor de Sofía",
    messages: messages,
  };
  res.render("main", locals);
};
