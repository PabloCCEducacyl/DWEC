import { useEffect, useState } from 'react'
import './Objetos.css'

interface Objeto {
  _id: number;
  name: string;
  value: string;
}

async function login(currentToken: string) {
  if (currentToken) return currentToken;
  if(localStorage.getItem('token')) return localStorage.getItem('token')

  const url = "http://localhost:3000/login";
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "admin",
        password: "adminpassword",
      }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data.token;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

function Objetos() {
  const [token, setToken] = useState<string>('');
  const [objetos, setObjetos] = useState<Objeto[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authToken = await login(token);
        setToken(authToken);
        localStorage.setItem('token', authToken);
        await fetchObjetos(authToken);
      } catch (error) {
        console.error("Error inicial:", error);
      }
    }
    
    fetchData();
  }, [token])

  async function fetchObjetos(token : string) {
    try {
      const response = await fetch("http://localhost:3000/object", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}` // Usar Bearer token
        }
      });

      if (!response.ok) {
        throw new Error('Error en la respuesta');
      }

      const result = await response.json();
      setObjetos(result);
    } catch (error) {
      console.error("Error fetching objetos:", error);
    }
  }

  return (
    <>
      <h1>Objetos</h1>
      <div className="posts">
        {objetos.map(objeto => (
          <div className="post" key={objeto._id}>
            <h2>{objeto.name}</h2>
            <p>{objeto.value}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Objetos