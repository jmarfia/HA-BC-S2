const http = require("http");
const express = require("express");
const db = require("./db");
const postController = require("./controller/postController");
const AccessCtrl = require("./controller/AccessController");
const path = require("path");
const Sequelize = require("sequelize");
const { Author } = require("./modelos");
const cors = require("cors")
const bodyParser = require("body-parser")
require('dotenv').config()


//Requires Login/Register
const session = require("express-session");
const passport = require("passport"), FacebookStrategy = require('passport-facebook').Strategy;
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
    secret: "ExtremadamenteSecreto",
    resave: false,
    saveUninitialized: false,
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
      Author.findOne({ where: { email: username } })
        .then((author) => {
          if (author === null) {
            return done(null, false, { message: "Incorrect username." });
          }
          author.validPassword(password, (err, isMatch) => {
            if (isMatch && !err) {
              return done(null, author);
            } else {
              return done(null, false, { message: "Incorrect password." });
            }
          });
        })
        .catch((err) => done(err));
    }
  )
);

passport.serializeUser(function (author, done) {
  done(null, author.id);
});

passport.deserializeUser(function (id, done) {
  Author.findByPk(id)
    .then((author) => {
      done(null, author);
    })
    .catch((error) => {
      done(error, author);
    });
});


/////////////////////////////////////////////////////////////////////////////////////////////


/** passport setup */
passport.use(new FacebookStrategy({
  clientID: "238129214160417",
  clientSecret: "bfa9f883f79b05b502b343694d469d93",
  callbackURL: "http://localhost:3000/auth/facebook/callback",
  profileFields: ['id', 'displayName','email'],
  enableProof: true
},
function(accessToken, refreshToken, user, cb) {
  return cb(null,user);
}
));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

/** set app */

app.use(cors());
app.use(bodyParser.json({
  limit: '50mb'
}));


const isAuthenticated = async (req, res, next) => {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/');
}

app.get('/auth/facebook', passport.authenticate('facebook', {scope:"email"}));

app.get('/auth/facebook/callback', passport.authenticate('facebook', { successRedirect: '/adminpanel', failureRedirect: '/ingresar' }));

app.use('/auth/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});



/////////////////////////////////////////////////////////////////////////////////////////////



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
app.post(
  "/ingresar",
  passport.authenticate("local", {
    successRedirect: "/adminpanel",
    failureRedirect: "/ingresar",
  })
);
app.get("/cerrar-sesion", (req, res) => AccessCtrl.logout(req, res));
// app.get('/auth/facebook', passport.authenticate('facebook'));
// app.get('/',
//   passport.authenticate('facebook', { successRedirect: '/',
//                                       failureRedirect: '/ingresar' }));

app.listen(3000);
