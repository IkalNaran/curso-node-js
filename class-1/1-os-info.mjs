// const os = require("os"); //ya no es recomendable ocupar el nombre del modulo nativo :"os" desde las version 16 de node.

import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os' // ahora lo recomendable es ocupar el prefijo de: "node:modulo nativo "

console.log('Información del sistema operativo:')
console.log('----------------------------------')
console.log('Nombre del sistema operativo', platform())
console.log('Version del sistema operativo', release())
console.log('Aquitectura', arch())
console.log('CPUs', cpus()) // PODREMOS ESCALAR PROCESOS EN NODE.JS
console.log('Memoria libre', freemem() / 1024 / 1024)
console.log('Memoria total', totalmem() / 1024 / 1024)
console.log('uptime', uptime() / 60 / 60)
