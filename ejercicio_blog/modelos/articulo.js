//ESTO ES VIEJO, NO LO USAMOS MAS
//ESTO ES VIEJO, NO LO USAMOS MAS
//ESTO ES VIEJO, NO LO USAMOS MAS
//ESTO ES VIEJO, NO LO USAMOS MAS
//ESTO ES VIEJO, NO LO USAMOS MAS

const queryAllArticles = `SELECT * 
FROM autores.articulos
JOIN autores.autores
ON autores.articulos.id_autores = autores.autores.id_autores`

const queryFirstArticle = `SELECT *
FROM autores.articulos
JOIN autores.autores
ON autores.articulos.id_autores = autores.autores.id_autores 
LIMIT 1`

const queryHeaderArticles = `SELECT *
FROM autores.articulos
JOIN autores.autores
ON autores.articulos.id_autores = autores.autores.id_autores 
WHERE autores.articulos.idarticulos > 1 
AND autores.articulos.idarticulos < 6`

const queryLatestArticles = `SELECT *
FROM autores.articulos
JOIN autores.autores
ON autores.articulos.id_autores = autores.autores.id_autores 
WHERE autores.articulos.idarticulos > 5`

const queryGetArticle = `SELECT *
FROM autores.articulos
JOIN autores.autores
ON autores.articulos.id_autores = autores.autores.id_autores 
LEFT JOIN autores.comentarios
ON autores.comentarios.idarticulo = autores.articulos.idarticulos
WHERE autores.articulos.idarticulos = `

const queryGetArticleComments = `SELECT *
FROM autores.comentarios
where autores.comentarios.idarticulo = `

const queryDeleteArticle = `DELETE 
FROM autores.articulos as art
where art.idarticulos = `

const updateArticle1 = `UPDATE autores.articulos
SET autores.articulos.contenido = `
const updateArticle2 = ` 
WHERE autores.articulos.idarticulos = `



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