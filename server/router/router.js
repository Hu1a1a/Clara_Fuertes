const express = require("express");
const router = express.Router();
const c_router = require("../controller/router");
const c_curso = require("../controller/curso");

router.get("/", c_router.main);
router.get("/ensalada", c_router.ensalada);
router.post("/ensalada", c_router.email_ensalada);
router.get("/patologia", c_router.patologia);

router.get("/curso/login", c_curso.login);
router.post("/curso/login", c_curso.login_auth);

router.get("/curso/index", c_curso.index);

module.exports = router;
