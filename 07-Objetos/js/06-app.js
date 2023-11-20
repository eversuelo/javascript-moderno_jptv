const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        medidas: {
            peso: "1Kg",
            medida: "1 m"
        },
        fabricacion: {
            pais: "China"
        }
    }
}
const { nombre, informacion, informacion: { fabricacion, fabricacion: { pais } } } = producto;
console.log(nombre);
console.log(pais);
console.log(fabricacion);