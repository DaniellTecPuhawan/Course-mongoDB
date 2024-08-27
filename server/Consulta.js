// src/components/Consulta.js
import React, { useState } from 'react';

const Consulta = () => {
    const [nombre, setNombre] = useState('');
    const [resultado, setResultado] = useState(null);

    const buscarUsuario = async () => {
        try {
            const response = await fetch(`/consultar/${nombre}`);
            const data = await response.json();
            setResultado(data);
        } catch (error) {
            console.error('Error:', error);
            setResultado(null);
        }
    };

    return (
        <div className="container">
            <h1>Consultar Usuario</h1>
            <input 
                type="text" 
                placeholder="Nombre del usuario" 
                value={nombre} 
                onChange={e => setNombre(e.target.value)} 
            />
            <button onClick={buscarUsuario}>Buscar</button>
            <div className="result" id="resultado">
                {resultado ? (
                    <>
                        <p><strong>Nombre:</strong> {resultado.nombre}</p>
                        {/* Renderiza el resto de los datos */}
                    </>
                ) : (
                    <p>Usuario no encontrado</p>
                )}
            </div>
        </div>
    );
};

export default Consulta;
