const db = require("../db");
const { Author } = require("../modelos");
const passport = require("passport");
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
    Author.create({
      firstName: req.body.firstname,
      lastName: req.body.lastname,
      email: req.body.email,
      password: hash,
    }).then((author) => {
      console.log(author);
      res.redirect("/");
    });
  }

  static logout(req, res) {
    req.session.destroy(err => console.log("Sesión cerrada."));
    res.redirect("/");
  }
}

module.exports = AccessController;
