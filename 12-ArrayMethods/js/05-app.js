const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]
//con un foreach
let resultado='';
carrito.forEach((prducto,index)=>{
    if(producto.nombre==='Tablet'){
        resultado=carrito[index]
    }
});
console.log(resultado);

//con find
//Retorna el primero que cumpla la condición
const resultado2=carrito.find(producto=>producto.nombre==='Tablet')
console.log(resultado2);