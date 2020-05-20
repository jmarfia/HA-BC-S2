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

        if(true)
        {
            res.redirect('/admin');
        }
        else
        {
            res.redirect('/admin/ingreso');
        }
        
    }


    static register(req, res) {

        if(true)
        {
            res.redirect('/admin');
        }
        else
        {
            res.redirect('/admin/ingreso');
        }
    }


    static logout(req, res) {

        res.redirect('/');
    }
}


module.exports = AccessController;