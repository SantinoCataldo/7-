SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE TABLE `compania_aerea` (
  `id_compania` int(11) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `tipo_avion` (
  `id_tipo_avion` int(11) NOT NULL,
  `modelo` varchar(50) DEFAULT NULL,
  `capacidad` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `ciudad` (
  `id_ciudad` int(11) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `pais` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `aeropuerto` (
  `id_aeropuerto` int(11) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `id_ciudad` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `vuelo` (
  `id_vuelo` int(11) NOT NULL,
  `id_compania` int(11) DEFAULT NULL,
  `id_tipo_avion` int(11) DEFAULT NULL,
  `tipo` enum('Salida','Llegada') DEFAULT NULL,
  `id_aeropuerto_origen` int(11) DEFAULT NULL,
  `id_aeropuerto_destino` int(11) DEFAULT NULL,
  `fecha` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `vuelo_salida` (
  `id_vuelo` int(11) NOT NULL,
  `hora_salida` time DEFAULT NULL,
  `puerta_embarque` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `vuelo_llegada` (
  `id_vuelo` int(11) NOT NULL,
  `hora_aterrizaje` time DEFAULT NULL,
  `puerta_salida` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `pasajero` (
  `id_pasajero` int(11) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `apellidos` varchar(100) DEFAULT NULL,
  `edad` int(11) DEFAULT NULL,
  `id_vuelo` int(11) DEFAULT NULL,
  `numero_asiento` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

ALTER TABLE `compania_aerea`
  ADD PRIMARY KEY (`id_compania`);

ALTER TABLE `tipo_avion`
  ADD PRIMARY KEY (`id_tipo_avion`);

ALTER TABLE `ciudad`
  ADD PRIMARY KEY (`id_ciudad`);

ALTER TABLE `aeropuerto`
  ADD PRIMARY KEY (`id_aeropuerto`),
  ADD KEY `id_ciudad` (`id_ciudad`);

ALTER TABLE `vuelo`
  ADD PRIMARY KEY (`id_vuelo`),
  ADD KEY `id_compania` (`id_compania`),
  ADD KEY `id_tipo_avion` (`id_tipo_avion`),
  ADD KEY `id_aeropuerto_origen` (`id_aeropuerto_origen`),
  ADD KEY `id_aeropuerto_destino` (`id_aeropuerto_destino`);

ALTER TABLE `vuelo_salida`
  ADD PRIMARY KEY (`id_vuelo`);

ALTER TABLE `vuelo_llegada`
  ADD PRIMARY KEY (`id_vuelo`);

ALTER TABLE `pasajero`
  ADD PRIMARY KEY (`id_pasajero`),
  ADD KEY `id_vuelo` (`id_vuelo`);

ALTER TABLE `aeropuerto`
  ADD CONSTRAINT `aeropuerto_ibfk_1` FOREIGN KEY (`id_ciudad`) REFERENCES `ciudad` (`id_ciudad`);
ALTER TABLE `vuelo`
  ADD CONSTRAINT `vuelo_ibfk_1` FOREIGN KEY (`id_compania`) REFERENCES `compania_aerea` (`id_compania`),
  ADD CONSTRAINT `vuelo_ibfk_2` FOREIGN KEY (`id_tipo_avion`) REFERENCES `tipo_avion` (`id_tipo_avion`),
  ADD CONSTRAINT `vuelo_ibfk_3` FOREIGN KEY (`id_aeropuerto_origen`) REFERENCES `aeropuerto` (`id_aeropuerto`),
  ADD CONSTRAINT `vuelo_ibfk_4` FOREIGN KEY (`id_aeropuerto_destino`) REFERENCES `aeropuerto` (`id_aeropuerto`);
ALTER TABLE `vuelo_salida`
  ADD CONSTRAINT `vuelo_salida_ibfk_1` FOREIGN KEY (`id_vuelo`) REFERENCES `vuelo` (`id_vuelo`);
ALTER TABLE `vuelo_llegada`
  ADD CONSTRAINT `vuelo_llegada_ibfk_1` FOREIGN KEY (`id_vuelo`) REFERENCES `vuelo` (`id_vuelo`);
ALTER TABLE `pasajero`
  ADD CONSTRAINT `pasajero_ibfk_1` FOREIGN KEY (`id_vuelo`) REFERENCES `vuelo` (`id_vuelo`);
COMMIT;
