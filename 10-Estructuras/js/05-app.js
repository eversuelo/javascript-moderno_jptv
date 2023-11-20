//Switch Case
switch (metodoPago) {
    case 'efectivo':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case 'cheque':
        console.log(`Pagaste con ${metodoPago}`);

    default:
        console.log('Aun no has seleccionado un método d epago o método de pago no soportado');
        break;
}