const db = require("../db");
const { User, Article } = require("../modelos");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const jwt = require("jsonwebtoken");


module.exports = {
  //trae todos los articulos, debe llamarse cuando queres ir a / ----//index
  async getAllArticles(req, res) {
    const articles = await Article.findAll({
      include: [User],
    });
    res.json(articles);
  },


  //getUserToken

  async getUserToken(req, res) {
    const credenciales = req.user.id + req.user.email;
    const token = jwt.sign({ sub: credenciales }, process.env.JWT_SECRET);
    // res.json(articles);
    res.render("showToken",{generatedToken: token, user: req.user.firstName, email: req.user.email });
  },

  async getArticleByAuthor(req, res) {
    const author = req.params.author;
    const articles = await Article.findAll({
      include: [
        {
          model: User,
          where: { firstName: author },
        },
      ],
    });
    res.json(articles);
  },

  async getArticleByTitle(req, res) {
    const title = req.query.title;
    const articles = await Article.findAll({
      include: [
        {
          model: User,
        },
      ],
      where: { titulo: { [Op.like]: "%" + title + "%" } },
    });
    res.json(articles);
  },

  async deleteArticleById(req, res) {
    const articuloID = req.query.articuloID;
   await Article.destroy({
      where: {
        id: articuloID,
      },
    }).then(() => {
        res.end("done");
      });
  },

  async updateArticleById(req, res) {
    const articuloID = req.body.articuloID;
    const titulo = req.body.titulo;
    const articulomodificado = req.body.articulomodificado;
    const avatar = req.body.avatar;
    const modificaciones = {};
    
    if(titulo != undefined){
        modificaciones.titulo = titulo
    }
    if(articulomodificado !=undefined){
        modificaciones.contenido = articulomodificado
    }
    if(avatar != undefined){
        modificaciones.avatar = avatar
    }
    await Article.findByPk(articuloID).then((articleDB) => {
      articleDB.update(modificaciones);
    });
    const article = await Article.findByPk(articuloID, {
      include: [User],
      where: [{ id: articuloID }]
    });

    res.json(article);
  },

  async newArticle(req, res) {
    const userId = req.body.userId;
    const titulo = req.body.titulo;
    const contenido = req.body.contenido;
    const avatar = req.body.avatar;

    const article = {};
    if (userId != undefined) {
        article.userId = userId
    }
    if (titulo != undefined) {
        article.titulo = titulo
    }
    if (contenido != undefined) {
        article.contenido = contenido
    }
    if (avatar != undefined) {
        article.avatar = avatar
    }
    await Article.create(article);

    res.end("done");
},


};



//revisa si esta logueado en fb
// FB.getLoginStatus(function(response) {
//   statusChangeCallback(response);
// });

// devuelve esto:

// {
//   status: 'connected',
//   authResponse: {
//       accessToken: '...',
//       expiresIn:'...',
//       signedRequest:'...',
//       userID:'...'
//   }
// }
