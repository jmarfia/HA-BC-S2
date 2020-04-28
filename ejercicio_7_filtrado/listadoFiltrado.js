const fs = require("fs");
const path = require("path");


//console.log(process.argv[2]);
paramDir = process.argv[2];
paramExt = process.argv[3];

//Concatenar argumento con parte de la ruta
//console.log(__dirname, "laskdjf")

fs.readdir(paramDir,function(err, files){
    if(err){
        console.log(err);
    }
    console.log("Archivos encontrados:");
    files.forEach(file => {
        if (file.includes(paramExt)) {
            console.log("\t", file);
        }
        
    })
})