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
        return this.#sueldo;}
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
        this.#sueldo = valor}
    setEmail(valor){
        this.#email = valor}
    setDni(valor){
        this.#dni = valor}
    
    


    toTableRow() {
        let empleadofila = document.createElement("tr");
        let empleadoCasillaNacimiento = document.createElement('td'),
        empleadoCasillaNombre = document.createElement('td'),
        empleadoCasillaApellidos = document.createElement('td'),
        empleadoCasillaSueldo = document.createElement('td'),
        empleadoCasillaEmail = document.createElement('td'),
        empleadoCasillaDni = document.createElement('td'),
        empleadoCasillaEditar = document.createElement('td')
        empleadoCasillaEditar.className = "editartd"
        
        
        empleadofila.appendChild(empleadoCasillaNombre)
        empleadofila.appendChild(empleadoCasillaApellidos)
        empleadofila.appendChild(empleadoCasillaNacimiento)
        empleadofila.appendChild(empleadoCasillaSueldo)
        empleadofila.appendChild(empleadoCasillaEmail)
        empleadofila.appendChild(empleadoCasillaDni)
        empleadofila.appendChild(empleadoCasillaEditar)
        
        return empleadofila
    };
    toInfoRow(cuentaEmpleados) {
        let row = this.toTableRow()

        row.childNodes[0].innerHTML = this.#nombre
        row.childNodes[1].innerHTML = this.#apellido
        row.childNodes[2].innerHTML = this.#nacimiento
        row.childNodes[3].innerHTML = this.#sueldo
        row.childNodes[4].innerHTML = this.#email
        row.childNodes[5].innerHTML = this.#dni
        row.childNodes[6].innerHTML = "<img class='editar' id="+cuentaEmpleados+" src='editar.webp'>"

        return row
    }

    toFormRow() {
        let row = this.toTableRow()
        
        let empleadoCasillaFormNombre = document.createElement('input')
        empleadoCasillaFormNombre.type = "text"
        empleadoCasillaFormNombre.value = this.#nombre
        empleadoCasillaFormNombre.className = "input-editar"
        
        let empleadoCasillaFormApellidos = document.createElement('input')
        empleadoCasillaFormApellidos.type = "text"
        empleadoCasillaFormApellidos.value = this.#apellido
        empleadoCasillaFormApellidos.className = "input-editar"
        
        let empleadoCasillaFormNacimiento = document.createElement('input')
        empleadoCasillaFormNacimiento.type = "text"
        empleadoCasillaFormNacimiento.value = this.#nacimiento
        empleadoCasillaFormNacimiento.className = "input-editar"
        
        let empleadoCasillaFormSueldo = document.createElement('input')
        empleadoCasillaFormSueldo.type = "text"
        empleadoCasillaFormSueldo.value = this.#sueldo
        empleadoCasillaFormSueldo.className = "input-editar"
        
        let empleadoCasillaFormEmail = document.createElement('input')
        empleadoCasillaFormEmail.type = "email"
        empleadoCasillaFormEmail.value = this.#email
        empleadoCasillaFormEmail.className = "input-editar"
        
        let empleadoCasillaFormDni = document.createElement('input')
        empleadoCasillaFormDni.type = "text"
        empleadoCasillaFormDni.value = this.#dni
        empleadoCasillaFormDni.className = "input-editar"
        
        let empleadoCasillaFormEditar = document.createElement('input')
        empleadoCasillaFormEditar.type = "image"
        empleadoCasillaFormEditar.className = "editar"
        empleadoCasillaFormEditar.src = "ok.webp"

        empleadoCasillaFormEditar.addEventListener("click", (event) => {
            event.preventDefault()
            this.updateEmpleado(empleadoCasillaFormNombre.value, empleadoCasillaFormApellidos.value, empleadoCasillaFormSueldo.value, empleadoCasillaFormNacimiento.value, empleadoCasillaFormEmail.value, empleadoCasillaFormDni.value)
        })
        row.childNodes[0].appendChild(empleadoCasillaFormNombre)
        row.childNodes[1].appendChild(empleadoCasillaFormApellidos)
        row.childNodes[2].appendChild(empleadoCasillaFormNacimiento)
        row.childNodes[3].appendChild(empleadoCasillaFormSueldo)
        row.childNodes[4].appendChild(empleadoCasillaFormEmail)
        row.childNodes[5].appendChild(empleadoCasillaFormDni)
        row.childNodes[6].appendChild(empleadoCasillaFormEditar)
        return row
    }
    updateEmpleado(nombre, apellidos, suedo, fecha, email, dni) {
        this.setNombre(nombre)
        this.setApellido(apellidos)
        this.setSueldo(suedo)
        this.setNacimiento(fecha)
        this.setEmail(email)
        this.setDni(dni)
        console.log("llamando a renderTabla con -1")
        renderTabla(-1)
    }

    
    
}
let empleados = [
    new Empleado("Carmen", "Española Española", "01/01/1980", "9$", "carmenespecimen@espana.es", "99999999R"),
    new Empleado("Carmen", "Española Española", "01/01/1980", "9$", "carmenespecimen@espana.es", "99999999R"),
    ]

//empleados.sort((a,b) => a[0] -  b[0]);

let ordNombre = 1
let ordApellidos = 1
let ordNacimiento = 1
let ordSueldo = 1
let tabla = document.getElementById('tabla-empleados');
function renderTabla(empleadoAEditar){
    if(empleadoAEditar === "") {
        empleadoAEditar = -1
    }
    tabla = document.getElementById('tabla-empleados');
    tabla.innerHTML = "<tr><th id='columna-nombre'>Nombre</th><th id='columna-apellidos'>Apellidos</th><th id='columna-nacimiento'>Nacimiento</th><th id='columna-sueldo'>Sueldo</th><th id='columna-email'>Email</th><th id='columna-dni'>DNI</th><th>Editar</th></tr>"

    document.getElementById('columna-nombre').setAttribute('ord', ordNombre)
    document.getElementById('columna-apellidos').setAttribute('ord', ordApellidos)
    document.getElementById('columna-nacimiento').setAttribute('ord', ordNacimiento)
    document.getElementById('columna-sueldo').setAttribute('ord', ordSueldo)
    let cuentaEmpleados = 0
    empleados.forEach((empleado) => {
        let empleadotr;
        console.log("empleadoAEditar " + empleadoAEditar + " // cuenta: " +cuentaEmpleados)
        if(empleadoAEditar == cuentaEmpleados){
            empleadotr = empleado.toFormRow(cuentaEmpleados)
        } else {
            empleadotr = empleado.toInfoRow(cuentaEmpleados)
        }
        cuentaEmpleados++
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
        renderTabla(-1)
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
        renderTabla(-1)
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
        
        renderTabla(-1)
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
        renderTabla(-1)
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

    if(validarDNI(dni) && validarFecha(fecha) && validarEmail(email)){
        empleados.push(new Empleado(nombre, apellidos, fecha, sueldo, email, dni, fecha))
        console.log(empleados)
        renderTabla(-1)
    }
}


renderTabla(-1)