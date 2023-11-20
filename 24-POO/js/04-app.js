
class Cliente { 
    #nombre
    constructor( nombre, saldo ) {
        this.#nombre = nombre;
        this.saldo = saldo;
    }
    imprimirSaldo() {
        return `Hola ${this.#nombre}, tu saldo es: ${this.saldo}`;
    }

    retiraSaldo(retiro) {
        this.saldo -= retiro;
    }
    static bienvenida(){
        return `Bienvenido al cajero`;
    }
    setNombre(nombre){
        this.#nombre=nombre;
    }
    getNombre(){
        return this.#nombre;
    }
}
const juan =new Cliente('Ever',5000);
console.log(juan.getNombre);
juan.setNombre('Juan');
console.log(juan.getNombre);