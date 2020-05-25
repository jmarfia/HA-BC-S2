const http = require("http");
const express = require("express");//
const db = require("./db");//
const postController = require("./controller/postController");//
const AccessCtrl = require("./controller/AccessController");//
const path = require("path");
const Sequelize = require("sequelize");
const { User } = require("./modelos");//
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes");
require("dotenv").config();

//Requires Login/Register
const session = require("express-session");
const passport = require("passport"),
  FacebookStrategy = require("passport-facebook").Strategy;
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");

const app = express();

app.set("view engine", "ejs");
app.use("/public", express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.use(routes);

//Session
app.use(
  session({
    secret: "ExtremadamenteSecreto",
    resave: false,
    saveUninitialized: false,
  })
);

/** set app */

app.use(cors());
app.use(
  bodyParser.json({
    limit: "50mb",
  })
);

const isAuthenticated = async (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/");
};

app.get("/auth/facebook", passport.authenticate("facebook", { scope: "public_profile, email" }));

app.get("/auth/facebook/callback", passport.authenticate("facebook", { successRedirect: "/adminpanel", failureRedirect: "/ingresar" }));

app.use("/auth/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

app.listen(3000);
