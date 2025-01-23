import './Hola.css';

export function Hola({ mensaje = "mundo" }) {
    return (
        <h1 className='hola'>
            Hola {mensaje}
        </h1>
    );
}