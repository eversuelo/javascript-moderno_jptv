//Variables 
const carrito = document.querySelector('#carrito');
contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargaEventListeners();
function cargaEventListeners() {
    listaCursos.addEventListener('click', agregarCurso);
    //Elimina curso del carrito
    carrito.addEventListener('click', eliminarCurso);
    //Vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = [];
        LimpiarHTML();
    });
}
//Funciones
function agregarCurso(e) {
    if (e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}
//Elimina un curso del carrito
function eliminarCurso(e) {
    if (e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id');

        //Elimina del arreglo de articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);

        carritoHTML(); //Itera sobre el carrito y muestra su HTML
    }
}
//Lee el contenido del HTML al que le dimos click y extrae la información del curso
function leerDatosCurso(curso) {
    console.log(curso);
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }
    //Revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);
    if (existe) {
        const cursos = articulosCarrito.map(curso => {
            if (curso.id === infoCurso.id) {
                curso.cantidad++;
                return curso;//retorna el objeto actualizado
            } else {
                return curso;//Retorna los objetos que no son duplocados
            }

        });
        articulosCarrito = [...cursos];
    } else {
        //Agrega elementos al arreglo carrito
        articulosCarrito = [...articulosCarrito, infoCurso];
    }


    carritoHTML();
}
//Muestra el carrito de compras en el HTML
function carritoHTML() {

    //Limpiar el HTML
    LimpiarHTML();

    //Recorre el carrito y genera el HTML
    articulosCarrito.forEach(curso => {
        const { imagen, titulo, precio, cantidad, id } = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>
        
        <img src="${imagen}" width="100">
        </td>
        <td>
        ${titulo}
        </td>
        <td>
        ${precio}
        </td>
        <td>
        ${cantidad}
        </td>
        <td><a href="#" class="borrar-curso" data-id="${id}">X</a></td>
        `;
        //Agrega el HTML del carrito en el body
        contenedorCarrito.appendChild(row);

    });

}
function LimpiarHTML() {
    //Forma Lenta
    //contenedorCarrito.innerHTML='';
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}