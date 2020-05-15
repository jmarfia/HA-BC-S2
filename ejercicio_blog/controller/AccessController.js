const db = require("../db");
const { Author } = require("../modelos");


class AccessController {

    constructor() {}


    static showLogin(req, res) {

        res.render('access/_login', {});
    }


    static showRegister(req, res) {

        res.render('access/_register', {});
    }


    static login(req, res) {

        res.redirect('/admin/ingreso');
    }


    static register(req, res) {
        
        res.redirect('/admin/registro');
    }
}


module.exports = AccessController;