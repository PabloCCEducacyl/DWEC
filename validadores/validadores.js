'use strict'

document.getElementById('dni').addEventListener("blur", (e) => {
    let dni = e.target.value
    if(!validarDNI(dni)){
        document.getElementById('dni').setAttribute("style", "border: red solid 10px")
    } else {
        document.getElementById('dni').setAttribute("style", "border: green solid 10px;")
    }
})

function validarDNI(dni){
    let DNIregex = new RegExp(`[0-9]{8}[A-Z]`)
    if(DNIregex.test(dni)){
        let letraDNI = dni.charAt(dni.length-1);
        let numerosDNI = dni.slice(0,dni.length-1);
        let restoDNI = numerosDNI % 23
        let letrasDNI = "TRWAGMYFPDXBNJZSQVHLCKE"
        return letraDNI == letrasDNI.charAt(restoDNI)
    } else {
        return false
    }
    
}