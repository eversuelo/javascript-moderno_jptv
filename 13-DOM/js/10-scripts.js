const navegacion = document.querySelector('nav.navegacion');
const enlace = document.createElement('A');
enlace.textContent = 'NueVO enlace';
enlace.href = '#';
enlace.target = '_blank';
enlace.setAttribute('data-enlace', 'nuevo-enalce');
navegacion.appendChild(enlace);
console.log(enlace);
navegacion.insertBefore(enlace, navegacion.children[1]);
// crear los 3 parrafos.

const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria');
parrafo1.classList.add('concierto');

// Segundo parrafo
const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');

// 3er parrafo...
const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por pesrona';
parrafo3.classList.add('precio');

// crear el div...
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1)
info.appendChild(parrafo2)
info.appendChild(parrafo3);


// Vamos a crear la imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';

// Crear el Card..
const card = document.createElement('div');
card.classList.add('card');

// Vamos a asignar la imagen al card...
card.appendChild(imagen);

// y el info
card.appendChild(info);


// Insertarlo en el HTML...
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(card); // al inicio info

console.log(parrafo1);
console.log(parrafo2);