//Eso seria callback en NodeJS 
const fs = require("node:fs")

//En dado caso que los modulos nativos no tengas promesas nativas
//const { promisify } = require("node:util")
//const readFilePromise = promisify(fs.readFile)

console.log("Leyendo el primer archivo...")

//const text = fs.readFileSync("./file.txt", "utf-8") //esta es la forma sync
//el await no se puede ocupar de la siguiente forma: await fs.readFile(...)
//el async await solo es valido en funciones asyncronas. 

fs.readFile("./file.txt", "utf-8", (err, text) => { //Forma async para leer el archivo 
    if (err) {
        console.error('El error ha sido', err);
        return;
    } else console.log('El contenido del archivo es:', text);
})

console.log("--> Se estan haciendo cosas...")
console.log("Leyendo el segundo archivo...")

//const secondtext = fs.readFileSync("./file2.txt", "utf-8")
fs.readFile("./file2.txt", "utf-8", (err, text) => {
    console.log(text)

})
//console.log(secondtext)