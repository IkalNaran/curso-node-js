//este es otro modulo nativo 
const path = require("node:path");
//En node no se recomienda crear rutas y solo se recomienda unir rutas con path.join 

//barra separadora de carpetas segun SO 
console.log('Esta es la separacion de tu equipo:', path.sep)

//unir rutas con path.join
const filePath = path.join("content", "subfolder", "test.txt")
console.log('Con path.join unes las ruta por medio del nombre solamente: ', filePath)


//conseguir el nombre del fichero 
const base = path.basename("/tmp/secret/password.txt");
console.log(base)

//tambien lo puedes pedir para que nada mas te de el nombre sin la extensión
const filename = path.basename("/tmp/secret/password.txt", ".txt");
console.log(filename)

const extension = path.extname("image.png")
console.log(extension)
