const http = require("http");
const express = require("express");
const db = require("./db");
const postController = require("./controller/postController");
const AccessCtrl = require("./controller/AccessController");
const path = require("path");
const articleModel = require("./modelos/article");
const Sequelize = require("sequelize");
const authorModel = require("./modelos/author");

//Requires Login/Register
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");

const app = express();

app.set("view engine", "ejs");
app.use("/public", express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

//Configs a mover de lugar
//Session
app.use(
  session({
    secret: "AlgúnTextoSuperSecreto",
    resave: true,
    saveUninitialized: true,
  })
);

//Passport
app.use(passport.initialize());
app.use(passport.session());
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    function (username, password, done) {
      authorModel.findOne({ where: { email: username } }, (err, author) => {
        if (err) {
          return done(err);
        }
        if (!author) {
          return done(null, false, { message: "Incorrect username." });
        }
        if (!author.validPassword(password)) {
          return done(null, false, { message: "Incorrect password." });
        }
        return done(null, author);
      });
    }
  )
);

passport.serializeUser(function (author, done) {
  done(null, author.id);
});

passport.deserializeUser(function (id, done) {
  authorModel
    .findByPk(id)
    .then((author) => {
      done(null, author);
    })
    .catch((error) => {
      done(error, author);
    });
});

//bcryptjs
var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync("B4c0//", salt);
// Store hash in your password DB.
bcrypt.compareSync("B4c0//", hash); // true, aca tendria que ir la password hasheada a comparar
// Middleware de acceso.
const access = () => {
  return (req, res, next) => {
    if (req.isAuthenticated()) {
      next();
    } else {
      res.redirect("/ingresar");
    }
  };
};

app.get("/", postController.getAllArticles); //ok
app.get("/articulo", postController.getArticleById); //ok
app.get("/modificararticulo", access(), postController.editArticleById); //ok
app.get("/setarticulo", access(), postController.updateArticleById); //ok
app.get("/borrararticulo", access(), postController.deleteArticleById); // ok
app.get("/adminpanel", access(), postController.adminPanel); //ok
app.get("/contacto", postController.contacto); //ok
//app.get("/pruebasqlz", postController.sqlz);

//Login/Register EndPoints
app.get("/registro", (req, res) => AccessCtrl.showRegister(req, res));
app.post("/registro", (req, res) => AccessCtrl.register(req, res));
app.get("/ingresar", (req, res) => AccessCtrl.showLogin(req, res));
app.post("/ingresar", (req, res) =>
  passport.authenticate("local", {
    successRedirect: "/adminpanel",
    failureRedirect: "/ingresar",
  })
);
app.get("/cerrar-sesion", (req, res) => AccessCtrl.logout(req, res));

app.listen(3000);
