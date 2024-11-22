'use strict'

document.getElementById('dni').addEventListener("blur", (e) => {
    let dni = e.target.value
    if(!validarDNI(dni)){
        document.getElementById('dni').setAttribute("style", "border: red solid 1px")
    } else {
        document.getElementById('dni').setAttribute("style", "border: green solid 1px;")
    }
})
document.getElementById('email').addEventListener("blur", (e) => {
    let email = e.target.value
    if(!validarEmail(email)){
        document.getElementById('email').setAttribute("style", "border: red solid 1px")
    } else {
        document.getElementById('email').setAttribute("style", "border: green solid 1px;")
    }
})
document.getElementById('fecha').addEventListener("blur", procesarfecha);
document.getElementById('fecha').addEventListener("focus", procesarfecha);

function procesarfecha(e) {
    let fecha = e.target.value
    if(!validarFecha(fecha)){
        document.getElementById('fecha').setAttribute("style", "border: red solid 1px")
    } else {
        document.getElementById('fecha').setAttribute("style", "border: green solid 1px;")
    }
}

function validarDNI(dni){
    let DNIregex = new RegExp(`[0-9]{8}[A-Z]`)
    if(DNIregex.test(dni)){
        let letraDNI = dni.charAt(dni.length-1)
        let numerosDNI = dni.slice(0,dni.length-1)
        let restoDNI = numerosDNI % 23
        let letrasDNI = "TRWAGMYFPDXBNJZSQVHLCKE"
        return letraDNI == letrasDNI.charAt(restoDNI)
    } else {
        return false
    }
}

function validarEmail(email){
    let emailrex = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"

    let emailRegex = new RegExp(emailrex)
    return emailRegex.test(email)
}

function validarFecha(fecha){
    let fechaRegex = new RegExp(`[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}`)
    if(fechaRegex.test(fecha)){
        let dia = fecha.slice(0,2)
        let mes = fecha.slice(2,4)
        let anno = fecha.slice(4)
        if(mes > 12){
            return false
        }
        if((mes == 4 || mes == 6 || mes == 9 || mes == 11) && dia <= 30){
            return true
        } else if(mes == 2 && dia <= 28){
            return true
        } else if(dia <= 31){
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}