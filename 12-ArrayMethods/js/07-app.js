const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembre'];

const resultado=meses.concat(meses2);

console.log(resultado);

//spread operator

const resultado2 =[...meses,'Diciembre'];
console.log(resultado2);