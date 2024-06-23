function sum(a, b) {
    return a + b;
}

//CommonJS Module Export
module.exports = sum; //1.  de esta forma haces que no sea obligatorio ocupar el nombre
module.exports = { //2.  de esta forma haces que sea obligatorio ocupar el nombre
    sum
}

