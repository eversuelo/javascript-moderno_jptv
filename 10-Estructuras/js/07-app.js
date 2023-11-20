// 
const efectivo=300;
const credito=400;
const disponible=efectivo+credito;
const totalPagar=600;
if(efectivo>totalPagar || credito>totalPagar){
    console.log('Si Podemos Pagar');

}
else{
    console.log('Fondos Insuficientes');
}
