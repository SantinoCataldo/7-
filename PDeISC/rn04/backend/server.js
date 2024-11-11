// server.js
const express = require('express');
const connection = require('./db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
const SECRET_KEY = 'CwpOZGNFDf73DLGluDRp9ms4NgPr6A8Q';  

app.use(express.json());
app.use(cors());

// Endpoint de registro de usuario
app.post('/register', async (req, res) => {
    const { name, email, password, tipo_usuario } = req.body;
    
    // Verificar si el email ya está registrado
    connection.query('SELECT * FROM usuarios WHERE email = ?', [email], async (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length > 0) return res.status(400).json({ error: 'El email ya está registrado' });

        // Encriptar la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        // Guardar el nuevo usuario con el nombre
        const query = 'INSERT INTO usuarios (nombre, email, contraseña, tipo_usuario) VALUES (?, ?, ?, ?)';
        connection.query(query, [name, email, hashedPassword, tipo_usuario], (err) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ message: 'Usuario registrado exitosamente' });
        });
    });
});

// Endpoint de inicio de sesión
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    connection.query('SELECT * FROM usuarios WHERE email = ?', [email], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(401).json({ error: 'Usuario no encontrado' });

        const user = results[0];

        // Verificar la contraseña
        bcrypt.compare(password, user.contraseña, (err, isMatch) => {
            if (err || !isMatch) return res.status(401).json({ error: 'Contraseña incorrecta' });

            // Crear token JWT
            const token = jwt.sign({ id: user.id, tipo_usuario: user.tipo_usuario }, SECRET_KEY, {
                expiresIn: '1h',
            });

            // Responder con el token y los datos del usuario (incluyendo el nombre)
            res.json({
                token,
                user: {
                    email: user.email,
                    nombre: user.nombre, // Asegúrate de que este campo esté presente en tu base de datos
                    tipo_usuario: user.tipo_usuario, // Puedes agregar más campos si es necesario
                },
            });

            console.log(user);  // Para ver el usuario completo en los logs
        });
    });
});



// Ruta para cerrar sesión (ejemplo básico)
app.post('/logout', (req, res) => {
    res.json({ message: 'Sesión cerrada con éxito' });
});

// Obtener equipos
app.get('/equipos', (req, res) => {
    connection.query('SELECT * FROM equipos', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

// Obtener jugadores

app.get('/jugadores', (req, res) => {
    const query = `
        SELECT j.*, e.nombre AS equipo_nombre
        FROM jugadores j
        JOIN equipos e ON j.equipo_id = e.id
    `;
    connection.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});


// Obtener estadísticas de jugadores
app.get('/estadisticas_jugadores', (req, res) => {
    connection.query('SELECT * FROM estadisticas_jugadores', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

// Obtener partidos
app.get('/partidos', (req, res) => {
    const query = `
      SELECT 
        p.id, 
        p.equipo_local_id, 
        el.nombre AS equipo_local_nombre, 
        p.equipo_visitante_id, 
        ev.nombre AS equipo_visitante_nombre, 
        p.goles_local, 
        p.goles_visitante, 
        p.fecha, 
        p.lugar
      FROM partidos p
      JOIN equipos el ON p.equipo_local_id = el.id
      JOIN equipos ev ON p.equipo_visitante_id = ev.id
    `;

    connection.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

app.get('/:nombreEquipo', (req, res) => {
    const { nombreEquipo } = req.params;

    // Consulta para obtener la información del equipo por nombre
    const equipoQuery = `
      SELECT * FROM equipos WHERE nombre = ?;
    `;

    // Consulta para obtener los jugadores del equipo
    const jugadoresQuery = `
      SELECT * FROM jugadores WHERE equipo_id = (SELECT id FROM equipos WHERE nombre = ?);
    `;

    // Consulta para obtener los partidos que jugó el equipo (como local o visitante)
    const partidosQuery = `
      SELECT 
        p.id, 
        el.nombre AS equipo_local_nombre, 
        ev.nombre AS equipo_visitante_nombre, 
        p.goles_local, 
        p.goles_visitante, 
        p.fecha, 
        p.lugar
      FROM partidos p
      JOIN equipos el ON p.equipo_local_id = el.id
      JOIN equipos ev ON p.equipo_visitante_id = ev.id
      WHERE el.nombre = ? OR ev.nombre = ?;
    `;

    // Ejecutar las consultas en paralelo
    connection.query(equipoQuery, [nombreEquipo], (err, equipoResults) => {
        if (err) return res.status(500).json({ error: err.message });
        if (equipoResults.length === 0) return res.status(404).json({ error: 'Equipo no encontrado' });

        connection.query(jugadoresQuery, [nombreEquipo], (err, jugadoresResults) => {
            if (err) return res.status(500).json({ error: err.message });

            connection.query(partidosQuery, [nombreEquipo, nombreEquipo], (err, partidosResults) => {
                if (err) return res.status(500).json({ error: err.message });

                // Responder con toda la información
                res.json({
                    equipo: equipoResults[0],
                    jugadores: jugadoresResults,
                    partidos: partidosResults,
                });
            });
        });
    });
});


app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
