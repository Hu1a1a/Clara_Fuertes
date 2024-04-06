const express = require("express");
const router = express.Router();
const c_router = require("../controller/router");
const c_curso = require("../controller/curso");

router.post("/email/ensalada", c_router.email_ensalada);
router.post("/curso/login", c_curso.login);

module.exports = router;
