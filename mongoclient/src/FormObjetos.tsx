import { useState } from 'react';

function FormObjetos() {

    const [formData, setFormData] = useState({ name: '', value: '' });

    const handleChange = (e : any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e : any) => {
        e.preventDefault(); // Prevent the default form submission
        const token = localStorage.getItem('token');

        if (!token) {
            console.error("Token not found");
            return;
        }

        const data = JSON.stringify({
            name: formData.name,
            value: formData.value,
        });

        try {
            const response = await fetch("http://localhost:3000/object/", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: data,
            });

            if (!response.ok) {
                throw new Error('Error al añadir objeto' + response.statusText);
            }

        } catch (error) {
            console.error("Error fetching objetos:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} /></label>
            <label htmlFor="value">Value:
                <input type="text" name="value" value={formData.value} onChange={handleChange} /></label>
            <button type="submit">Add</button>
        </form>
    );
}

export default FormObjetos;
