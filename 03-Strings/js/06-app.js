const producto = "Monitor 24 Pulgadas";
//.repeat te va permitir repetir una cadena de texto..
const texto = 'en Promocion'.repeat(2.1);
console.log(texto);
console.log(`${producto} ${texto}!!!`);

//Split permite dividir un String

const actividad = "Estoy Aprendiendo JavaScript Moderno";
console.log(actividad.split(" "));
const hobbies = 'Leer, caminar, escuchar musica, escribir, aprender a programar';
console.log(hobbies.split(", "));