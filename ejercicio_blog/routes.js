const express = require("express"); //
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
const db = require("./db");
const postController = require("./controller/postController");
const apiController = require("./controller/apiController");
const AccessCtrl = require("./controller/AccessController");
const { User } = require("./modelos");
const session = require("express-session");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const cors = require("cors");
var flash = require('req-flash');


//Passport
router.use(
  session({
    secret: "AlgúnTextoSuperSecreto",
    resave: false,
    saveUninitialized: false,
  })
);
router.use(flash());
router.use(function (req, res, next) {
    res.locals.currentUser = req.user;
    res.locals.infos = req.flash("info");
    res.locals.errors = req.flash("error");
    next();
});

var passport = require("passport"),
  FacebookStrategy = require("passport-facebook").Strategy;
const LocalStrategy = require("passport-local").Strategy;
router.use(passport.initialize());
router.use(passport.session());
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
      console.log(
        profile._json.id,
        profile.id,
        profile._json.first_name,
        "/////////////////"
      );
      User.findOne({ where: { facebookId: profile._json.id } }).then((user) => {
        console.log(
          user,
          "#####################################################################################################"
        );
        if (user) {
          console.log("usuario encontrado");

          done(null, user);
        } else {
          const salt = bcrypt.genSaltSync(10);
          const hash = bcrypt.hashSync(
            toString(Math.floor(Math.random() * 576)),
            salt
          );
          let newUser = new User({
            firstName: profile._json.first_name,
            lastName: profile._json.last_name,
            password: hash,
            email: profile._json.email,
            facebookId: profile._json.id,
            role: "1"
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

const access = () => {
  return (req, res, next) => {
    if (req.isAuthenticated()) {
      next();
    } else {
      res.render("/access/_login", {mensaje: "chupito el pame" });
    }
  };
};

const roleCheck = (numero) => {
  return (req, res, next) => {
    console.log(req.user, "POR FAVOR ENTRA ACAA!! ESTE ESE EL USER aaaaaaaaaaaaa!!!!!!!!");
    if (req.user != undefined){
        if (req.user.role === numero) {
        console.log(req.user.role, "ESTE ESE EL ROLE aaaaaaaaaaaaa!!!!!!!!");
        next();
        } else {
        console.log("NO SOS ADMIN ///////////////////////////////////////");
        //decirle que no tiene el rol adecuado
        }
    }else{
            res.redirect("/ingresar");
        }
  };
};

/** set app */

router.use(cors());
router.use(
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

router.get("/auth/facebook", passport.authenticate("facebook", { scope: "public_profile, email" }));

router.get("/auth/facebook/callback", passport.authenticate("facebook", { successRedirect: "/adminpanel", failureRedirect: "/ingresar" }));

router.use("/auth/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

router.get("/", postController.getAllArticles); //ok
router.get("/articulo", roleCheck("1"), postController.getArticleById); //ok
router.get("/modificararticulo", roleCheck("1"), postController.editArticleById); //ok
router.get("/setarticulo", roleCheck("1"), postController.updateArticleById); //ok
router.get("/borrararticulo", roleCheck("1"), postController.deleteArticleById); // ok
router.get("/adminpanel", roleCheck("1"), postController.adminPanel); //ok
router.get("/contacto", postController.contacto); //ok

//rutas api
router.get("/api/articulos", apiController.getAllArticles); //ok con query string
router.get("/api/articulosporautor/:author", apiController.getArticleByAuthor); //ok con params
router.get("/api/articulosportitulo", apiController.getArticleByTitle); //ok con query string
router.get("/api/borrararticulo", apiController.deleteArticleById); // ok 
router.post("/api/updateArticleById", apiController.updateArticleById); // ok updateArticleById
router.post("/api/newArticle", apiController.newArticle); // ok 


//Login/Register EndPoints
router.get("/registro", (req, res) => AccessCtrl.showRegister(req, res));
router.post("/registro", (req, res) => AccessCtrl.register(req, res));
router.get("/ingresar", (req, res) => AccessCtrl.showLogin(req, res));
router.post(
  "/ingresar",
  passport.authenticate("local", {
    successRedirect: "/adminpanel",
    failureRedirect: "/ingresar",
  })
);
router.get("/cerrar-sesion", (req, res) => AccessCtrl.logout(req, res));
// app.get('/auth/facebook', passport.authenticate('facebook'));
// app.get('/',
//   passport.authenticate('facebook', { successRedirect: '/',
//                                       failureRedirect: '/ingresar' }));


module.exports = router;