const cliente={
    nombre:'Ever',
    saldo:500
}
console.log(cliente);

function Cliente(nombre,saldo){
    this.nombre=nombre;
    this.saldo=saldo;
}3
const ever= new Cliente('ever',800);
console.log(ever);