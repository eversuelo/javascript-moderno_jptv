const producto = {
        nombre: "Monitor de 20 pulgadas",
        precio: 300,
        disponible: true,
    }
    //Aregar nuevas propiedades del objeto
producto.imagen = "imagen.jpg";
//Eliminar propiedades del Objeto
delete producto.disponible;

console.log(producto);