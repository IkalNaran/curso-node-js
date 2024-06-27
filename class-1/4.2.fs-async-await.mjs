//Esto seria con Promise en NodeJS 
//los await no se pueden ocupar con los commons js 
//se tienen que cambiar a module js con la .mjs 
//o otra de las formas que funcione esta en 
//4.fs-async-await.js que ocupa por invocación.
import { readFile } from "node:fs/promises" //de esta forma haces que sea por promise 

console.log("Leyendo el primer archivo...")
//const text = fs.readFileSync("./file.txt", "utf-8")


const text = await readFile("./file.txt", "utf-8")
console.log('Primer texto: ', text)
console.log("--> Se estan haciendo cosas...")

console.log("Leyendo el segundo archivo...")
//const secondtext = fs.readFileSync("./file2.txt", "utf-8")
const textSecond = await readFile("./file2.txt", "utf-8")
console.log("El segundo texto", text)
//console.log(secondtext)