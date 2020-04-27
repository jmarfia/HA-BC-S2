const slugify = require("slugify");
const http = require("http");

console.log(slugify("¡Vamo arriba Uruguay y España! 🇺🇾🇪🇸",{
    lower: true,
    remove: /[*+~.()'"!🇺🇾🇪🇸:@]/g
}))

const server = http.createServer(function(req, res) {
    console.log("Alguien accedió al servidor");
    res.end("Respuesta");
   });
   server.listen(8080);