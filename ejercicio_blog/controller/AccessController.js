const db = require("../db");
const { User } = require("../modelos");
const passport = require("passport"),
  FacebookStrategy = require("passport-facebook").Strategy;
const bcrypt = require("bcryptjs");



class AccessController {
  constructor() {}

  static showLogin(req, res) {
    const pageData = {
      title: "Ingresar",
      partialView: {
        path: __dirname + "/../views/access/_login.ejs",
        data: {},
      },
    };

    res.render("access/index", { pageData });
  }

  static showRegister(req, res) {
    const pageData = {
      title: "Registro",
      partialView: {
        path: __dirname + "/../views/access/_register.ejs",
        data: {},
      },
    };

    res.render("access/index", { pageData });
  }

  static register(req, res) {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const hash2 = toString(bcrypt.hashSync(toString(Math.floor(Math.random() * 576)), salt));
    User.create({
      firstName: req.body.firstname,
      lastName: req.body.lastname,
      email: req.body.email,
      password: hash,
      facebookId: hash2,
    }).then((user) => {
      console.log(user);
      res.redirect("/");
    });
  }

  static logout(req, res) {
    req.session.destroy((err) => console.log("Sesión cerrada."));
    res.redirect("/");
  }
}

module.exports = AccessController;
