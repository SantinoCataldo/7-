import React, { useState } from 'react';
import styles from './Formulario.module.css';

const Formulario = () => {
    const [nombre, setNombre] = useState('');
    const [mensaje, setMensaje] = useState('');

    const manejarCambio = (e) => {
        setNombre(e.target.value);
    };

    const manejarEnvio = (e) => {
        e.preventDefault();
        setMensaje(`Buenas ${nombre}`);
        setNombre('');
    };

    return (
        <div className={styles.formulario}>
            <form onSubmit={manejarEnvio}>
                <p>Nombre:</p>
                <input
                    type="text"
                    value={nombre}
                    onChange={manejarCambio}
                    placeholder="Ingresa tu nombre"
                />
                <button type="submit">Enviar</button>
            </form>
            {mensaje && <h2>{mensaje}</h2>}
        </div>
    );
};

export default Formulario;
