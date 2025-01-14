import React, { useState } from 'react';
import './style/AgregarFavorito.css';

const AgregarFavorito = ({ onAgregar }) => {
    const [favorito, setFavorito] = useState('');

    const manejarAgregar = () => {
        if (favorito.trim()) {
            onAgregar(favorito); // Envía el texto ingresado al componente padre
            setFavorito('');    // Limpia el input después de agregar
        }
    };
    
    const manejarKeyDown = (e) => {
        if (e.key === 'Enter') {
            manejarAgregar();            
        }
    };

    return (
        <div>
            <input
                type="text"
                value={favorito}
                onChange={(e) => setFavorito(e.target.value)}
                placeholder="Agrega un favorito"
                onKeyDown={manejarKeyDown}   // Detecta la tecla ENTER
            />
            <button onClick={manejarAgregar}>+</button>
        </div>
    );
};

export default AgregarFavorito;
