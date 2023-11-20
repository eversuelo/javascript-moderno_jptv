//Variables y Selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');

//Eventos
eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
    formulario.addEventListener('submit', agregarGasto);
}


//Clases
class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }
    nuevoGasto(gasto) {
        this.gastos = [...this.gastos, gasto];
        this.calcularRestante();
    }
    calcularRestante() {
        const gastado = this.gastos.reduce((total, gasto) => total + gasto.cantidad, 0);
        this.restante = this.presupuesto - gastado;

    }
    eliminarGasto(id) {
        this.gastos = this.gastos.filter( gasto => gasto.id.toString() !== id );
        this.calcularRestante();
    }

}

class UI {
    insertarPresupuesto(cantidad) {
        //Extrayendo los valores
        const { presupuesto, restante } = cantidad;
        //Agregar Al Html
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }
    imprimirAlerta(mensaje, tipo) {
        //Crear el div 
        const divMensaje = document.createElement('DIV');
        divMensaje.classList.add('text-center', 'alert');

        if (tipo === 'error') {
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');

        }
        divMensaje.textContent = mensaje;
        document.querySelector('.primario').insertBefore(divMensaje, formulario);
        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }
    mostrarGastos(gastos) {
        this.limpiarHTML();//Elimina el HTML previo
        //Itera sobre los gastos
        gastos.forEach(gasto => {
            const { cantidad, nombre, id } = gasto;
            //Crear Li
            const nuevoGasto = document.createElement('li');
            nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center ';
            nuevoGasto.setAttribute('data-id', id);

            //Agregar el HTML del gasto
            nuevoGasto.innerHTML = `${nombre} <span class="badge badge-primary badge-pill">$ ${cantidad}</span>`
            const btnBorrar = document.createElement('Button');
            btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
            btnBorrar.textContent = 'Borrar X';
            btnBorrar.setAttribute('data-id', id);
            nuevoGasto.appendChild(btnBorrar);
            btnBorrar.onclick=(e)=>{
               eliminarGasto(e)
            }

            //Agregar Al HTML
            gastoListado.appendChild(nuevoGasto);
        });
    }
    limpiarHTML() {
        while (gastoListado.firstChild) {
            gastoListado.removeChild(gastoListado.firstChild);
        }
    }
    actualizarRestantes(restante) {

        document.querySelector('#restante').textContent = restante;

    }
    // Cambia de color el presupuesto restante
    comprobarPresupuesto(presupuestoObj) {
        const { presupuesto, restante } = presupuestoObj;
        const restanteDiv = document.querySelector('.restante');

        // console.log(restante);
        // console.log( presupuesto);

        // Comprobar el 25% 
        if ((presupuesto / 4) > restante) {
            restanteDiv.classList.remove('alert-success', 'alert-warning');
            restanteDiv.classList.add('alert-danger');
        } else if ((presupuesto / 2) > restante) {
            restanteDiv.classList.remove('alert-success');
            restanteDiv.classList.add('alert-warning');
        } else {
            restanteDiv.classList.remove('alert-danger', 'alert-warning');
            restanteDiv.classList.add('alert-success');
        }

        // Si presupuesta es igual a 0 
        if (restante <= 0) {
            ui.imprimirAlerta('El presupuesto se ha agotado', 'error');
            formulario.querySelector('button[type="submit"]').disabled = true;
        }else{
            formulario.querySelector('button[type="submit"]').disabled = false;
        }
    }
}
//Instanciar 
const ui = new UI();
let presupuesto;
//Funciones

function preguntarPresupuesto() {
    const presupuestoUsuario = Number(prompt('Cual es tu Presupuesto?'));
    if (presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0) {
        window.location.reload();
    }
    presupuesto = new Presupuesto(presupuestoUsuario);
    ui.insertarPresupuesto(presupuesto);
}

function agregarGasto(e) {
    e.preventDefault();
    //Leer los datos del formulario
    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value)
    if (nombre === '' || cantidad === '') {
        ui.imprimirAlerta('Ambos campos son obligatorios', 'error');
        return;
    } else if (cantidad <= 0 || isNaN(cantidad)) {
        ui.imprimirAlerta('cantidad no valida', 'error');
        return;
    }
    //Generar un objeto con el gasto
    const gasto = { nombre, cantidad, id: Date.now() };
    presupuesto.nuevoGasto(gasto);

    ui.imprimirAlerta('Gasto agregado correctamente', 'exito');
    ///Imprimir los gastos
    const { gastos, restante } = presupuesto;
    ui.mostrarGastos(gastos);

    ui.actualizarRestantes(restante);

    ui.comprobarPresupuesto(presupuesto);
    formulario.reset();
}
function eliminarGasto(e) {
    if(e.target.classList.contains('borrar-gasto')){
        const { id } = e.target.parentElement.dataset;
        presupuesto.eliminarGasto(id);
        // Reembolsar
        ui.comprobarPresupuesto(presupuesto);
        const {gastos} =presupuesto;
        ui.mostrarGastos(gastos);
        // Pasar la cantidad restante para actualizar el DOM
        const { restante } = presupuesto;
        ui.actualizarRestantes(restante);

        // Eliminar del DOM
        e.target.parentElement.remove();
    } 
}