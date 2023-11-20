//Constructores
function Seguro(marca, year, tipo) {
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

//Realiza la cotizacion con los datos
Seguro.prototype.cotizarSeguro = function () {
    /**
     * Americano 1.15
     * Asiatico 1.05
     * Europeo 1.35
     */
    let cantidad;
    const base = 2000;
    switch (this.marca) {
        case '1':
            cantidad = base * 1.15;
            break;
        case '2':
            cantidad = base * 1.05;
            break;
        case '3':
            cantidad = base * 1.35;
            break;
        default:
            break;
    }

    //Leer año
    const diferencia = new Date().getFullYear() - this.year;

    //Cada año que la diferencia es mayor el costo se va reducir un 3 por ciento
    cantidad -= ((diferencia * 3) * cantidad) / 100;

    /*Si el seguro es basico se multiplica por un30% mas
    //Si el seguro es completo se multiplica por un50% mas*/
    if (this.tipo === 'basico') {
        cantidad *= 1.3;
    } else {
        cantidad *= 1.5;
    }
    return cantidad;
}
function UI() {

}
UI.prototype.llenarOpciones = function () {
    const max = new Date().getFullYear(),
        min = max - 20;

    const selectAnios = document.querySelector('#year');
    for (let i = max; i > min; i--) {
        let option = document.createElement('option');
        option.value = i;
        option.innerHTML = i;
        selectAnios.appendChild(option);
    }
}
//Muestra alertas en pantalla
UI.prototype.mostrarMensaje = (mensaje, tipo) => {
    const div = document.createElement('DIV');
    if (tipo === 'error') {
        div.classList.add('error');
    } else {
        div.classList.add('exito');
    }
    div.classList.add('mensaje', 'mt-10');
    div.textContent = mensaje;
    formulario = document.querySelector('#cotizar-seguro');
    formulario.insertBefore(div, document.querySelector('#resultado'));
    setTimeout(() => {
        div.remove();
    }, 3000);
}
UI.prototype.mostrarResultado = (total, seguro) => {
    const div = document.createElement('div');
    div.classList.add('mt-10');

    div.innerHTML = `
<p class='header'>Tu Resumen: </p>
<p class="font-bold">Marca: <span class="font-normal"> ${seguro.marca} </span> </p>
<p class="font-bold">Año: <span class="font-normal"> ${seguro.year} </span> </p>
<p class="font-bold">Tipo: <span class="font-normal"> ${seguro.tipo} </span> </p>
<p class="font-bold"> Total: <span class="font-normal"> $ ${total} </span> </p>
`;
    const resultadoDiv = document.querySelector('#resultado');

    const spinner = document.querySelector('#cargando');
    spinner.style.display = 'block';
    setTimeout(() => {
        spinner.style.display = 'none';
        resultadoDiv.appendChild(div);
    }, 3000);

}
//Instanciar Ui
const ui = new UI();
console.log(ui);

document.addEventListener('DOMContentLoaded', () => {
    ui.llenarOpciones();

});
evenListeners();
function evenListeners() {
    formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit', cotizarSeguro);



}
function cotizarSeguro(e) {
    e.preventDefault();
    //Leer la marca 
    const marca = document.querySelector('#marca').value;

    //Leer el año seleccionado
    const year = document.querySelector('#year').value;
    //leer el tipo de cobertura
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    if (marca === '' || year === '' || tipo === '') {
        ui.mostrarMensaje('Todos los campos son Obligatorios', 'error');
        return;
    }
    ui.mostrarMensaje('Cotizando...', 'exito');
    //Ocultar las cotizaciones Previas
    const resultados = document.querySelector('#resultado div');
    if (resultados != null) {
        resultados.remove();
    }
    //Instanciar el seguro
    const seguro = new Seguro(marca, year, tipo);
    let total = seguro.cotizarSeguro();
    //Utilizar el prototipe que va cotizar el seguro;
    ui.mostrarResultado(total, seguro);
}