import { useEffect, useState } from "react";

function Comentarios({ id }) {
    const [comentarios, setComentarios] = useState([]);
    const [cargado, setCargado] = useState(false);
    const [escondido, setEscondido] = useState(false);
    


    async function fetchComentarios() {
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
            const dataComments = await res.json();
            setComentarios(dataComments);
        } catch (error) {
            console.error("Error fetching comments:", error);
        } finally {
            setCargado(true);
            setEscondido(false);
        }
    }

    if (!cargado) {
        return (
            <button onClick={fetchComentarios}>Mostrar Comentarios</button>
        );
    }

    if (escondido) {
        return (
            <button onClick={() => setEscondido(false)}>Mostrar Comentarios</button>
        );
    }

    return (
        <>
            <button onClick={() => setEscondido(true)}>Esconder Comentarios</button>
            <div className="comentarios">
                {comentarios.map(comentario => (
                    <div className="comentario" key={comentario.id}>
                        <h4>{comentario.name}</h4>
                        <h5>Autor: {comentario.email}</h5>
                        <p>{comentario.body}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Comentarios;