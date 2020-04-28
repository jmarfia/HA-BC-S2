const http = require("http");
const fs = require("fs");
const moment = require('moment');

console.log(__dirname);
moment.locale("es")

const server = http.createServer(function (req, res) {
    let year = moment().format("YYYY");
    let month = moment().format("MMMM");
    let day = moment().format("DD");
    let hour = moment().format("HH:mm:ss");
    let dayText = moment().format("dddd");
    let dateMsg = "Se llamó al servidor el " + day + " de "+ month + " de " + year + " a las " + hour + " (" +  dayText  + ") \n";
    fs.appendFile("message.txt", dateMsg, (err) => {
        if (err) throw err;
            console.log(dateMsg, 'agregado al archivo');
          });
    res.end("Guarde en el archivo: " + dateMsg);
});

server.listen(8000);

// solucion de Camilo
// const http = require("http");
// const fs = require("fs");
// const moment = require("moment");

// const server = http.createServer((request, response) => {
//   moment.locale("es");
//   const message =
//     moment().format("[Se llamó al servidor el ] LL [a las] LTS (dddd)") + ".\n";

//   fs.appendFile("access_log.txt", message, (error) => {
//     if (error) throw error;
//   });

//   response.end();
// });

// server.listen(8000);
