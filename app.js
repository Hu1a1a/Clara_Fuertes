require("dotenv").config();

const express = require("express");
const expressLayout = require("express-ejs-layouts");
const app = express();
app.set("json space", 2);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET, POST, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.use(flash({ sessionKeyName: "flashMessage" }));
app.use(expressLayout);
app.set("view engine", "ejs");
app.set("layout", "./layouts/main");
app.use("/", require("./server/router/router"));
app.get("*", (req, res) => res.redirect("/"));
app.listen(process.env.PORT || 3000);
