//Esto seria con Promise en NodeJS 
//se tienen que cambiar a module js con la .mjs 
//o otra de las formas que funcione esta en 
//4.fs-async-await.js que ocupa por invocación.
import { readFile } from "node:fs/promises" //de esta forma haces que sea por promise 

Promise.all([
    readFile('./file.txt', 'utf-8'),
    readFile('./file2.txt', 'utf-8')
]).then(([text, textSecond]) => {
    console.log('Primer texto: ', text)
    console.log('Segundo texto: ', textSecond)
})