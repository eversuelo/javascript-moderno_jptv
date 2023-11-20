iniciarApp();

function iniciarApp() {
    console.log("Iniciando App");
    segundaFuncion();
}

function segundaFuncion() {
    console.log("Desde la sefgunda funcion");
    usuarioAutenticado('Pablo')
}

function usuarioAutenticado(nombre = "usuarui") {
    console.log("Auntenticando usuario ... espere...");
    console.log(`Usuario Autentcado exitosamente,${nombre}`);
}