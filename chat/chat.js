'use strict'

const usuarioInput = document.getElementById('usuario')
const mensajeInput = document.getElementById('mensaje')
const enviarInput = document.getElementById('enviar')

const chat = document.getElementById('chat')

function getMensajes() {
    if(localStorage.getItem('mensajes') === null){
        return []
    } else {
        return JSON.parse(localStorage.getItem('mensajes'))
    }
}

function renderMensajesPasados() {
    const mensajes = getMensajes()
    //chat.innerHTML = ''
    console.log(mensajes)
    if(mensajes.length == 0){
        chat.innerHTML = ''
    } else {
        mensajes.forEach(mensaje => {
            const mensajeDiv = document.createElement('div')
            mensajeDiv.classList.add("mensaje");
            mensajeDiv.innerHTML = `
            <h3>Usuario: ${mensaje.usuario}</h3>
            <p>${mensaje.texto}</p>
            <p>${mensaje.timestamp}</p>`
            chat.appendChild(mensajeDiv)
        });
    }
}


function nuevoMensaje(e){
    e.preventDefault();

    const mensajeTexto = mensajeInput.value
    const usuarioTexto = usuarioInput.value
    const mensajeDate = new Date().toLocaleString()

    const mensajeJSON = { texto: mensajeTexto, usuario: usuarioTexto, timestamp: mensajeDate}
    
    const mensajes = getMensajes();

    mensajes.push(mensajeJSON)

    localStorage.setItem('mensajes', JSON.stringify(mensajes));

    //esto deberia ir por el mismo sitio que lo de renderMensajesPasados pero bueno
    const mensajeDiv = document.createElement('div')
    mensajeDiv.classList.add("mensaje");
    mensajeDiv.innerHTML = `
        <h3>Usuario: ${mensajeJSON.usuario}</h3>
        <p>${mensajeJSON.texto}</p>
        <p>${mensajeJSON.timestamp}</p>`
    chat.appendChild(mensajeDiv)
    window.scrollTo(0, document.body.scrollHeight);
}

function limpiarChat(){
    localStorage.clear('mensajes')
    renderMensajesPasados()
}

renderMensajesPasados()