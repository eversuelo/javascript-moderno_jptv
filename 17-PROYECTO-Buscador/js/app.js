const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max - 15;
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}

document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos); //Muestra los autmomoviles
    llenarSelect();//Llena los años de select
});
//Event Listener para los select de busqueda
marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
});
year.addEventListener('change', e => {
    datosBusqueda.year = e.target.value;
    filtrarAuto();
});

minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;
    filtrarAuto();
});

maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;
    filtrarAuto();
});
transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
});
color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;
    filtrarAuto();
});
puertas.addEventListener('change', e => {
    datosBusqueda.puertas = parseInt(e.target.value);
    filtrarAuto();
});
function mostrarAutos(autos) {
    limpiarHTML();
    autos.forEach(auto => {
        const { marca, modelo, year, puertas, transmision, precio, color } = auto;
        const autoHTML = document.createElement('p');
        autoHTML.textContent = `
        ${marca} ${modelo} -${year} - ${puertas} Puertas - Transimision ${transmision}- Precio ${precio} - Color: ${color}
        `;
        resultado.appendChild(autoHTML);
    });

}

function llenarSelect() {
    for (let i = max; i > min; i--) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);
    }
}
function filtrarAuto() {
    const resultadoA = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);


    if (resultadoA.length) { mostrarAutos(resultadoA); } else {
        limpiarHTML();
        const noResultado = document.createElement('div');
        noResultado.classList.add('alerta', 'error');
        noResultado.textContent = 'No Hay Resultados, Intenta con otros terminos de busqueda';
        resultado.appendChild(noResultado);
    }
}
function filtrarMarca(auto) {
    if (datosBusqueda.marca) {
        return auto.marca == datosBusqueda.marca;
    }
    return auto;
}
function filtrarYear(auto) {
    if (datosBusqueda.year) {
        return auto.year == parseInt(datosBusqueda.year);
    }
    return auto;
}
function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }

}
function filtrarMinimo(auto) {
    if (datosBusqueda.minimo) {
        return auto.precio >= datosBusqueda.minimo;
    }
    return auto;
}
function filtrarMaximo(auto) {
    if (datosBusqueda.maximo) {
        return auto.precio <= datosBusqueda.maximo;
    }
    return auto;
}
function filtrarPuertas(auto) {
    if (datosBusqueda.puertas) {
        return auto.puertas === datosBusqueda.puertas;
    }
    return auto;
}
function filtrarTransmision(auto) {
    if (datosBusqueda.transmision) {
        return auto.transmision === datosBusqueda.transmision;
    }
    return auto;
} function filtrarColor(auto) {
    if (datosBusqueda.color) {
        return auto.color === datosBusqueda.color;
    }
    return auto;
}