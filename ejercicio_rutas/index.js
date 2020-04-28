const http = require("http");
const express = require("express");
const app = express();

//ver lo de poner ? y argumentos en la url

app.get('/', (req, res) => res.send('Home'));
app.get('/producto', (req, res) => res.send('Producto'));
app.get('/contacto', (req, res) => res.send('Contacto'));

app.listen(8000, () => console.log('¡Servidor corriendo en el puerto 8000!'));