const array = [1, 2, 3, 4, 5]
for (let index = 0; index < array.length; index++) {
    console.log(array[index]);

}
for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log("El numero es " + i + " par");
    } else {
        console.log("El numero es " + i + " impar");
    }
}
//  Y en que casos puedes utilizar el continue??




const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'Televisión 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet ', precio: 300, descuento: true },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50, descuento: true },
    { nombre: 'Celular', precio: 500 },
]

for (let i = 0; i <= 10; i++) {
    if (carrito[i].descuento) {
        console.log(`El articulo ${carrito[i].nombre} Tiene descuento... `);
        continue;
    }
    console.log(carrito[i].nombre);
}

// El Reto de Fizz BUZZ

// Fizz Buzz es un reto que complica mucho a los programadores, básicamente si un número es múltiplo de 3 imprimes FIZ, si es múltiplo de 5 imprimes BUZZ y si es múltiplo de ambos como 15, 30, 45 debes imprimir FIZZ BUZZ, intenta realizarlo y si no veamos como realizarlo en el próximo video...