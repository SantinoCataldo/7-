// db.js
const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

// Configurar conexión con MySQL
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "torneo_futbol",
});

// Conectar a la base de datos
connection.connect((err) => {
    if (err) {
        console.error('Error conectando a la base de datos:', err);
        return;
    }
    console.log('Conexión a MySQL exitosa');
});

module.exports = connection;
