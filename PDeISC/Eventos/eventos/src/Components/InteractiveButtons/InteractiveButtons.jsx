import React from 'react';
import styles from './InteractiveButtons.module.css';

const InteractiveButtons = () => {
    const handleClick = (index) => {
        alert(`Botón ${index + 1} fue cliqueado una vez.`);
    };

    const handleDoubleClick = (index) => {
        alert(`Botón ${index + 1} fue doble cliqueado.`);
    };

    const buttons = [1, 2, 3, 4, 5]; // Puedes agregar más botones si lo deseas

    return (
        <section className={styles.buttons_container}>
            <div className={styles.buttons}>
                {buttons.map((button, index) => (
                    <button
                        key={index}
                        onClick={() => handleClick(index)}
                        onDoubleClick={() => handleDoubleClick(index)}
                        className={styles.interactive_button}
                    >
                        Botón {button}
                    </button>
                ))}
            </div>
        </section>
    );
};

export default InteractiveButtons;
