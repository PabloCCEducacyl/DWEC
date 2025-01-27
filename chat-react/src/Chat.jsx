import { useState, useEffect } from "react";


function Chat(){
    const [mensajes, setMensajes] = useState([])

    useEffect(() => {
        const socket = new WebSocket('ws://localhost:3000/webhook');

        socket.send('mecago');
    })

    return(
        <div>
            <form action="localhost:3000/webhook">
            
                <input type="submit" value="a" />
            </form>
        </div>
    )
}

export default Chat;