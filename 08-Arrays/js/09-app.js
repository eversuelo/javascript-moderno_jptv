const carrito=[
    {nombre:"MOnitor 27 Pulgadas",precio:500},
    {nombre:"Tablet",precio:220},
    {nombre:"COmputadora",precio:500},
    {nombre:"Audifonos",precio:200},
    {nombre:"TEclado",precio:50},
    {nombre:"Celular",precio:700}
];

for(let i=0; i<carrito.length;i++){
    console.log(`${carrito[i].nombre}- Precio:${carrito[i].precio} `);
}
//UN forEach es una función que itera sobre el arreglo
carrito.forEach(function(producto){
    console.log(`${producto.nombre}- Precio:${producto.precio} `);
});