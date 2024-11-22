"use strict"

class Empleado {
    #nombre;
    #apellido;
    #nacimiento;
    #sueldo;
    #email;
    #dni;
    
    constructor(nombre, apellido, nacimiento, sueldo, email, dni){
        this.#nombre = nombre
        this.#apellido = apellido
        this.#nacimiento = nacimiento
        this.#sueldo = sueldo
        this.#email = email
        this.#dni = dni
    }
    
    getNombre(){
        return this.#nombre}
    getApellido(){
        return this.#apellido}
    getNacimiento(){
        return this.#nacimiento}
    getSueldo(){
        return this.#sueldo}
    getEmail(){
        return this.#email}
    getDni(){
        return this.#dni}
    setNombre(valor){
        this.#nombre = valor}
    setApellido(valor){
        this.#apellido = valor}
    setNacimiento(valor){
        this.#nacimiento = valor}
    setSueldo(valor){
        this.#nombre = valor}
    setEmail(valor){
        this.#email = valor}
    setDni(valor){
        this.#dni = valor}
    
    


    toTableRow(cuentaEmpleados, empleadoAEditar) {
        let empleadofila = document.createElement("tr");
        let empleadoCasillaNacimiento = document.createElement('td'),
        empleadoCasillaNombre = document.createElement('td'),
        empleadoCasillaApellidos = document.createElement('td'),
        empleadoCasillaSueldo = document.createElement('td'),
        empleadoCasillaEmail = document.createElement('td'),
        empleadoCasillaDni = document.createElement('td'),
        empleadoCasillaEditar = document.createElement('td')
        empleadofila.appendChild(empleadoCasillaNombre)
        empleadofila.appendChild(empleadoCasillaApellidos)
        empleadofila.appendChild(empleadoCasillaNacimiento)
        empleadofila.appendChild(empleadoCasillaSueldo)
        empleadofila.appendChild(empleadoCasillaEmail)
        empleadofila.appendChild(empleadoCasillaDni)
        empleadofila.appendChild(empleadoCasillaEditar)
        if(cuentaEmpleados !== empleadoAEditar){
            empleadoCasillaNombre.innerHTML = this.#nombre
        empleadoCasillaApellidos.innerHTML = this.#apellido
        empleadoCasillaSueldo.innerHTML = this.#sueldo
        empleadoCasillaNacimiento.innerHTML = this.#nacimiento
        empleadoCasillaEmail.innerHTML = this.#email
        empleadoCasillaDni.innerHTML = this.#dni
        empleadoCasillaEditar.innerHTML = "<img class='editar' id="+cuentaEmpleados+" src='editar.webp'>"
        } else {
            let empleadoCasillaFormNacimiento = document.createElement('input'),
            empleadoCasillaFormNombre = document.createElement('input'),
            empleadoCasillaFormApellidos = document.createElement('input'),
            empleadoCasillaFormSueldo = document.createElement('input'),
            empleadoCasillaFormEmail = document.createElement('input'),
            empleadoCasillaFormDni = document.createElement('input'),
            empleadoCasillaFormEditar = document.createElement('input')
            
            empleadoCasillaFormNombre.innerHTML = this.#nombre
            empleadoCasillaFormApellidos.innerHTML = this.#apellido
            empleadoCasillaFormSueldo.innerHTML = this.#sueldo
            empleadoCasillaFormNacimiento.innerHTML = this.#nacimiento
            empleadoCasillaFormEmail.innerHTML = this.#email
            empleadoCasillaFormDni.innerHTML = this.#dni
            empleadoCasillaFormEditar.innerHTML = "<img class='editar' id="+cuentaEmpleados+" src='ok.webp'>"
        }
        return empleadofila
    };
    updateEmpleado(nombre, apellidos, suedo, fecha, email, dni) {
        console.log("a");
    }

    
    
}
let empleados = [
    new Empleado("Carmen", "Española Española", "01/01/1980", "9$", "carmenespecimen@espana.es", "99999999R")
    ]

//empleados.sort((a,b) => a[0] -  b[0]);

let tabla = document.getElementById('tabla-empleados');
let ordNombre = 1
let ordApellidos = 1
let ordNacimiento = 1
let ordSueldo = 1
function renderTabla(empleadoAEditar){
    tabla.innerHTML = "<tr><th id='columna-nombre'>Nombre</th><th id='columna-apellidos'>Apellidos</th><th id='columna-nacimiento'>Nacimiento</th><th id='columna-sueldo'>Sueldo</th><th id='columna-email'>Email</th><th id='columna-dni'>DNI</th><th>Editar</th></tr>"

    document.getElementById('columna-nombre').setAttribute('ord', ordNombre)
    document.getElementById('columna-apellidos').setAttribute('ord', ordApellidos)
    document.getElementById('columna-nacimiento').setAttribute('ord', ordNacimiento)
    document.getElementById('columna-sueldo').setAttribute('ord', ordSueldo)
    let cuentaEmpleados = 0
    empleados.forEach((empleado) => {
        let empleadotr = empleado.toTableRow(cuentaEmpleados, empleadoAEditar)
        cuentaEmpleados++
        //console.log(empleadotr)
        tabla.append(empleadotr)
    })
    document.getElementById('columna-nombre').addEventListener("click", (event) => {
        if(event.target.getAttribute('ord') == 1){
            empleados.sort((a, b) => {
                return a.getNombre().localeCompare(b.getNombre())
            })
            ordNombre = 2
        } else {
            empleados.sort((a, b) => {
                return b.getNombre().localeCompare(a.getNombre())
            })
            ordNombre = 1
        }
        renderTabla()
    })
    
    document.getElementById('columna-apellidos').addEventListener("click", (event) => {
        if(event.target.getAttribute('ord') == 1){
            empleados.sort((a, b) => {
                return a.getApellido().localeCompare(b.getApellido())
            })
            ordApellidos = 2
        } else {
            empleados.sort((a, b) => {
                return b.getApellido().localeCompare(a.getApellido())
            })
            ordApellidos = 1
        }
        renderTabla()
    })
    
    document.getElementById('columna-nacimiento').addEventListener("click", (event) => {
        if(event.target.getAttribute('ord') == 1){
            empleados.sort((a, b) => {
                return a.getNacimiento() < b.getNacimiento()
            })
            ordNacimiento = 2
        } else {
            empleados.sort((a, b) => {
                return b.getNacimiento() < a.getNacimiento()
            })
            ordNacimiento = 1
        }
        
        renderTabla()
    })
    
    document.getElementById('columna-sueldo').addEventListener("click", (event) => {
        if(event.target.getAttribute('ord') == 1){
            empleados.sort((a, b) => {
                return a.getSueldo() - b.getSueldo()
            })
            ordSueldo = 2
        } else {
            empleados.sort((a, b) => {
                return b.getSueldo() - a.getSueldo()
            })
            ordSueldo = 1
        }
        renderTabla()
    })

    let botonesEditar = document.querySelectorAll('.editar')
    botonesEditar.forEach(boton => {
        boton.addEventListener("click", (event) => {
            renderTabla(event.target.id)
        })
    });

    //document.querySelectorAll('editar').addEventListener("click", (event) => {})
    //en un mundo perfecto esto se podria
}

let formulario = document.getElementById('formulario-empleado')
formulario.addEventListener("submit", (e) => {
    e.preventDefault()
    /*
    let nombre = document.getElementById('nombre')
    let apellidos = document.getElementById('apellidos')
    let sueldo = document.getElementById('sueldo')
    let email = document.getElementById('email')
    let dni = document.getElementById('dni')
    let fecha = document.getElementById('fecha')
    console.log("a")
    if(validarDNI(dni) && validarFecha(fecha) && validarEmail(email)){
        empleados.push(new Empleado(nombre, apellidos, fecha, sueldo, email, dni, fecha))
    }*/
})
function nuevoEmpleado(){
    let nombre = document.getElementById('nombre').value.trim()
    let apellidos = document.getElementById('apellidos').value.trim()
    let sueldo = document.getElementById('sueldo').value.trim()
    let email = document.getElementById('email').value.trim()
    let dni = document.getElementById('dni').value.trim()
    let fecha = document.getElementById('fecha').value.trim()
    console.log("a")
    console.log(validarDNI(dni))
    console.log(validarEmail(email))
    console.log(validarFecha(fecha))
    if(validarDNI(dni) && validarFecha(fecha) && validarEmail(email)){
        empleados.push(new Empleado(nombre, apellidos, fecha, sueldo, email, dni, fecha))
        console.log(empleados)
        renderTabla()
    }
}


renderTabla()