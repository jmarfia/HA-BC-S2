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

  static login(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
        if (err) { return next(err); }
        if (!user) { return res.redirect('/ingresar'); }
        req.logIn(user, function(err) {
          if (err) { return next(err); }
          return res.redirect('/adminpanel');
        });
      })(req, res, next);
  }

  static register(req, res) {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt);
    Author.create({
      firstName : req.body.firstName,
      lastname : req.body.lastname,
      email : req.body.email,
      password : hash,
    }).then((author) => {
      console.log(author);  
    });
    if (true) {
      res.redirect("/adminpanel");
    } else {
      res.redirect("/registro");
    }
  }

  static logout(req, res) {
    res.redirect("/");
  }
}

module.exports = AccessController;
