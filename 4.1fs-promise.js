//Esto seria con Promise en NodeJS 
const fs = require("node:fs/promises") //de esta forma haces que sea por promise 

console.log("Leyendo el primer archivo...")
//const text = fs.readFileSync("./file.txt", "utf-8")


fs.readFile("./file.txt", "utf-8")
    .then(text => //then se ocupa cuando es de forma exitosa el resutaldo de la promesa 
        console.log("El primer texto ", text)
    )

console.log("--> Se estan haciendo cosas...")
console.log("Leyendo el segundo archivo...")

//const secondtext = fs.readFileSync("./file2.txt", "utf-8")
fs.readFile("./file2.txt", "utf-8")
    .then(text => {
        console.log("El segundo texto", text)
    })
//console.log(secondtext)