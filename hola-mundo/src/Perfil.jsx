import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function Perfil() {
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [userNoEncontrado, setUserNoEncontrado] = useState(false);

    console.log(id); // Should log '1' if the URL is /u/1

    useEffect(() => {
        async function fetchUser(id) {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
                if (!res.ok) {
                    setUserNoEncontrado(true);
                }
                const dataUser = await res.json();
                
                if(!dataUser){
                    setUserNoEncontrado(true);
                    
                }
                setUser(dataUser);
            } catch (error) {
                console.error("Error fetching user:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchUser(id);
    }, [id]);

    if (loading) {
        return <div><img src="/loading.gif" alt="Loading..." /></div>;
    }
    if(userNoEncontrado){
        return (
            <div>
                <h4>Usuario {id} no encontrado</h4>
                <Link to={`/`}>Volver</Link>
            </div>
        )
    }
    return (
        <>
            <div className="user">
                <h1>{user?.name}</h1>
                <h2>{user?.username}</h2>
                <h3>{user?.email}</h3>
                <h3>{user?.phone}</h3>
                <h3>{user?.website}</h3>
        
            </div>
            <Link to={`/`}>Volver</Link>
        </>

    );
}

export default Perfil;