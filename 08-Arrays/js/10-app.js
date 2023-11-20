const carrito=[
    {nombre:"MOnitor 27 Pulgadas",precio:500},
    {nombre:"Tablet",precio:220},
    {nombre:"COmputadora",precio:500},
    {nombre:"Audifonos",precio:200},
    {nombre:"TEclado",precio:50},
    {nombre:"Celular",precio:700}
];

//La diferencia entre forEach y map es que map va llenar la variable en un arreglo nuevo

const nuevoArreglo=carrito.map(function(producto){
    return `${producto.nombre}- Precio:${producto.precio} `;
});
//UN forEach es una función que itera sobre el arreglo
const nuevoArr=carrito.forEach(function(producto){
    return `${producto.nombre}- Precio:${producto.precio} `;
});
console.log(nuevoArr);//Del For Each
console.log(nuevoArreglo); //Del Map