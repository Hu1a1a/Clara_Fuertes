const express = require("express");
const router = express.Router();
const email = require("../controller/email");
const curso = require("../controller/curso");
const auth = require("../controller/auth");
const user = require("../controller/user");
const comentario = require("../controller/comment");
const stripe = require("../controller/stripe");

router.post("/email/ensalada/", email.email_ensalada);
router.post("/email/contacto/", email.email_contacto);
router.get("/email/", email.get);
router.post("/resetPass/", email.email_resetPass);

router.get("/curso/level1/", curso.level1);
router.get("/curso/level2/", curso.level2);
router.get("/curso/video/", curso.video);
router.get("/curso/curso/", curso.curso);
router.get("/curso/curso/id/:id", curso.cursobyid);


router.post("/curso/level1/create/", curso.add_level1);
router.post("/curso/level2/create/", curso.add_level2);
router.post("/curso/video/create/", curso.add_video);
router.post("/curso/curso/create/", curso.add_curso);

router.post("/curso/level1/update/", curso.update_level1);
router.post("/curso/level2/update/", curso.update_level2);
router.post("/curso/video/update/", curso.update_video);
router.post("/curso/curso/update/", curso.update_curso);

router.post("/curso/level1/delete/", curso.delete_level1);
router.post("/curso/level2/delete/", curso.delete_level2);
router.post("/curso/video/delete/", curso.delete_video);
router.post("/curso/curso/delete/", curso.delete_curso);

router.get("/user/", user.get);
router.post("/user/create/", user.add);
router.post("/user/update/", user.update);
router.post("/user/delete/", user.delete);

router.get("/comentario/", comentario.get);
router.post("/comentario/create/", comentario.add);
router.post("/comentario/update/", comentario.update);
router.post("/comentario/delete/", comentario.delete);

//router.post("/stripe/pay/", stripe.paySession);
//router.post("/stripe/check/", stripe.checkSession);
router.post("/stripe/asesoramiento/pay/", stripe.asesoramiento);
router.post("/stripe/webhook", stripe.webhook);

router.get("/token/", auth.checkToken);
router.post("/login/", auth.login);
router.post("/resetPassword/", auth.resetPassword);

module.exports = router;
