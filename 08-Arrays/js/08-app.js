const producto = {
    nombrre: "MOnitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

//Destructuring con arreglos
 const numero=[10,20,30,40,50];
 const [primero,/*Puede contener un nombre*/,...tercero]=numero;
 console.log(primero);
 console.log(tercero);