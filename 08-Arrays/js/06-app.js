const carrito=[];

const producto={
    nombre:"MOnitor 32 Pulgadas",
    precio:400
}
const producto2={
    nombre:"MOnitor 52 Pulgadas",
    precio:500
}

const producto3={
    nombre:"TEclado",
   precio:50
}

let resultado;
resultado=[...carrito,producto];
resultado=[...resultado,producto2];
resultado=[producto3,...resultado];
console.table(resultado);