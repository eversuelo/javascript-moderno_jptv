//Objeto Math
console.log(Math); //Existe en la ventana global de Java Script

let resultado;

//Redondear
resultado = Math.round(2.8);
console.log(resultado);
resultado = Math.round(2.3);
console.log(resultado);

resultado = Math.round(2.5);
console.log(resultado);
//Pi
resultado = Math.PI;
console.log(resultado);

//Redondear Hacía Arriba
resultado = Math.ceil(2.1);
console.log(resultado);
//Redondeo Hacía Abajo
resultado = Math.floor(2.8);
console.log(resultado);
//Raiz Cuadrada
resultado = Math.sqrt(144);
console.log(resultado);
//Absoluto
resultado = Math.abs(-500);
console.log(resultado);
//Potencia
resultado = Math.pow(3, 2);
console.log(resultado);
//Minimo
resultado = Math.min(3, 5, 1, -15);
console.log(resultado);
//Maximo
resultado = Math.max(3, 5, 1, -15);
console.log(resultado);

//Aleatorio
resultado = Math.random() * 100;
console.log(resultado);
//Aleatorio dentro de un rango

resultado = Math.floor(Math.random() * 30);
console.log(resultado);