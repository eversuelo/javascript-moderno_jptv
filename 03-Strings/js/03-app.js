/*Concatenar un String y Template Strings*/
const producto = "Monitor 21 Pulgadas";
const precio = '30 USD'
    /*Concatenación*/
console.log(producto.concat(precio));
console.log(producto.concat(" En Descuento"));
console.log(producto + precio);
/* Devuelve el valor cocatenado, más no modifica la variable*/


/*Concatenacion de EcmaScript*/
console.log(`Backtick nos da la posibilida de concatenar el ${producto} con su ${precio}`);