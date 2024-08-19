import React, { useState } from 'react';
import styles from './Contador.module.css';

const Contador = () => {
    const [contador, setContador] = useState(0);

    const incremento = () => {
        setContador(contador + 1);
    };

    const decremento = () => {
        setContador(contador - 1);
    };

    return (
        <div className={styles.contador}>
            <h2>Contador</h2>
            <h2>{contador}</h2>
            <div>
                <button onClick={decremento}>-</button>
                <button onClick={incremento}>+</button>
            </div>
        </div>
    );
};

export default Contador;
