//Un set no repite elementos
const carrito = new Set();
carrito.add('camisa');
carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.forEach((producto, indez, pertenece) => {
    console.log("For "+producto);
    console.log("For "+pertenece);
    console.log("For "+indez);
})
console.log(carrito.has('guitarra'));
console.log(carrito);
console.log(carrito.size)
console.log(carrito.delete('camisa'));
carrito.clear();
console.log(carrito);


//Del siguiente arreglo, eliminar los duplicados
const numeros=[10,20,30,40,50,10,20];
console.log(numeros);
const noDuplicados=new Set(numeros);
console.log(noDuplicados);