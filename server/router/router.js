const express = require("express");
const router = express.Router();
const email = require("../controller/email");
const curso = require("../controller/curso");
const auth = require("../controller/auth");

router.post("/email/ensalada/", email.email_ensalada);

router.get("/curso/level1/", curso.level1);
router.get("/curso/level2/", curso.level2);
router.get("/curso/video/", curso.video);

router.post("/curso/create/level1/", curso.add_level1);
router.post("/curso/create/level2/", curso.add_level2);
router.post("/curso/create/video/", curso.add_video);

router.post("/curso/update/level1/", curso.update_level1);
router.post("/curso/update/level2/", curso.update_level2);
router.post("/curso/update/video/", curso.update_video);

router.post("/curso/delete/level1/", curso.delete_level1);
router.post("/curso/delete/level2/", curso.delete_level2);
router.post("/curso/delete/video/", curso.delete_video);

router.post("/login/", auth.login);
router.get("/token/", auth.checkToken);

module.exports = router;
