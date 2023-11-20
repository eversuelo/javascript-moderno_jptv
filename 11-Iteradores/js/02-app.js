for (let i = 0; i <= 20; i++) {

    if (5 == i) {
        break;
    }else if(6==i){
        continue;
    }

    if (i % 2 == 0) {

        console.log("El numero es " + i + " par");
    } else {
        console.log("El numero es " + i + " impar");
    }
}