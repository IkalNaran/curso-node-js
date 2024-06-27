// fs -> file system
const fs = require('node:fs') // a partir del 16 recomedable ocupar node: antes de modulo.
const { start } = require('node:repl')
const stats = fs.statSync('./file.txt') // stat devuelve diferente informacion.
console.log(
    stats.isFile(), // devuelve si es un fichero
    stats.isDirectory(), // si es un directorio
    stats.isSymbolicLink(), // si es un enlace simbolico
    stats.size // tamaño en bytes

)
