const http = require("http");
const persona = require("persona.js");

const server = http.createServer(function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    console.log(req.url) //a ver que da, agregar que si la pag no exite, te diga eso
    res.write(JSON.stringify(persona));
    res.end();

});

server.listen(8000);