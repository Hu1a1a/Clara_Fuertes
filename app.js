require("dotenv").config();
const path = require("path");
const express = require("express");
const cors = require("cors");
const app = express();
const WebSocketServer = require("ws").Server;
const ws = new WebSocketServer({ port: process.env.PORTSOCKET });

ws.on('connection', (ws) => {
  ws.on('message', (data) => {
    console.log(JSON.parse(data))
  });
  return ws.send(JSON.stringify({ ok: true }))
});

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
app.get("*", (req, res) => res.sendFile(path.join(__dirname, "./build/index.html")));
app.listen(process.env.PORT);
