const express = require("express");
const router = express.Router();
const db = require("../db2")
const Articulos = require("../modelos/articulo");

router.get("/", (req, res) => 
    Articulos.findAll()
        .then(articulos => {
            console.log(articulos);
            res.sendStatus(200);
            
        })
        .catch(err => console.log(err)))

module.exports = router;




const Sequelize = require('sequelize');


const sequelize = new Sequelize('blogdb', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
})

//sqlz
sequelize.authenticate()
.then(() => console.log("database conected papuh"))
.catch(err => console.log("error: ", err))

const Model = Sequelize.Model;

const Articulos = sequelize.define("articulos",{
  titulo: {
      type: Sequelize.STRING
  },
  contenido: {
      type: Sequelize.STRING
  },
  id_autores: {
      type: Sequelize.INTEGER
  },
  avatar: {
      type: Sequelize.STRING
  },
  fecha_creacion: {
      type: Sequelize.DATE
  }
})

Articulos.sync({force: true}).then(() => {
  Articulos.create({
    titulo: "Titulo del cosoasdfasdf",
    contenido: "Contendio del asdf",
    id_autores: 4,
    avatar: "avatar asdfasdfsdf",
    fecha_creacion: 1980-02-02
  });
});

Articulos.findAll()
        .then(articulos => {
            console.log("hola", articulos);
        })
        .catch(err => console.log(err))

