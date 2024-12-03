'use strict'

function crearTablero(filas, columnas){
    let tablero = document.createElement('table');
    tablero.id = "tablero";
    
    let tableroData = [];

    for(let fila = 0; fila < filas; fila++){
        let tableroDataFila = []
        
        let row = document.createElement('tr');
        for(let columna = 0; columna < columnas; columna++){
            if(Math.random() > 0.7){
                tableroDataFila.push(true);
            } else {
                tableroDataFila.push(false);
            }
            

            let casilla = document.createElement('td');
            casilla.dataset.fila = fila;
            casilla.dataset.columna = columna;
            casilla.classList.add('casilla')
            row.appendChild(casilla);
        }
        tableroData.push(tableroDataFila);
        tablero.appendChild(row);
        
    }
    return [tablero, tableroData]
}

let tablero = crearTablero(10,10);
function ponerBotones(){
    function minar(e){
        let filaMinada = e.target.dataset.fila;
        let columnaMinada = e.target.dataset.columna;
        console.log(procesarCasilla(filaMinada, columnaMinada))
        switch(procesarCasilla(filaMinada, columnaMinada)){
            case "bomba":
                alert("bomba");
                e.target.classList.toggle('bomba')
                break;
            case "xd":
                e.target.innerHTML = calcularBombasCerca(filaMinada, columnaMinada)
        }
    }

    function ponerBandera(e){
        e.preventDefault();
        e.target.classList.toggle('bandera');
    }

    let casillas = document.querySelectorAll('.casilla');
    casillas.forEach((e) => {
        e.addEventListener("click", (e) => minar(e));
        e.addEventListener("contextmenu", (e) => ponerBandera(e));
    })
}

function procesarCasilla(filaMinada, columnaMinada){
    console.log("tablero[1]["+filaMinada+"]["+columnaMinada+"]")
    if(tablero[1][filaMinada][columnaMinada]){ //si hay bomba
        return "bomba"
    } else {
        return "xd";
    }
}
function calcularBombasCerca(fila, columna){
    let numBombas = 0;
    let direcciones = [[-1, 0], [1, 0], [0, -1], [0, 1], [-1, -1], [-1, 1], [1, -1], [1, 1]]

    direcciones.forEach((e) => {
        console.log(fila + " // " + e[0] + "  " + e[1] )
        if(procesarCasilla(Number(fila) + e[0], Number(columna) + e[1]) == "bomba") {
            numBombas++
        }
    })
    if(numBombas == 0){
        numBombas = '';
    }
    return numBombas;
}
console.log()
document.querySelector('body').appendChild(tablero[0])
ponerBotones()