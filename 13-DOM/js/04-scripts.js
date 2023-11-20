//Retorna el primero que encuentre
let card =document.querySelector('.card');

console.log(card);

//Podemos especificar con selectores especificos como en CSS
let info =document.querySelector('.premium .info');
console.log(info);

//Seleccionar el segundo card de hospedaje
card=document.querySelector('section.hospedaje .card:nth-child(2)');
console.log(card);

//Seleccionar el formulario
const formulario =document.querySelector('#formulario');
console.log(formulario);
//Seleccionar elementos HTML
const navegacion=document.querySelector('nav');
console.log(nav);