const usuario =true;
const puedePagar=true;

if(usuario && puedePagar){
    console.log("Si puedes comprar");

}else if(!usuario){
    console.log("Inicia sesion o saca una cuenta");
}else if(!puedePagar){
    console.log('Fondos Insuficientes');
}
else{
    console.log("No piedes Comprar");
}