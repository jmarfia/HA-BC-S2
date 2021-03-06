const http = require("http");
const express = require("express");
const app = express();
var path = require('path');

//ver lo de poner ? y argumentos en la url

app.get('/contacto', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/contacto.html'));
});
app.get('/productos', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/productos.html'));
});
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/index.html'));
});
app.get('/sobre-nosotros', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/sobre-nosotros.html'));
});

 app.get('*', function(req, res) {
    res.status(404).end();
  });


app.listen(3000, () => console.log('¡Servidor corriendo en el puerto 3000!'));