-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-11-2024 a las 04:10:55
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `torneo_futbol`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `equipos`
--

CREATE TABLE `equipos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `color` varchar(50) DEFAULT NULL,
  `puntos` int(11) DEFAULT 0,
  `goles_a_favor` int(11) DEFAULT 0,
  `goles_en_contra` int(11) DEFAULT 0,
  `partidos_jugados` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `equipos`
--

INSERT INTO `equipos` (`id`, `nombre`, `color`, `puntos`, `goles_a_favor`, `goles_en_contra`, `partidos_jugados`) VALUES
(1, 'Equipo Rojo', '#F94144', 8, 7, 7, 5),
(2, 'Equipo Azul', '#277DA1', 4, 8, 11, 5),
(3, 'Equipo Verde', '#43AA8B', 10, 8, 4, 5),
(4, 'Equipo Amarillo', '#F9C74F', 5, 7, 8, 5),
(5, 'Equipo Naranja', '#F3722C', 4, 6, 8, 5),
(6, 'Equipo Violeta', '#B388EB', 9, 9, 7, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estadisticas`
--

CREATE TABLE `estadisticas` (
  `id` int(11) NOT NULL,
  `jugador_id` int(11) DEFAULT NULL,
  `goles` int(11) DEFAULT 0,
  `tarjetas_amarillas` int(11) DEFAULT 0,
  `tarjetas_rojas` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estadisticas_jugadores`
--

CREATE TABLE `estadisticas_jugadores` (
  `id` int(11) NOT NULL,
  `jugador_id` int(11) DEFAULT NULL,
  `goles` int(11) DEFAULT 0,
  `asistencias` int(11) DEFAULT 0,
  `tarjetas_amarillas` int(11) DEFAULT 0,
  `tarjetas_rojas` int(11) DEFAULT 0,
  `partidos_jugados` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `estadisticas_jugadores`
--

INSERT INTO `estadisticas_jugadores` (`id`, `jugador_id`, `goles`, `asistencias`, `tarjetas_amarillas`, `tarjetas_rojas`, `partidos_jugados`) VALUES
(1, 1, 5, 2, 1, 0, 5),
(2, 2, 0, 1, 2, 0, 5),
(3, 3, 2, 3, 0, 0, 5),
(4, 4, 1, 0, 1, 0, 5),
(5, 5, 0, 0, 0, 0, 5),
(6, 6, 4, 1, 0, 0, 5),
(7, 7, 3, 2, 0, 0, 5),
(8, 8, 2, 1, 0, 0, 5),
(9, 9, 0, 2, 1, 0, 5),
(10, 10, 1, 1, 0, 0, 5),
(11, 11, 0, 0, 2, 1, 5),
(12, 12, 3, 0, 1, 0, 5),
(13, 13, 5, 1, 0, 0, 5),
(14, 14, 1, 2, 0, 0, 5),
(15, 15, 2, 0, 0, 1, 5),
(16, 16, 0, 1, 2, 0, 5),
(17, 17, 4, 0, 0, 0, 5),
(18, 18, 1, 3, 1, 0, 5),
(19, 19, 0, 0, 0, 0, 5),
(20, 20, 3, 1, 0, 0, 5),
(21, 21, 2, 0, 0, 0, 5),
(22, 22, 5, 2, 1, 0, 5),
(23, 23, 1, 1, 0, 0, 5),
(24, 24, 0, 0, 2, 1, 5),
(25, 25, 2, 3, 0, 0, 5),
(26, 26, 3, 0, 1, 0, 5),
(27, 27, 4, 1, 0, 0, 5),
(28, 28, 1, 0, 0, 0, 5),
(29, 29, 0, 2, 1, 0, 5),
(30, 30, 2, 1, 0, 0, 5),
(31, 31, 3, 0, 0, 0, 5),
(32, 32, 4, 2, 0, 0, 5),
(33, 33, 0, 1, 1, 0, 5),
(34, 34, 1, 2, 0, 0, 5),
(35, 35, 5, 0, 0, 0, 5),
(36, 36, 2, 3, 0, 0, 5),
(37, 37, 0, 0, 2, 1, 5),
(38, 38, 3, 1, 1, 0, 5),
(39, 39, 4, 0, 0, 0, 5),
(40, 40, 1, 1, 0, 0, 5),
(41, 41, 0, 2, 0, 0, 5),
(42, 42, 2, 1, 0, 0, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `jugadores`
--

CREATE TABLE `jugadores` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `edad` int(11) DEFAULT NULL,
  `posicion` varchar(50) DEFAULT NULL,
  `numero_casaca` int(11) DEFAULT NULL,
  `equipo_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `jugadores`
--

INSERT INTO `jugadores` (`id`, `nombre`, `apellido`, `edad`, `posicion`, `numero_casaca`, `equipo_id`) VALUES
(1, 'Carlos', 'Gómez', 25, 'Delantero', 9, 1),
(2, 'Martín', 'López', 23, 'Defensor', 4, 1),
(3, 'Santiago', 'Pérez', 27, 'Mediocampista', 8, 1),
(4, 'Lucas', 'Díaz', 21, 'Defensor', 5, 1),
(5, 'Mateo', 'Ramírez', 29, 'Arquero', 1, 1),
(6, 'Juan', 'Fernández', 24, 'Delantero', 11, 1),
(7, 'Tomás', 'García', 26, 'Mediocampista', 6, 1),
(8, 'Emiliano', 'Vargas', 22, 'Delantero', 9, 2),
(9, 'Joaquín', 'Mendoza', 28, 'Defensor', 4, 2),
(10, 'Ignacio', 'Rojas', 24, 'Mediocampista', 7, 2),
(11, 'Facundo', 'Martínez', 30, 'Defensor', 3, 2),
(12, 'Leonardo', 'Herrera', 20, 'Arquero', 1, 2),
(13, 'Agustín', 'Castro', 27, 'Delantero', 10, 2),
(14, 'Sebastián', 'Vega', 25, 'Mediocampista', 8, 2),
(15, 'Diego', 'Moreno', 23, 'Delantero', 11, 3),
(16, 'Andrés', 'Ortiz', 29, 'Defensor', 2, 3),
(17, 'Pablo', 'Silva', 26, 'Mediocampista', 6, 3),
(18, 'Francisco', 'Torres', 22, 'Defensor', 5, 3),
(19, 'Gabriel', 'Soto', 24, 'Arquero', 1, 3),
(20, 'Bruno', 'Acuña', 28, 'Delantero', 7, 3),
(21, 'Fernando', 'Benítez', 30, 'Mediocampista', 4, 3),
(22, 'Rodrigo', 'Figueroa', 25, 'Delantero', 10, 4),
(23, 'Julio', 'Álvarez', 23, 'Defensor', 3, 4),
(24, 'Ezequiel', 'Campos', 27, 'Mediocampista', 8, 4),
(25, 'Cristian', 'Navarro', 21, 'Defensor', 5, 4),
(26, 'Gustavo', 'Muñoz', 29, 'Arquero', 1, 4),
(27, 'Maximiliano', 'Sosa', 24, 'Delantero', 11, 4),
(28, 'Nicolás', 'Reyes', 26, 'Mediocampista', 6, 4),
(29, 'Matías', 'Cabrera', 22, 'Delantero', 9, 5),
(30, 'Damián', 'Ponce', 28, 'Defensor', 2, 5),
(31, 'Alejandro', 'Rivas', 24, 'Mediocampista', 7, 5),
(32, 'Ricardo', 'Espinoza', 30, 'Defensor', 3, 5),
(33, 'Jorge', 'Palacios', 20, 'Arquero', 1, 5),
(34, 'Mario', 'Rivera', 27, 'Delantero', 10, 5),
(35, 'Álvaro', 'Romero', 25, 'Mediocampista', 8, 5),
(36, 'Felipe', 'Guzmán', 23, 'Delantero', 11, 6),
(37, 'Ramiro', 'Sandoval', 29, 'Defensor', 4, 6),
(38, 'Raúl', 'Fuentes', 26, 'Mediocampista', 6, 6),
(39, 'Mauricio', 'Escobar', 22, 'Defensor', 5, 6),
(40, 'Luis', 'Montes', 24, 'Arquero', 1, 6),
(41, 'Kevin', 'Serrano', 28, 'Delantero', 7, 6),
(42, 'Ángel', 'Paredes', 30, 'Mediocampista', 4, 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `partidos`
--

CREATE TABLE `partidos` (
  `id` int(11) NOT NULL,
  `equipo_local_id` int(11) DEFAULT NULL,
  `equipo_visitante_id` int(11) DEFAULT NULL,
  `fecha` datetime DEFAULT NULL,
  `lugar` varchar(255) DEFAULT NULL,
  `goles_local` int(11) DEFAULT NULL,
  `goles_visitante` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `partidos`
--

INSERT INTO `partidos` (`id`, `equipo_local_id`, `equipo_visitante_id`, `fecha`, `lugar`, `goles_local`, `goles_visitante`) VALUES
(1, 1, 2, '2024-01-10 16:00:00', 'Estadio Central', 2, 1),
(2, 1, 3, '2024-01-15 18:00:00', 'Estadio Norte', 1, 3),
(3, 1, 4, '2024-01-20 20:00:00', 'Estadio Sur', 0, 0),
(4, 1, 5, '2024-01-25 17:00:00', 'Estadio Este', 3, 2),
(5, 1, 6, '2024-01-30 19:00:00', 'Estadio Oeste', 1, 1),
(6, 2, 3, '2024-02-01 16:00:00', 'Estadio Central', 0, 2),
(7, 2, 4, '2024-02-05 18:00:00', 'Estadio Norte', 2, 0),
(8, 2, 5, '2024-02-10 20:00:00', 'Estadio Sur', 1, 3),
(9, 2, 6, '2024-02-15 17:00:00', 'Estadio Este', 4, 4),
(10, 3, 4, '2024-02-20 19:00:00', 'Estadio Oeste', 2, 2),
(11, 3, 5, '2024-02-25 16:00:00', 'Estadio Central', 1, 0),
(12, 3, 6, '2024-03-01 18:00:00', 'Estadio Norte', 0, 1),
(13, 4, 5, '2024-03-05 20:00:00', 'Estadio Sur', 3, 1),
(14, 4, 6, '2024-03-10 17:00:00', 'Estadio Este', 2, 3),
(15, 5, 6, '2024-03-15 19:00:00', 'Estadio Oeste', 0, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `contraseña` varchar(255) NOT NULL,
  `tipo_usuario` enum('Administrador','Jugador','Seguidor') NOT NULL,
  `oauth_id` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `email`, `contraseña`, `tipo_usuario`, `oauth_id`) VALUES
(9, 'santitto', 'santinocataldo1@gmail.com', '$2b$10$z6j3Q9KKqscF5lwwuBn3N.Pw/nopRLDnhUSmvwzcZ.aqtXlnbC8b6', 'Administrador', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `equipos`
--
ALTER TABLE `equipos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `estadisticas`
--
ALTER TABLE `estadisticas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jugador_id` (`jugador_id`);

--
-- Indices de la tabla `estadisticas_jugadores`
--
ALTER TABLE `estadisticas_jugadores`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jugador_id` (`jugador_id`);

--
-- Indices de la tabla `jugadores`
--
ALTER TABLE `jugadores`
  ADD PRIMARY KEY (`id`),
  ADD KEY `equipo_id` (`equipo_id`);

--
-- Indices de la tabla `partidos`
--
ALTER TABLE `partidos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `equipo_local_id` (`equipo_local_id`),
  ADD KEY `equipo_visitante_id` (`equipo_visitante_id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `equipos`
--
ALTER TABLE `equipos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `estadisticas`
--
ALTER TABLE `estadisticas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `estadisticas_jugadores`
--
ALTER TABLE `estadisticas_jugadores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT de la tabla `jugadores`
--
ALTER TABLE `jugadores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT de la tabla `partidos`
--
ALTER TABLE `partidos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `estadisticas`
--
ALTER TABLE `estadisticas`
  ADD CONSTRAINT `estadisticas_ibfk_1` FOREIGN KEY (`jugador_id`) REFERENCES `jugadores` (`id`);

--
-- Filtros para la tabla `estadisticas_jugadores`
--
ALTER TABLE `estadisticas_jugadores`
  ADD CONSTRAINT `estadisticas_jugadores_ibfk_1` FOREIGN KEY (`jugador_id`) REFERENCES `jugadores` (`id`);

--
-- Filtros para la tabla `jugadores`
--
ALTER TABLE `jugadores`
  ADD CONSTRAINT `jugadores_ibfk_1` FOREIGN KEY (`equipo_id`) REFERENCES `equipos` (`id`);

--
-- Filtros para la tabla `partidos`
--
ALTER TABLE `partidos`
  ADD CONSTRAINT `partidos_ibfk_1` FOREIGN KEY (`equipo_local_id`) REFERENCES `equipos` (`id`),
  ADD CONSTRAINT `partidos_ibfk_2` FOREIGN KEY (`equipo_visitante_id`) REFERENCES `equipos` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
