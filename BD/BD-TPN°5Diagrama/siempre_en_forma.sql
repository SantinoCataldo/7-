SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE TABLE `aparato` (
  `CodigoAparato` int(11) NOT NULL,
  `Descripcion` varchar(200) DEFAULT NULL,
  `EstadoConservacion` varchar(50) DEFAULT NULL,
  `NumeroSala` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `aparato` (`CodigoAparato`, `Descripcion`, `EstadoConservacion`, `NumeroSala`) VALUES
(1, 'Cinta de correr', 'Buen estado', 1),
(2, 'Bicicleta estática', 'Necesita mantenimiento', 1),
(3, 'Banco de pesas', 'Excelente estado', 2);

CREATE TABLE `clase` (
  `CodigoClase` int(11) NOT NULL,
  `Descripcion` varchar(200) DEFAULT NULL,
  `DiaHora` datetime DEFAULT NULL,
  `NumeroSala` int(11) DEFAULT NULL,
  `DNIMonitor` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `clase` (`CodigoClase`, `Descripcion`, `DiaHora`, `NumeroSala`, `DNIMonitor`) VALUES
(1, 'Spinning', '2023-06-01 09:00:00', 1, '12345678A'),
(2, 'Yoga', '2023-06-02 18:30:00', 3, '87654321B'),
(3, 'Zumba', '2023-06-03 11:00:00', 3, '45678912C');

CREATE TABLE `monitor` (
  `DNI` varchar(20) NOT NULL,
  `Nombre` varchar(100) DEFAULT NULL,
  `Telefono` varchar(20) DEFAULT NULL,
  `Titulacion` varchar(100) DEFAULT NULL,
  `ExperienciaProfesional` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `monitor` (`DNI`, `Nombre`, `Telefono`, `Titulacion`, `ExperienciaProfesional`) VALUES
('12345678A', 'Juan Pérez', '123456789', 'Licenciado en Educación Física', '5 años'),
('45678912C', 'Carlos Gómez', '456789123', 'Diplomado en Fitness', '3 años'),
('87654321B', 'María López', '987654321', 'Maestría en Entrenamiento Deportivo', '8 años');

CREATE TABLE `pistasquash` (
  `NumeroPista` int(11) NOT NULL,
  `Ubicacion` varchar(100) DEFAULT NULL,
  `Estado` varchar(50) DEFAULT NULL,
  `MetrosCuadrados` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `pistasquash` (`NumeroPista`, `Ubicacion`, `Estado`, `MetrosCuadrados`) VALUES
(4, 'Planta Baja', 'Disponible', 50.00),
(5, 'Planta Baja', 'En mantenimiento', 50.00),
(6, 'Primer Piso', 'Disponible', 60.00);

CREATE TABLE `reservapistasquash` (
  `NumeroSocio` int(11) NOT NULL,
  `NumeroPista` int(11) NOT NULL,
  `Fecha` date NOT NULL,
  `Hora` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `reservapistasquash` (`NumeroSocio`, `NumeroPista`, `Fecha`, `Hora`) VALUES
(1, 4, '2023-06-05', '10:00:00'),
(2, 4, '2023-06-05', '12:30:00'),
(3, 6, '2023-06-06', '15:00:00');

CREATE TABLE `sala` (
  `NumeroSala` int(11) NOT NULL,
  `MetrosCuadrados` decimal(10,2) DEFAULT NULL,
  `Ubicacion` varchar(100) DEFAULT NULL,
  `TipoSala` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `sala` (`NumeroSala`, `MetrosCuadrados`, `Ubicacion`, `TipoSala`) VALUES
(1, 100.50, 'Planta Baja', 'Cardio'),
(2, 80.00, 'Primer Piso', 'Muscular'),
(3, 120.00, 'Segundo Piso', 'General'),
(4, 55.00, 'Planta Baja', 'Pista de Squash'),
(5, 55.00, 'Planta Baja', 'Pista de Squash'),
(6, 60.00, 'Primer Piso', 'Pista de Squash');

CREATE TABLE `socio` (
  `NumeroSocio` int(11) NOT NULL,
  `Nombre` varchar(100) DEFAULT NULL,
  `Direccion` varchar(200) DEFAULT NULL,
  `Telefono` varchar(20) DEFAULT NULL,
  `Profesion` varchar(100) DEFAULT NULL,
  `DatosBancarios` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `socio` (`NumeroSocio`, `Nombre`, `Direccion`, `Telefono`, `Profesion`, `DatosBancarios`) VALUES
(1, 'Ana Torres', 'Calle Principal 123', '111222333', 'Abogada', 'ES1234567890123456789012'),
(2, 'Pedro Ramírez', 'Avenida Central 456', '444555666', 'Ingeniero', 'ES9876543210987654321098'),
(3, 'Laura Sánchez', 'Plaza Mayor 789', '777888999', 'Doctora', 'ES5432109876543210987654');

CREATE TABLE `socioclase` (
  `NumeroSocio` int(11) NOT NULL,
  `CodigoClase` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `socioclase` (`NumeroSocio`, `CodigoClase`) VALUES
(1, 1),
(1, 2),
(2, 3);

ALTER TABLE `aparato`
  ADD PRIMARY KEY (`CodigoAparato`),
  ADD KEY `NumeroSala` (`NumeroSala`);

ALTER TABLE `clase`
  ADD PRIMARY KEY (`CodigoClase`),
  ADD KEY `NumeroSala` (`NumeroSala`),
  ADD KEY `DNIMonitor` (`DNIMonitor`);

ALTER TABLE `monitor`
  ADD PRIMARY KEY (`DNI`);

ALTER TABLE `pistasquash`
  ADD PRIMARY KEY (`NumeroPista`);

ALTER TABLE `reservapistasquash`
  ADD PRIMARY KEY (`NumeroSocio`,`NumeroPista`,`Fecha`,`Hora`),
  ADD KEY `NumeroPista` (`NumeroPista`);

ALTER TABLE `sala`
  ADD PRIMARY KEY (`NumeroSala`);

ALTER TABLE `socio`
  ADD PRIMARY KEY (`NumeroSocio`);

ALTER TABLE `socioclase`
  ADD PRIMARY KEY (`NumeroSocio`,`CodigoClase`),
  ADD KEY `CodigoClase` (`CodigoClase`);

ALTER TABLE `aparato`
  ADD CONSTRAINT `aparato_ibfk_1` FOREIGN KEY (`NumeroSala`) REFERENCES `sala` (`NumeroSala`);

ALTER TABLE `clase`
  ADD CONSTRAINT `clase_ibfk_1` FOREIGN KEY (`NumeroSala`) REFERENCES `sala` (`NumeroSala`),
  ADD CONSTRAINT `clase_ibfk_2` FOREIGN KEY (`DNIMonitor`) REFERENCES `monitor` (`DNI`);

ALTER TABLE `pistasquash`
  ADD CONSTRAINT `pistasquash_ibfk_1` FOREIGN KEY (`NumeroPista`) REFERENCES `sala` (`NumeroSala`);

ALTER TABLE `reservapistasquash`
  ADD CONSTRAINT `reservapistasquash_ibfk_1` FOREIGN KEY (`NumeroSocio`) REFERENCES `socio` (`NumeroSocio`),
  ADD CONSTRAINT `reservapistasquash_ibfk_2` FOREIGN KEY (`NumeroPista`) REFERENCES `pistasquash` (`NumeroPista`);

ALTER TABLE `socioclase`
  ADD CONSTRAINT `socioclase_ibfk_1` FOREIGN KEY (`NumeroSocio`) REFERENCES `socio` (`NumeroSocio`),
  ADD CONSTRAINT `socioclase_ibfk_2` FOREIGN KEY (`CodigoClase`) REFERENCES `clase` (`CodigoClase`);
COMMIT;
