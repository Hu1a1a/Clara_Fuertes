const express = require("express");
const router = express.Router();
const c_router = require("../controller/router");

router.get("/", c_router.main);

module.exports = router;
