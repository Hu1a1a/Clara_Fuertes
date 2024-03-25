const express = require("express");
const router = express.Router();
const c_router = require("../controller/router");

router.get("/", c_router.main);
router.get("/ensalada", c_router.ensalada);
router.post("/ensalada", c_router.email_ensalada);
router.get("/patologia", c_router.patologia);

module.exports = router;
