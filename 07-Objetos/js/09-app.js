const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
}
const medidas = {
    peso: '1 Kg',
    medida: '1m'
}
console.log(producto);
console.log(medidas);

const resultado = Object.assign(producto, medidas);

console.log(resultado);
const resultado2 = {
    ...producto,
    ...medidas
}
console.log(resultado2);