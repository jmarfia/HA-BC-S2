const http = require("http");
const express = require("express");
const db = require("./db");
const postController = require("./controller/postController");
const AccessCtrl = require("./controller/AccessController");
const path = require("path");
const articleModel = require("./modelos/article")

//Requires Login/Register
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

//Configs a mover de lugar
//Passport
passport.use(new LocalStrategy({
    usernameField: 'email',
  },
  function(username, password, done) {
    User.findOne({ username: username }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));





const app = express();
app.set("view engine", "ejs");
app.use("/public", express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));

app.get("/", postController.getAllArticles); //ok
app.get("/articulo", postController.getArticleById); //ok
app.get("/modificararticulo", postController.editArticleById);//ok
app.get("/setarticulo", postController.updateArticleById);//ok
app.get("/borrararticulo", postController.deleteArticleById);// ok
app.get("/adminpanel", postController.adminPanel); //ok
app.get("/contacto", postController.contacto); //ok
//app.get("/pruebasqlz", postController.sqlz);

//Login/Register EndPoints
app.get("/admin/registro", (req, res) => AccessCtrl.showRegister(req, res));
app.post("/admin/registro", (req, res) => AccessCtrl.register(req, res));
app.get("/admin/ingreso", (req, res) => AccessCtrl.showLogin(req, res));
app.post("/admin/ingreso", (req, res) => AccessCtrl.login(req, res));
app.get("/admin/cerrar-sesion", (req, res) => AccessCtrl.logout(req, res));


app.listen(3000);