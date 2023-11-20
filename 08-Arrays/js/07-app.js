const carrito=[];

const producto={
    nombre:"MOnitor 32 Pulgadas",
    precio:400
}
const producto2={
    nombre:"MOnitor 52 Pulgadas",
    precio:500
}
carrito.push(producto);
carrito.push(producto2);
console.table(carrito);
const producto3={
    nombre:"TEclado",
   precio:50
}
const producto4={
    nombre:"Tablet 11'",
   precio:250
}
carrito.unshift(producto3);
console.table(carrito);

carrito.pop();
console.table(carrito);

//ELiminar del inicio del arreglo

carrito.shift();
console.table(carrito);

carrito.push(producto2);
carrito.push(producto3);
carrito.unshift(producto4);

console.table(carrito);
//Eliminando de en medio
carrito.splice(0,1);
console.table(carrito);