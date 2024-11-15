"use strict"

class Empleado {
    #nombre;
    #apellido;
    #nacimiento;
    #sueldo;
    
    constructor(nombre, apellido, nacimiento, sueldo){
        this.#nombre = nombre
        this.#apellido = apellido
        this.#nacimiento = nacimiento
        this.#sueldo = sueldo
    }
    
    getNombre(){
        return this.#nombre
    }

    getApellido(){
        return this.#apellido
    }

    getNacimiento(){
        return this.#nacimiento
    }

    getSueldo(){
        return this.#sueldo
    }
    toTableRow() {
        let empleadofila = document.createElement("tr");
        let empleadoCasillaNacimiento = document.createElement('td'),
        empleadoCasillaNombre = document.createElement('td'),
        empleadoCasillaApellidos = document.createElement('td'),
        empleadoCasillaSueldo = document.createElement('td')
        
        empleadoCasillaNombre.innerHTML = this.#nombre;
        empleadoCasillaApellidos.innerHTML = this.#apellido;
        empleadoCasillaSueldo.innerHTML = this.#sueldo;
        empleadoCasillaNacimiento.innerHTML = this.#nacimiento
        empleadofila.appendChild(empleadoCasillaNombre)
        empleadofila.appendChild(empleadoCasillaApellidos)
        empleadofila.appendChild(empleadoCasillaNacimiento)
        empleadofila.appendChild(empleadoCasillaSueldo)
        return empleadofila
        
    }
    
    
}
let empleados = 
[
    new Empleado("Javier", "Garcia Gabino", new Date('March 10, 1991').toLocaleDateString('es-ES'), 3),
    new Empleado("Pablo", "Campuzano Cuadrado", new Date("April 30, 2002").toLocaleDateString('es-ES'), 69420),
    new Empleado("Rappa", "Tier -0.5 DPS", new Date("April 30, 2024").toLocaleDateString('es-ES'), 1192001),
    new Empleado("Diego", "pal", new Date("October 13, 2003").toLocaleDateString('es-ES'), 123123),
    new Empleado("Diego", "Maradona", new Date("July 8, 2014").toLocaleDateString('es-ES'), 81),
]

//empleados.sort((a,b) => a[0] -  b[0]);

let tabla = document.getElementById('tabla-empleados');
let ordNombre = 1
let ordApellidos = 1
let ordNacimiento = 1
let ordSueldo = 1
function renderTabla(){
    tabla.innerHTML = "<tr><th id='columna-nombre'>Nombre</th><th id='columna-apellidos'>Apellidos</th><th id='columna-nacimiento'>Nacimiento</th><th id='columna-sueldo'>Sueldo</th></tr>"

    document.getElementById('columna-nombre').setAttribute('ord', ordNombre)
    document.getElementById('columna-apellidos').setAttribute('ord', ordApellidos)
    document.getElementById('columna-nacimiento').setAttribute('ord', ordNacimiento)
    document.getElementById('columna-sueldo').setAttribute('ord', ordSueldo)

    empleados.forEach((empleado) => {
        let empleadotr = empleado.toTableRow()
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
}

renderTabla()
