const meses=['ENero','Febrero','Marzo','Abril','Mayo','JUnio'];
meses.push("JUlio");
console.table(meses);

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
carrito.unshift(producto3);
console.table(carrito);