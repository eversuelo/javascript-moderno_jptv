//Variables
const btnEnviar = document.getElementById('enviar');
const btnReset = document.getElementById('resetBtn');
const formulario = document.querySelector('#enviar-mail');
//Variables para campos
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
eventListeners();

function eventListeners() {
    document.addEventListener('DOMContentLoaded', iniciarApp);


}

function iniciarApp() {
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);
    //Enviar Formulario
    btnEnviar.addEventListener('click', enviarEmail);
    btnReset.addEventListener('click', () => {
        formulario.reset();
        inicioApp();
    });
}
function validarFormulario(e) {
    if (e.target.value.length > 0) {
        const error = document.querySelector('p.error');
        if (error) {
            error.remove();
        }
        e.target.classList.remove('border', 'border-red-500');
        e.target.classList.add('border', 'border-green-500');
        console.log('Si hay algo');
    } else {
        e.target.classList.remove('border', 'border-green-500');
        e.target.classList.add('border', 'border-red-500');
        mostrarError('Todos los campos son obligatorios');

    }
    if (e.target.type === 'email') {

        if (er.test(e.target.value)) {
            const error = document.querySelector('p.error');
            if (error) {
                error.remove();
            }
            e.target.classList.remove('border', 'border-red-500');
            e.target.classList.add('border', 'border-green-500');
        } else {
            e.target.classList.remove('border', 'border-green-500');
            e.target.classList.add('border', 'border-red-500');
            mostrarError('El email no es Valido');
        }
    }
    if (er.test(email.value) && asunto.value !== '' && mensaje.value !== '') {

        btnEnviar.disabled = false;
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
    }
}

function mostrarError(mensaje) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border', 'border-red-500', 'background-red-100', 'text-red-500', 'p-3', 'mt-5', 'text-center', 'error');
    const errores = document.querySelectorAll('.error');
    if (errores.length === 0) {
        formulario.appendChild(mensajeError);
    }
}
//Enviar Email
function enviarEmail(e) {
    e.preventDefault();
    //Mostrar spinner

    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'flex';
    setTimeout(() => {
        spinner.style.display = 'none';
    }, 3000);
    const parrafo = document.createElement('p');
    parrafo.textContent = 'Se ha enviado correctamente el email';
    parrafo.classList.add('text-center', 'my-10', 'p-5', 'text-white', 'font-bold', 'uppercase');
    parrafo.style.backgroundColor = 'green';
    formulario.insertBefore(parrafo, spinner);
    setTimeout(() => {

        parrafo.remove();
        formulario.reset();
        iniciarApp();
    }, 3000);

}