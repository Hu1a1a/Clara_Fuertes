const express = require("express");
const router = express.Router();
const email = require("../controller/email");
const curso = require("../controller/curso");

router.post("/email/ensalada", email.email_ensalada);
router.post("/curso/login", curso.login);

module.exports = router;
