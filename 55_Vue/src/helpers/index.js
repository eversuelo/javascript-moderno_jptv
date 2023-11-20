const calcularTotalPagar = (cantidad, plazo) => {
    let total;
    if (cantidad < 5000) {
        total = cantidad * 1.20;
    } else if (cantidad >= 5000 && cantidad < 10000) {
        total = cantidad * 1.15;
    } else if (cantidad >= 10000 && cantidad < 15000) {
        total = cantidad * 1.1;
    } else if (cantidad >= 15000) {
        total = cantidad * 1.05;
    }
    if (plazo === 3) {
        total *= 1.05;
    } else if (plazo === 6) {
        total *= 1.1;
    } else if (plazo === 12) {
        total *= 1.15;
    }else{
        total *= 1.2;
    }
    return total;
}

export { calcularTotalPagar };