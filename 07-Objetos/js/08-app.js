'use strict';
const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
}
Object.seal(producto);

producto.disponible = false;
console.log(producto);
console.log(Object.isSealed(producto));