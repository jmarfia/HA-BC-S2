const http = require("http");
const express = require("express"); //
const db = require("./db"); //
const postController = require("./controller/postController"); //
const AccessCtrl = require("./controller/AccessController"); //
const path = require("path");
const Sequelize = require("sequelize");
const { User } = require("./modelos"); //
const routes = require("./routes");
require("dotenv").config();

const app = express();


//Requires Login/Register
const session = require("express-session");

app.set("view engine", "ejs");
app.use("/public", express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// //Session
// app.use(
//   session({
//     secret: "ExtremadamenteSecreto",
//     resave: false,
//     saveUninitialized: false,
//   })
// );

app.listen(3000);
