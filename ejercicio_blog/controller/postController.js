const db = require("../db");
const { Author, Article } = require("../modelos");

module.exports = {

  //trae todos los articulos, debe llamarse cuando queres ir a / ----//index
  async getAllArticles(req, res) {
    const articles = await Article.findAll({
      include: [Author],
    });
    res.render("home", { articulos: articles });
  },

  //trae un articulo, debes llamarla para ir a la vista de un articulo solo /articulo ----//show
  async getArticleById(req, res) {
    const articuloID = req.query.articuloID;
    const articles = await Article.findByPk(articuloID, {
      include: [Author],
    });
    res.render("articulo", { articulo: articles });
  },

  //trae un articulo en la vista de edicion de articulo /modificararticulo ----//edit
  async editArticleById(req, res) {
    const articuloID = req.query.articuloID;
    const articles = await Article.findByPk(articuloID, {
      include: [Author],
    });
    res.render("modificararticulo", { articulo: articles });
  },

  //te lleva a /adminpanel y muestra todos los articulo
  async adminPanel(req, res) {
    let prueba = req.user.id;
    console.log(prueba, "/////////////////////////////////")
    const articles = await Article.findAll({
      include: [Author],
      where: [{ authorId: prueba }]
    });
    res.render("adminpanel", { articulos: articles });
  },

  //tiene que ser un post, manda lo editado en la vista modificar articulo a la base, y redirige a /adminpanel donde se visualizara todo actualizado ----//update ----//setarticulo
  async updateArticleById(req, res) {
    //post req.body
    const articuloID = req.query.articuloID;
    const articulomodificado = req.query.articulomodificado;
    //console.log(articuloID, articulomodificado);

    await Article.findByPk(articuloID).then((articleDB) => {
      articleDB.update({
        contenido: articulomodificado,
      });
    });
    const articles = await Article.findByPk(articuloID, {
      include: [Author],
    });

    res.render("articulo", { articulo: articles });
  },

  //ejecuta la consulta que borra un articulo y te redirige a /adminpanel ----//destroy
 async deleteArticleById(req, res) {
    const articuloID = req.query.articuloID;
   await Article.destroy({
      where: {
        id: articuloID,
      },
    }).then(() => {
      res.redirect("/adminpanel");
    });
  },

  contacto(req, res) {
    res.render("contacto");
  },

  sqlz(req, res) {
    res.send(authorModel.encontrarAutor(1));
  },
};
