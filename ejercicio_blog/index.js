const http = require("http");
const express = require("express");
const db = require("./db");
const postController = require("./controller/postController");
const AccessCtrl = require("./controller/AccessController");
const path = require("path");
const Sequelize = require("sequelize");
const { User } = require("./modelos");
const cors = require("cors");
const bodyParser = require("body-parser");
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
      User.findOne({ where: { email: username } })
        .then((user) => {
          if (user === null) {
            return done(null, false, { message: "Incorrect username." });
          }
          user.validPassword(password, (err, isMatch) => {
            if (isMatch && !err) {
              return done(null, user);
            } else {
              return done(null, false, { message: "Incorrect password." });
            }
          });
        })
        .catch((err) => done(err));
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findByPk(id)
    .then((user) => {
      done(null, user);
    })
    .catch((error) => {
      done(error, user);
    });
});

/////////////////////////////////////////////////////////////////////////////////////////////

/** passport setup */
passport.use(
  new FacebookStrategy(
    {
      clientID: "625050458086852",
      clientSecret: "28713e9a18624eb5ff87efd83d37dbe3",
      callbackURL: "http://localhost:3000/auth/facebook/callback",
      profileFields: ["id", "displayName", "first_name", "last_name", "email"],
      enableProof: true,
    },
    function (accessToken, refreshToken, profile, done) {
      console.log(profile._json.id, profile.id, profile._json.first_name, "/////////////////");
      User.findOne({ where: { facebookId: profile._json.id } }).then((user) => {
        console.log(user, "#####################################################################################################");
        if (user) {
          console.log("usuario encontrado");

          done(null, user);
        } else {
          const salt = bcrypt.genSaltSync(10);
          const hash = bcrypt.hashSync(toString(Math.floor(Math.random() * 576)), salt);
          let newUser = new User({
            firstName: profile._json.first_name,
            lastName: profile._json.last_name,
            password: hash,
            email: profile._json.email,
            facebookId: profile._json.id,
          });
          newUser.save().then((user) => {
            console.log(user);
            if (user) {
              console.log("usuario creado");
              done(null, newUser);
            }
          });
        }
      });
    }
  )
);

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

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

const roleCheck = (numero) => {
  return (req, res, next) => {
    console.log(req.user, "ESTE ESE EL USER aaaaaaaaaaaaa!!!!!!!!")
    if (req.user.role === numero) {
      console.log(req.user.role, "ESTE ESE EL ROLE aaaaaaaaaaaaa!!!!!!!!")
      next();
    } else {
        console.log("NO SOS ADMIN ///////////////////////////////////////")
      res.redirect("/ingresar");
    }
  };
};

app.get("/", postController.getAllArticles); //ok
app.get("/articulo", roleCheck("2"), postController.getArticleById); //ok
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
