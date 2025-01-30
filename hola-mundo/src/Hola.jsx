import { useEffect, useState } from 'react';
import './Hola.css';

export function Hola() {
    const [bromomento, setMomento] = useState(String)

    useEffect(() => {
        async function granBromomento() {
            const response = await fetch('http://geolocation-db.com/json/');
            const data = await response.json();
            setMomento(data.IPv4)
        }
        granBromomento()
    })
    return (
        <h1 className='hola'>
            Hola {bromomento}
        </h1>
    );
}