const fs = require("fs");
const path = require("path");

paramDir = process.argv[2];
paramExt = process.argv[3];

//includes no sirve, por que si un archivo se llama juantxt.exe lo muestra.

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