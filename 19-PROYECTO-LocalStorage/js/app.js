//Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];
eventListeners();
function eventListeners() {
    //Cuando usuario agrega un nuevo Tweet
    formulario.addEventListener('submit', agregarTweet);
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];
        crearHTML();
    });
}

//Funciones
function agregarTweet(e) {
    e.preventDefault();
    //TextArea
    const tweet = document.querySelector('#tweet').value;

    //Validacion
    if (tweet === '') {
        mostrarError('Un mensaje no puede ir vacio');
        return;
    }
    const tweetObj = {
        id: Date.now(),
        tweet: tweet
    }
    //Añadir al Arreglo de Tweets
    tweets = [...tweets, tweetObj];
    //Una vez agregado crear HTML
    crearHTML();
    //Reiniciar el Formulario
    formulario.reset();

}
//Mostrar mensajes de error
function mostrarError(error) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);
    setTimeout(() => {
        mensajeError.remove();
    }, 3000);
}
//mUESTRRA UN LISTADO DE LOS TWEETS
function crearHTML() {
    limpiarHTML();
    if (tweets.length > 0) {
        tweets.forEach((tweet) => {
            //Agregar un Boton para Eliminar
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.textContent = 'X';
            //Añadir la funcion Eliminar

            btnEliminar.onclick = (id) => {
                borrarTweet(tweet.id);

            }
            const li = document.createElement('li');
            li.innerText = tweet.tweet;
            li.appendChild(btnEliminar);
            //Insertar en el HTML
            listaTweets.appendChild(li);
        });

    }
    sincrinizarStorage();
}
function limpiarHTML() {
    while (listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}
//Agrega los tweet Actuales a localstorage
function sincrinizarStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets));
}
function borrarTweet(id) {
    tweets = tweets.filter(tweet => tweet.id !== id);
    crearHTML();
}