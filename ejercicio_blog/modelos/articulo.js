const queryAllArticles = `SELECT * 
FROM blogdb.articulos
JOIN blogdb.autores
ON blogdb.articulos.id_autores = blogdb.autores.id_autores`

const queryFirstArticle = `SELECT *
FROM blogdb.articulos
JOIN blogdb.autores
ON blogdb.articulos.id_autores = blogdb.autores.id_autores 
LIMIT 1`

const queryHeaderArticles = `SELECT *
FROM blogdb.articulos
JOIN blogdb.autores
ON blogdb.articulos.id_autores = blogdb.autores.id_autores 
WHERE blogdb.articulos.idarticulos > 1 
AND blogdb.articulos.idarticulos < 6`

const queryLatestArticles = `SELECT *
FROM blogdb.articulos
JOIN blogdb.autores
ON blogdb.articulos.id_autores = blogdb.autores.id_autores 
WHERE blogdb.articulos.idarticulos > 5`

const queryGetArticle = `SELECT *
FROM blogdb.articulos
JOIN blogdb.autores
ON blogdb.articulos.id_autores = blogdb.autores.id_autores 
LEFT JOIN blogdb.comentarios
ON blogdb.comentarios.idarticulo = blogdb.articulos.idarticulos
WHERE blogdb.articulos.idarticulos = `

const queryGetArticleComments = `SELECT *
FROM blogdb.comentarios
where blogdb.comentarios.idarticulo = `

const queryDeleteArticle = `DELETE 
FROM blogdb.articulos as art
where art.idarticulos = `

const updateArticle1 = `UPDATE blogdb.articulos
SET blogdb.articulos.contenido = `
const updateArticle2 = ` 
WHERE blogdb.articulos.idarticulos = `



module.exports = {
    queryAllArticles: queryAllArticles,
    queryFirstArticle: queryFirstArticle,
    queryHeaderArticles: queryHeaderArticles,
    queryLatestArticles: queryLatestArticles,
    queryGetArticle: queryGetArticle,
    queryDeleteArticle: queryDeleteArticle,
    queryGetArticleComments: queryGetArticleComments,
    updateArticle1: updateArticle1,
    updateArticle2: updateArticle2
}