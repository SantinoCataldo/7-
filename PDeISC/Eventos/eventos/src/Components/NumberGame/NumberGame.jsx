import React, { useState } from 'react';
import styles from './NumberGame.module.css';

const NumberGame = () => {
    const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
    const [userGuess, setUserGuess] = useState('');
    const [feedback, setFeedback] = useState('');
    const [attempts, setAttempts] = useState(0);

    function generateRandomNumber() {
        return Math.floor(Math.random() * 100) + 1; // Genera un número aleatorio entre 1 y 100
    }

    const handleInputChange = (event) => {
        setUserGuess(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const guess = parseInt(userGuess, 10);
        setAttempts(attempts + 1);

        if (guess < randomNumber) {
            setFeedback('Más alto');
        } else if (guess > randomNumber) {
            setFeedback('Más bajo');
        } else {
            setFeedback(`¡Correcto! Adivinaste el número en ${attempts + 1} intentos.`);
        }
    };

    const handleRestart = () => {
        setRandomNumber(generateRandomNumber());
        setUserGuess('');
        setFeedback('');
        setAttempts(0);
    };

    return (
        <section className={styles.game_container}>
            <div className={styles.game}>
                <h2>Adivina el Número</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="number"
                        value={userGuess}
                        onChange={handleInputChange}
                        placeholder="Introduce un número"
                        min="1"
                        max="100"
                        required
                    />
                    <button type="submit">Adivinar</button>
                </form>
                {feedback && <p>{feedback}</p>}
                {feedback.includes('Correcto') && (
                    <button onClick={handleRestart}>Reiniciar Juego</button>
                )}
            </div>
        </section>
    );
};

export default NumberGame;
