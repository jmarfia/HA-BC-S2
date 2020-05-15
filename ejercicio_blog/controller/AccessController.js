const db = require("../db");
const { Author } = require("../modelos");


class AccessController {

    constructor() {}


    static showLogin(req, res) {

        const pageData = {
            title: 'Ingresar',
            partialView: {
                path: 'access/_login',
                data: {}
            }
        }

        res.render('access/index', { pageData });
    }


    static showRegister(req, res) {

        const pageData = {
            title: 'Registro',
            partialView: {
                path: 'access/_register',
                data: {}
            }
        }

        res.render('access/index', { pageData });
    }


    static login(req, res) {

        res.redirect('/admin/ingreso');
    }


    static register(req, res) {

        res.redirect('/admin/registro');
    }
}


module.exports = AccessController;