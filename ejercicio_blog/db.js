const mysql = require("mysql");
const articulo = require("./modelos/articulo")


function getData(callback, query) {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "autores",
  });

  connection.connect(function (err) {
    if (err) throw err;
    console.log("¡Nos conectamos a la BD!");
  });

  connection.query(query, function (err, users) {
    if (err) throw err;
    callback(users);
  });
  connection.end();
}



module.exports ={
  getData: getData,
  queryAllArticles: articulo.queryAllArticles,
  queryFirstArticle: articulo.queryFirstArticle,
  queryHeaderArticles: articulo.queryHeaderArticles,
  queryLatestArticles: articulo.queryLatestArticles,
  queryGetArticle: articulo.queryGetArticle,
  queryDeleteArticle: articulo.queryDeleteArticle,
  queryGetArticleComments: articulo.queryGetArticleComments,
  updateArticle1: articulo.updateArticle1,
  updateArticle2: articulo.updateArticle2
}