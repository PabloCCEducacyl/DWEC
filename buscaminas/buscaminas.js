'use strict'

let juego = 1

function crearTablero(filas, columnas){
    let tablero = document.createElement('table');
    tablero.id = "tablero";
    
    let tableroData = [];

    for(let fila = 0; fila < filas; fila++){
        let tableroDataFila = []
        
        let row = document.createElement('tr');
        for(let columna = 0; columna < columnas; columna++){
            if(Math.random() < 0.16){
                tableroDataFila.push(true);
            } else {
                tableroDataFila.push(false);
            }
            

            let casilla = document.createElement('td');
            casilla.dataset.fila = fila;
            casilla.dataset.columna = columna;
            casilla.dataset.minada = 0;
            casilla.dataset.bandera = 0;
            casilla.classList.add('casilla')
            row.appendChild(casilla);
        }
        tableroData.push(tableroDataFila);
        tablero.appendChild(row);
        
    }
    ponerBotones()
    return [tablero, tableroData]
}

let tablero = crearTablero(10,10);

function coordenadasACasilla(fila, columna) {
    return document.querySelector(`[data-fila='${fila}'][data-columna='${columna}']`);
}

function minar(fila, columna){
    // console.log(fila, columna)
    if(juego == 0){
        return;
    }
    let casilla = coordenadasACasilla(fila, columna);
    // console.log(casilla)
    if(casilla.dataset.minada == 1 || casilla.dataset.bandera == 1){
        return;
    } else {
        casilla.dataset.minada = true;
        // console.log(procesarCasilla(fila, columna))
        switch(procesarCasilla(fila, columna)){
            case "bomba":
                // casilla.classList.toggle('bomba')
                revelarTablero()
                juego = 0;
                break;
            case "xd":
                if(calcularBombasCerca(fila, columna) == 0){
                    casilla.classList.add('vacio')
                } else {
                    casilla.innerHTML = calcularBombasCerca(fila, columna)
                }
                
                casilla.classList.add('minada');
                casilla.dataset.minada = 1;
                casilla.dataset.numero = calcularBombasCerca(fila, columna);

                if(calcularBombasCerca(fila, columna) == ''){
                    propagarVacio(fila, columna);
                }
        }
    }
}
function ponerBotones(){

    function ponerBandera(e){
        e.preventDefault();
        if(juego == 0){
            return;
        }
        let casilla = e.target;
        if(casilla.dataset.minada == 0){
            casilla.classList.toggle('bandera');
            if(casilla.dataset.bandera == 1){
                casilla.dataset.bandera = 0;
            } else {
                casilla.dataset.bandera = 1;
            }
        }
    }

    let casillas = document.querySelectorAll('.casilla');
    casillas.forEach((e) => {
        // console.log(e.dataset.minada)
        if(e.dataset.minada == 0){
            e.addEventListener("click", (e) => minar(e.target.dataset.fila, e.target.dataset.columna));
            e.addEventListener("contextmenu", (e) => ponerBandera(e));
        }
    })
}

function procesarCasilla(filaMinada, columnaMinada){
    if (tablero[1] && tablero[1][filaMinada] && tablero[1][filaMinada][columnaMinada]) {
        if (tablero[1][filaMinada][columnaMinada]) { // si hay bomba
            return "bomba";
        }
    } else {
        return "xd";
    }
}
function calcularBombasCerca(fila, columna){
    let numBombas = 0;
    let direcciones = [[-1, 0], [1, 0], [0, -1], [0, 1], [-1, -1], [-1, 1], [1, -1], [1, 1]]

    direcciones.forEach((e) => {
        let newFila = Number(fila) + e[0];
        let newColumna = Number(columna) + e[1];
        if (tablero[1] && tablero[1][newFila] && tablero[1][newFila][newColumna]) {
            if (procesarCasilla(newFila, newColumna) == "bomba") {
                numBombas++;
            }
        }
    })
    if(numBombas == 0){
        numBombas = '';
    }
    return numBombas;
}

function revelarTablero(){
    for(let i = 0; i < tablero[1].length; i++){
        for(let j = 0; j < tablero[1][i].length; j++){
            if(tablero[1][i][j]){
                setInterval(() => {
                    coordenadasACasilla(i, j).classList.toggle('bomba')
                }, 1000)
            }
        }
    }
}

function propagarVacio(fila, columna) {
    let direcciones = [[-1, 0], [1, 0], [0, -1], [0, 1], [-1, -1], [-1, 1], [1, -1], [1, 1]]
    direcciones.forEach((e) => {
        let newFila = Number(fila) + e[0];
        let newColumna = Number(columna) + e[1];
        // console.log(newFila + "  " +newColumna)
        if(newFila >= 0 && newFila < 10 && newColumna >= 0 && newColumna < 10){ // si la casilla está dentro del tablero
            let casilla = coordenadasACasilla(newFila, newColumna);
            if(casilla.dataset.minada == 0){
                minar(Number(fila) + e[0], Number(columna) + e[1])
                if(calcularBombasCerca(Number(fila) + e[0], Number(columna) + e[1]) == 0){
                    propagarVacio(Number(fila) + e[0], Number(columna) + e[1])
                }
            }
        }
    })
}

function introducirTablero(tablero){
    if(document.getElementById('tablero')){
        document.querySelector('body').removeChild(document.getElementById('tablero'))
    }
    document.querySelector('body').appendChild(tablero[0])
}

function nuevoTablero(event){
    event.preventDefault()
    const filas = document.getElementById('filas').value;
    const columnas = document.getElementById('columnas').value;
    let tablero = crearTablero(filas,columnas)
    introducirTablero(tablero)
}