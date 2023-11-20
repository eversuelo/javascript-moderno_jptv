/*Cortar Espacios en blanco de una String*/
const producto = "                Monitor de 20 pulgadas              ";
console.log(producto);
console.log(producto.length);
console.log(producto.trimStart()); //Cortamos el espacio en blanco al inicio
console.log(producto.trimEnd()); //Cortamos el Espacio en Blanco al Final
console.log(producto.trimStart().trimEnd());
console.log(producto.trim()); //Ambos