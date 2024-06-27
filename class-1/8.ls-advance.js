//Ejecicio 
//Crear un ls 
const fs = require("node:fs/promises");
const path = require('node:path');
const folder = process.argv[2] ?? '.'
const picocolors = require("picocolors") //aqui no see ocupa node: porque no es nativo 

async function ls(folder) {
    let files
    try {
        files = await fs.readdir(folder)
    } catch (error) {
        console.log(picocolors.red(`Error al leer el directorio ${folder}`))
        process.exit(1)
    }

    const filePromises = files.map(async file => {
        const filePath = path.join(folder, file)
        let stats
        try {
            stats = await fs.stat(filePath) //informacion del archivo 
        } catch {
            console.log(`No se puede leer el archivo ${filePath}`)
            process.exit(1)
        }

        const isDirectory = stats.isDirectory()
        const fileType = isDirectory ? 'd' : '-'
        const fileSize = stats.size
        const fileModified = stats.mtime.toLocaleDateString()
        return `${fileType} ${file.padEnd(40)} ${fileSize.toString().padStart(10)} ${fileModified}`
    })

    const filesInfo = await Promise.all(filePromises)
    filesInfo.forEach(fileInfo => { console.log(fileInfo) });
}
ls(folder)