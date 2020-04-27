const fs = require("fs");
const path = require("path");


console.log(process.argv[2]);
paramDir = process.argv[2];
paramExt = process.argv[3];

//Concatenar argumento con parte de la ruta

fs.readdir(paramDir,function(err, files){
    if(err){
        console.log(err);
    }
    files.forEach(file => console.log(file))
})