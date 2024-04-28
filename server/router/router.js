const express = require("express");
const router = express.Router();
const email = require("../controller/email");
const curso = require("../controller/curso");
const auth = require("../controller/auth");

router.post("/email/ensalada/", email.email_ensalada);

router.get("/curso/", curso.curso);

router.post("/login/", auth.login);
router.get("/token/", auth.checkToken);

module.exports = router;
