const db = require("../db");
const {Author, Article} = require("../modelos")

module.exports = {
  //trae todos los articulos, debe llamarse cuando queres ir a /
  //index
  async getAllArticles(req, res) {
    const articles = await Article.findAll({
      include: [Author],
    });
    res.render("home", {articulos: articles});
  },

  //trae un articulo, debes llamarla para ir a la vista de un articulo solo /articulo
  //show
  getArticleById(req, res) {
    const articuloID = req.query.articuloID;
    DBLocal.getData(function (articlesDB) {
      console.log(articlesDB);
      res.render("articulo", { articulo: articlesDB });
    }, DBLocal.queryGetArticle + articuloID);
  },

  //trae un articulo en la vista de edicion de articulo /modificararticulo
  //edit
  editArticleById(req, res) {
    const articuloID = req.query.articuloID;
    DBLocal.getData(function (articlesDB) {
      //console.log(articlesDB);
      res.render("modificararticulo", { articulo: articlesDB });
    }, DBLocal.queryGetArticle + articuloID);
  },

  //te lleva a /adminpanel y muestra todos los articulos
  adminPanel(req, res) {
    DBLocal.getData(function (articlesDB) {
      //console.log(articlesDB);
      res.render("adminpanel", { articulos: articlesDB });
    }, DBLocal.queryAllArticles);
    //res.end(); no se por que no me anda si pongo el res.end
  },

  //tiene que ser un post, manda lo editado en la vista modificar articulo a la base, y redirige a /adminpanel donde se visualizara todo actualizado
  //update
  //setarticulo
  updateArticleById(req, res) {
    //post req.body
    const articuloID = req.query.articuloID;
    const articulomodificado = req.query.articulomodificado;
    console.log(articuloID, articulomodificado);
    DBLocal.getData(function (articlesDB) {
      //console.log(articlesDB);
      res.redirect("/adminpanel");
    }, DBLocal.updateArticle1 +
      "'" +
      articulomodificado +
      "'" +
      DBLocal.updateArticle2 +
      articuloID);
  },

  //ejecuta la consulta que borra un articulo y te redirige a /adminpanel
  //destroy
  deleteArticleById(req, res) {
    const articuloID = req.query.articuloID;
    DBLocal.getData(function (articlesDB) {
      //console.log(articlesDB);
      //res.render("adminpanel", { articulos: articlesDB });
      res.redirect("/adminpanel");
    }, DBLocal.queryDeleteArticle + articuloID);
    //res.end(); no se por que no me anda si pongo el res.end
  },
  contacto(req, res) {
    res.render("contacto");
  },

  sqlz(req, res) {
    res.send(authorModel.encontrarAutor(1));
  },
};
