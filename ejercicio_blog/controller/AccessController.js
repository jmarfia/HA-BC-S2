const db = require("../db");
const { Author } = require("../modelos");
const passport = require("passport");

class AccessController {
  constructor() {}

  static showLogin(req, res) {
    const pageData = {
      title: "Ingresar",
      partialView: {
        path: __dirname + '/../views/access/_login.ejs',
        data: {},
      },
    };

    res.render("access/index", { pageData });
  }

  static showRegister(req, res) {
    const pageData = {
      title: "Registro",
      partialView: {
        path: __dirname + '/../views/access/_register.ejs',
        data: {},
      },
    };

    res.render("access/index", { pageData });
  }

  static login(req, res) {
    passport.authenticate("local", {
      successRedirect: "/admin",
      failureRedirect: "/admin/ingresar",
    });
  }

  static register(req, res) {
    if (true) {
      res.redirect("/admin");
    } else {
      res.redirect("/admin/ingreso");
    }
  }

  static logout(req, res) {
    res.redirect("/");
  }
}

module.exports = AccessController;
