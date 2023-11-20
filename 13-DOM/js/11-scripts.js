const btnFlotante =document.querySelector('.btn-flotante');
const footeR=document.querySelector('.footer');

btnFlotante.addEventListener('click',()=>{
    if(footeR.classList.contains('activo')){
        footeR.classList.remove('activo');
        btnFlotante.classList.remove('activo');
        btnFlotante.textContent=' Idioma Moneda';
    }else{
        footeR.classList.add('activo');
       btnFlotante.classList.add('activo');
       btnFlotante.textContent='X cerrar';
    }
});
