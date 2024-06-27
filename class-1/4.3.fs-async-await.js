//Se ve porque se podria ver en algun sistema viejo que ocupe cjs 
//lo cual se hace de la siguiente forma. 

const { readFile } = require('node:fs/promises') //de esta forma haces que sea por promise 
    //recuerda que {} porque te  obliga a ocupar el nombre, si no, te da error 
    ; (  // ; se ocupa porque 
        async () => {
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
        }


    )() //Esto es lo que se llama una función auto invocada 
//esta funcion es anonima  por lo que no necesita un nombre
//con async wait no bloque el paso si no es que esta haciendo secuencial 
