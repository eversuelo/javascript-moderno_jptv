//Operador Mayor que y menor que
const dinero = 500;
const totalAPagar = 300;
const tarjeta = true;
const cheque = false;
if (dinero >= totalAPagar) {
    console.log('Si Podemos Pagar');
} else if (cheque) {
    console.log("Si Puedo Pagar por que tengo cheque");
} else if (tarjeta) {
    console.log("Si Puedo Pagar por que tengo tarjeta");
} else {
    console.log('Fondos Insuficientes');
}