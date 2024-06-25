SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE TABLE `cliente` (
  `id_cliente` int(11) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `datos_bancarios` varchar(200) DEFAULT NULL,
  `credito` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `compra` (
  `id_compra` int(11) NOT NULL,
  `fecha` date DEFAULT NULL,
  `id_cliente` int(11) DEFAULT NULL,
  `fecha_pago` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `detalle_compra` (
  `id_detalle` int(11) NOT NULL,
  `id_compra` int(11) DEFAULT NULL,
  `codigo_medicamento` int(11) DEFAULT NULL,
  `unidades` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `familia` (
  `id_familia` int(11) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `laboratorio` (
  `codigo_laboratorio` int(11) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  `direccion` varchar(200) DEFAULT NULL,
  `fax` varchar(20) DEFAULT NULL,
  `contacto` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `medicamento` (
  `codigo_medicamento` int(11) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `tipo` varchar(50) DEFAULT NULL,
  `unidades_stock` int(11) DEFAULT NULL,
  `unidades_vendidas` int(11) DEFAULT NULL,
  `precio` decimal(10,2) DEFAULT NULL,
  `receta_requerida` tinyint(1) DEFAULT NULL,
  `codigo_laboratorio` int(11) DEFAULT NULL,
  `id_familia` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

ALTER TABLE `cliente`
  ADD PRIMARY KEY (`id_cliente`);
ALTER TABLE `compra`
  ADD PRIMARY KEY (`id_compra`),
  ADD KEY `id_cliente` (`id_cliente`);

ALTER TABLE `detalle_compra`
  ADD PRIMARY KEY (`id_detalle`),
  ADD KEY `id_compra` (`id_compra`),
  ADD KEY `codigo_medicamento` (`codigo_medicamento`);

ALTER TABLE `familia`
  ADD PRIMARY KEY (`id_familia`);

ALTER TABLE `laboratorio`
  ADD PRIMARY KEY (`codigo_laboratorio`);

ALTER TABLE `medicamento`
  ADD PRIMARY KEY (`codigo_medicamento`),
  ADD KEY `codigo_laboratorio` (`codigo_laboratorio`),
  ADD KEY `id_familia` (`id_familia`);

ALTER TABLE `compra`
  ADD CONSTRAINT `compra_ibfk_1` FOREIGN KEY (`id_cliente`) REFERENCES `cliente` (`id_cliente`);

ALTER TABLE `detalle_compra`
  ADD CONSTRAINT `detalle_compra_ibfk_1` FOREIGN KEY (`id_compra`) REFERENCES `compra` (`id_compra`),
  ADD CONSTRAINT `detalle_compra_ibfk_2` FOREIGN KEY (`codigo_medicamento`) REFERENCES `medicamento` (`codigo_medicamento`);

ALTER TABLE `medicamento`
  ADD CONSTRAINT `medicamento_ibfk_1` FOREIGN KEY (`codigo_laboratorio`) REFERENCES `laboratorio` (`codigo_laboratorio`),
  ADD CONSTRAINT `medicamento_ibfk_2` FOREIGN KEY (`id_familia`) REFERENCES `familia` (`id_familia`);
COMMIT;
