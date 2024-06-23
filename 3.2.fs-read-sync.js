// Eso seria callback en NodeJS
const fs = require('node:fs')

console.log('Leyendo el primer archivo...')

const text = fs.readFileSync('./file.txt', 'utf-8')
console.log(text)

console.log('--> Se estan haciendo cosas...')
console.log('Leyendo el segundo archivo...')

const textSecond = fs.readFileSync('./file2.txt', 'utf-8')
console.log(textSecond)
// console.log(secondtext)
