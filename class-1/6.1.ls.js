//Ejecicio 
//Crear un ls 

const fs = require("node:fs");

fs.readdir(process.cwd(), (err, files) => { //readdir lee el directorio.
    //en los callback siempre el primero parametro es el error 
    //esta hecho para que no se olvide el error
    if (err) {
        console.log("Error al leer", err)
        return;
    }

    files.forEach(file => {
        console.log(file)
    })
}
)