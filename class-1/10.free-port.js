// net es un modulo que hace conexiones con tcp
const net = require('node:net')

function findAvailablePort(desiredPort) {
  return new Promise((resolve, reject) => {
    const server = net.createServer()

    server.listen(desiredPort, () => {
      const port = server.address().port
      server.close(() => {
        resolve(port)
      })
    })
  })
}

module.exports = { findAvailablePort }
