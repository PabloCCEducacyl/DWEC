'use strict'

function guardarEmpleados(empleados){
    const empleadosJSON = {empleados}
    const empleadosStr = JSON.stringify(empleadosJSON)
    const blob = new Blob([empleadosStr], { type: 'application/json' })
    console.log(blob)
    let a = document.createElement("a"),
        url = URL.createObjectURL(blob)
    a.href = url;
    a.download = "empleados.json"
    document.body.appendChild(a)
    a.click();
    setTimeout(() => {
        document.body.remove(a)
        window.URL.revokeObjectURL(url)
    }, 0);

}