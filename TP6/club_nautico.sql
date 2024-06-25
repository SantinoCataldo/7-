SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE TABLE `barco` (
  `matricula` varchar(20) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `num_amarre` int(11) DEFAULT NULL,
  `cuota_amarre` float DEFAULT NULL,
  `id_socio` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `patron` (
  `id_patron` int(11) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `apellido` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
<
-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `salida`
--

CREATE TABLE `salida` (
  `id_salida` int(11) NOT NULL,
  `fecha_hora` datetime DEFAULT NULL,
  `destino` varchar(100) DEFAULT NULL,
  `matricula_barco` varchar(20) DEFAULT NULL,
  `id_patron` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `socio`
--

CREATE TABLE `socio` (
  `id_socio` int(11) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `apellido` varchar(50) DEFAULT NULL,
  `direccion` varchar(100) DEFAULT NULL,
  `telefono` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

ALTER TABLE `barco`
  ADD PRIMARY KEY (`matricula`),
  ADD KEY `id_socio` (`id_socio`);

ALTER TABLE `patron`
  ADD PRIMARY KEY (`id_patron`);

ALTER TABLE `salida`
  ADD PRIMARY KEY (`id_salida`),
  ADD KEY `matricula_barco` (`matricula_barco`),
  ADD KEY `id_patron` (`id_patron`);

ALTER TABLE `socio`
  ADD PRIMARY KEY (`id_socio`);

ALTER TABLE `barco`
  ADD CONSTRAINT `barco_ibfk_1` FOREIGN KEY (`id_socio`) REFERENCES `socio` (`id_socio`);

ALTER TABLE `salida`
  ADD CONSTRAINT `salida_ibfk_1` FOREIGN KEY (`matricula_barco`) REFERENCES `barco` (`matricula`),
  ADD CONSTRAINT `salida_ibfk_2` FOREIGN KEY (`id_patron`) REFERENCES `patron` (`id_patron`);
COMMIT;