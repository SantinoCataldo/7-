import React from 'react';
import styles from './InteractiveButtons.module.css';
import { useState } from 'react';

const InteractiveButtons = () => {
    const [eventLog, setEventLog] = useState('');

    // Funciones para cada botón
    const handleButton1Click = () => {
        setEventLog('Botón 1: Click');
    };

    const handleButton2DoubleClick = () => {
        setEventLog('Botón 2: Doble click');
    };

    const handleButton3MouseEnter = () => {
        setEventLog('Botón 3: Mouse entra');
    };

    const handleButton4MouseLeave = () => {
        setEventLog('Botón 4: Mouse sale');
    };

    const handleButton5MouseMove = () => {
        setEventLog('Botón 5: Moviendo el mouse');
    };

    const handleButton6KeyPress = (event) => {
        if (event.key.toLowerCase() === 'e') {
            setEventLog(`Botón 6: Se presionó la tecla 'E'`);
        }
    };

    return (
        <section className={styles.buttons_container}>
            <div className={styles.buttons}>
                <button
                    onClick={handleButton1Click}
                    className={styles.interactive_button}
                >
                    Botón 1 (Click)
                </button>

                <button
                    onDoubleClick={handleButton2DoubleClick}
                    className={styles.interactive_button}
                >
                    Botón 2 (Doble Click)
                </button>

                <button
                    onMouseEnter={handleButton3MouseEnter}
                    className={styles.interactive_button}
                >
                    Botón 3 (Mouse entra)
                </button>

                <button
                    onMouseLeave={handleButton4MouseLeave}
                    className={styles.interactive_button}
                >
                    Botón 4 (Mouse sale)
                </button>

                <button
                    onMouseMove={handleButton5MouseMove}
                    className={styles.interactive_button}
                >
                    Botón 5 (Moviendo el mouse)
                </button>

                <button
                    onKeyPress={handleButton6KeyPress}
                    className={styles.interactive_button}
                >
                    Botón 6 (tecla 'E')
                </button>
                <p>{eventLog}</p>
            </div>
        </section>
    );
};

export default InteractiveButtons;
