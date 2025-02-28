"use strict";
require("dotenv").config();
const path = require("path");
const express = require("express");
const cors = require("cors");
const app = express();

app.set("json space", 2);
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("build"));
app.use(express.static("public"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  next();
});

app.get("/public/:file", (req, res) => res.sendFile(path.join(__dirname, "./public/" + req.params.file)));
app.use("/api", require("./server/router/router"));
app.use((err, req, res, next) => res.status(500).send('Something went wrong!'));
const app_ssr = require("./build/server/main").app(app);
const app_websocket = app_ssr.listen(process.env.PORT);

const ws = require('ws')
const wsServer = new ws.Server({ server: app_websocket })
const { setup } = require("./server/controller/websocket")
setup(wsServer)
