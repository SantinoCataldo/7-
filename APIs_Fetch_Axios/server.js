// Importar el módulo Express
const express = require('express');

// Importar el módulo Path para manejar rutas de archivos
const path = require('path');

// Crear una instancia de la aplicación Express
const app = express();

// El servidor se va a ejecutar en el puerto 3000
const PORT = 3000;

// Palabras para el juego
const palabras = [
    'Guiso', 'Milanesa', 'Pure', 'Ratatouille', 'Ensalada', 'Maradona',
    'Empanadas', 'Asado', 'Pizza', 'Tarta', 'Hamburguesa', 'Choripan', 'Locro',
    'Polenta', 'Canelones', 'Tallarines', 'Sorrentinos', 'Tortilla'
];

// Pasar archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Variable para almacenar la última palabra enviada
let ultimaPalabra = '';

// API para obtener una palabra aleatoria
app.get('/api/palabra', (req, res) => {
    // Generar una palabra aleatoria diferente a la última enviada
    let palabraRandom;
    do {
        palabraRandom = palabras[Math.floor(Math.random() * palabras.length)];
    } while (palabraRandom === ultimaPalabra); // Repetir hasta que se genere una palabra diferente
    ultimaPalabra = palabraRandom; // Actualizar la última palabra enviada
    res.json({ palabra: palabraRandom }); // Enviar la palabra aleatoria como respuesta JSON
});

// Iniciar el servidor y escuchar peticiones en el puerto especificado
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});