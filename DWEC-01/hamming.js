function distanciaHamming(palabra1, palabra2) {
    let distancia = 0;
    if(palabra1.length != palabra2.length){
        return -1;
    }
    for(let i = 0; i < palabra1.length; i++){
        if(palabra1[i] != palabra2[i]){
            distancia++
        }
    }
    return distancia;
}
