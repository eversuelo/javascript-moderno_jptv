const encabezado =document.querySelector('.contenido-hero h1');
console.log(encabezado);
console.log(encabezado.innerText);//Si en el CSS - visibility:hidden; esta habilitado, no lo va encontrar
console.log(encabezado.textContent); //Si lo va Encontrar
console.log(encabezado.innerHTML);// Se trae el HTML

const nuevoHeading='Nuevo Heading';
document.querySelector('.contenido-hero h1').textContent=nuevoHeading;

const imagen=document.querySelector('.card img');
console.log(imagen);
imagen.src='img/hacer1.jpg';