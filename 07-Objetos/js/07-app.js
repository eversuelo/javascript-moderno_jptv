'use strict';
const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
}

//Object Methods, Hacer un metodo constante
Object.freeze(producto);
console.log(Object.isFrozen(producto));

//producto.disponible=false;//Va marcar error
//Diferenecias entre Seal y Freeze es que Freeze no e deja hacer nada, y seal solo te deja modificar los objetos.