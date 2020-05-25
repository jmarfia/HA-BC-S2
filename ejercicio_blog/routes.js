const express = require("express"); //

const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
const db = require("./db");
const postController = require("./controller/postController");
const AccessCtrl = require("./controller/AccessController");
const { User } = require("./modelos");
const session = require("express-session");

//Passport
router.use(
  session({
    secret: "AlgúnTextoSuperSecreto",
    resave: false,
    saveUninitialized: false,
  })
);
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
      res.redirect("/ingresar");
    }
  };
};

const roleCheck = (numero) => {
  return (req, res, next) => {
    console.log(req.user, "ESTE ESE EL USER aaaaaaaaaaaaa!!!!!!!!");
    if (req.user.role === numero) {
      console.log(req.user.role, "ESTE ESE EL ROLE aaaaaaaaaaaaa!!!!!!!!");
      next();
    } else {
      console.log("NO SOS ADMIN ///////////////////////////////////////");
      res.redirect("/ingresar");
    }
  };
};

router.get("/", postController.getAllArticles); //ok
router.get("/articulo", roleCheck("2"), postController.getArticleById); //ok
router.get("/modificararticulo", access(), postController.editArticleById); //ok
router.get("/setarticulo", access(), postController.updateArticleById); //ok
router.get("/borrararticulo", access(), postController.deleteArticleById); // ok
router.get("/adminpanel", access(), postController.adminPanel); //ok
router.get("/contacto", postController.contacto); //ok
//app.get("/pruebasqlz", postController.sqlz);

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