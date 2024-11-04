-- Crear tabla equipos
CREATE TABLE equipos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    escudo VARCHAR(255),
    estadisticas JSON
);

-- Crear tabla jugadores
CREATE TABLE jugadores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    edad INT,
    posicion VARCHAR(50),
    numero_casaca INT,
    equipo_id INT,
    FOREIGN KEY (equipo_id) REFERENCES equipos(id)
);

-- Crear tabla partidos
CREATE TABLE partidos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    equipo_local_id INT,
    equipo_visitante_id INT,
    fecha DATETIME,
    lugar VARCHAR(255),
    resultado JSON,
    FOREIGN KEY (equipo_local_id) REFERENCES equipos(id),
    FOREIGN KEY (equipo_visitante_id) REFERENCES equipos(id)
);

-- Crear tabla estadísticas
CREATE TABLE estadisticas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    jugador_id INT,
    goles INT DEFAULT 0,
    tarjetas_amarillas INT DEFAULT 0,
    tarjetas_rojas INT DEFAULT 0,
    FOREIGN KEY (jugador_id) REFERENCES jugadores(id)
);

-- Crear tabla usuarios
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    contraseña VARCHAR(255) NOT NULL,
    tipo_usuario ENUM('Administrador', 'Jugador', 'Seguidor') NOT NULL,
    oauth_id VARCHAR(255)
);
