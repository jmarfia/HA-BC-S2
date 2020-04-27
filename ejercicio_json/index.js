const http = require("http");
const persona = require("persona.js");

const server = http.createServer(function(req, res) {

    res.end(JSON.stringify(persona));

});

server.listen(8000);