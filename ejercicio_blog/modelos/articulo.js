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
WHERE autores.articulos.idarticulos = `

module.exports = {
    queryAllArticles: queryAllArticles,
    queryFirstArticle: queryFirstArticle,
    queryHeaderArticles: queryHeaderArticles,
    queryLatestArticles: queryLatestArticles,
    queryGetArticle: queryGetArticle
}