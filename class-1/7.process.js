// process 

//argumentos de entrada
//console.log(process.argv);

//controlar el proceso y su salida 
//process.exit(1) //0 = todo bien 1=que algo salio mal 

// se puede controlar eventos del proceso 
// process.on('', () => {

// })

// current workin directory
console.log(process.cwd()); //te dice desde que carpeta esta ejecutando el proceso. 
// si el archivo esta en un sitio y lo ejecuto desde otra carpeta u 
//otro sitio el directorio que me va a dar es donde me encuentro y  no
//donde esta el archivo. 

//Una de las que mas se ocupa es las variables de entorno: 
//platform
console.log(process.env.PUTA)