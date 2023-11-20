document.addEventListener('DOMContentLoaded',function () {
    

    //Seleccionar los elementos de la interfaz
    const inputEmail=document.querySelector('#email');
    const inputAsunto=document.querySelector('#asunto');
    const inputMensaje=document.querySelector('#mensaje');

    //Asignar eventos
    inputEmail.addEventListener('blur',validar);
    inputAsunto.addEventListener('blur',validar);
    inputMensaje.addEventListener('blur',validar);

    //Funciones
    function validar(e){
        const elemento=e.target;
        if(elemento.value.trim()===''){
            
        }else{
            elemento.classList.add('error');
        }
    }
    function mostrarAlerta(){
        // generar alerta en HTML
        const errir=document.createElement('p');
        error.textContent='Todos los campos son obligatorios';
        
    }
});