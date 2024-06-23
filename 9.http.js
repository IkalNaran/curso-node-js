// este es modulo mas importante

const http = require('node:http')
const server = http.createServer((req, res) => {
  console.log('request received ')
  res.end('Hola Mundo')
})

// si eligues el puerto 0 lo que hace es que busca un puerto disponible
// es recomendable para desarrollo pero no produccion

server.listen(0, () => {
  console.log(`server listening on port localhost: http://localhost:${server.address().port}`)
})
