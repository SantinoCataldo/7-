SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE TABLE `cliente_vip` (
  `dni` varchar(15) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `direccion` varchar(200) DEFAULT NULL,
  `telefono` varchar(15) DEFAULT NULL,
  `fecha_incorporacion` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `detalle_pedido` (
  `id_detalle` int(11) NOT NULL,
  `numero_pedido` int(11) DEFAULT NULL,
  `codigo_producto` varchar(20) DEFAULT NULL,
  `unidades` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `empleado` (
  `dni` varchar(15) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `telefono` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `empleado_vivero` (
  `dni` varchar(15) NOT NULL,
  `codigo_tienda` varchar(10) NOT NULL,
  `fecha_inicio` date NOT NULL,
  `fecha_fin` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `empleado_zona` (
  `id_asignacion` int(11) NOT NULL,
  `dni` varchar(15) DEFAULT NULL,
  `id_zona` int(11) DEFAULT NULL,
  `fecha_inicio` date DEFAULT NULL,
  `fecha_fin` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `pedido` (
  `numero_pedido` int(11) NOT NULL,
  `fecha` date DEFAULT NULL,
  `descuento` decimal(5,2) DEFAULT NULL,
  `precio_portes` decimal(10,2) DEFAULT NULL,
  `dni_cliente` varchar(15) DEFAULT NULL,
  `dni_empleado` varchar(15) DEFAULT NULL,
  `codigo_tienda` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `producto` (
  `codigo_producto` varchar(20) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `precio` decimal(10,2) DEFAULT NULL,
  `id_tipo` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `stock` (
  `id_stock` int(11) NOT NULL,
  `codigo_producto` varchar(20) DEFAULT NULL,
  `codigo_tienda` varchar(10) DEFAULT NULL,
  `id_zona` int(11) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `tipo_producto` (
  `id_tipo` int(11) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `vivero` (
  `codigo_tienda` varchar(10) NOT NULL,
  `telefono` varchar(15) DEFAULT NULL,
  `direccion` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `zona` (
  `id_zona` int(11) NOT NULL,
  `codigo_tienda` varchar(10) DEFAULT NULL,
  `nombre` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

ALTER TABLE `cliente_vip`
  ADD PRIMARY KEY (`dni`);

ALTER TABLE `detalle_pedido`
  ADD PRIMARY KEY (`id_detalle`),
  ADD KEY `numero_pedido` (`numero_pedido`),
  ADD KEY `codigo_producto` (`codigo_producto`);

ALTER TABLE `empleado`
  ADD PRIMARY KEY (`dni`);

ALTER TABLE `empleado_vivero`
  ADD PRIMARY KEY (`dni`,`codigo_tienda`,`fecha_inicio`),
  ADD KEY `codigo_tienda` (`codigo_tienda`);

ALTER TABLE `empleado_zona`
  ADD PRIMARY KEY (`id_asignacion`),
  ADD KEY `dni` (`dni`),
  ADD KEY `id_zona` (`id_zona`);

ALTER TABLE `pedido`
  ADD PRIMARY KEY (`numero_pedido`),
  ADD KEY `dni_cliente` (`dni_cliente`),
  ADD KEY `dni_empleado` (`dni_empleado`),
  ADD KEY `codigo_tienda` (`codigo_tienda`);

ALTER TABLE `producto`
  ADD PRIMARY KEY (`codigo_producto`),
  ADD KEY `id_tipo` (`id_tipo`);

ALTER TABLE `stock`
  ADD PRIMARY KEY (`id_stock`),
  ADD KEY `codigo_producto` (`codigo_producto`),
  ADD KEY `codigo_tienda` (`codigo_tienda`),
  ADD KEY `id_zona` (`id_zona`);

ALTER TABLE `tipo_producto`
  ADD PRIMARY KEY (`id_tipo`);

ALTER TABLE `vivero`
  ADD PRIMARY KEY (`codigo_tienda`);

ALTER TABLE `zona`
  ADD PRIMARY KEY (`id_zona`),
  ADD KEY `codigo_tienda` (`codigo_tienda`);

ALTER TABLE `detalle_pedido`
  MODIFY `id_detalle` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `empleado_zona`
  MODIFY `id_asignacion` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `pedido`
  MODIFY `numero_pedido` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `stock`
  MODIFY `id_stock` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `tipo_producto`
  MODIFY `id_tipo` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `zona`
  MODIFY `id_zona` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `detalle_pedido`
  ADD CONSTRAINT `detalle_pedido_ibfk_1` FOREIGN KEY (`numero_pedido`) REFERENCES `pedido` (`numero_pedido`),
  ADD CONSTRAINT `detalle_pedido_ibfk_2` FOREIGN KEY (`codigo_producto`) REFERENCES `producto` (`codigo_producto`);

ALTER TABLE `empleado_vivero`
  ADD CONSTRAINT `empleado_vivero_ibfk_1` FOREIGN KEY (`dni`) REFERENCES `empleado` (`dni`),
  ADD CONSTRAINT `empleado_vivero_ibfk_2` FOREIGN KEY (`codigo_tienda`) REFERENCES `vivero` (`codigo_tienda`);

ALTER TABLE `empleado_zona`
  ADD CONSTRAINT `empleado_zona_ibfk_1` FOREIGN KEY (`dni`) REFERENCES `empleado` (`dni`),
  ADD CONSTRAINT `empleado_zona_ibfk_2` FOREIGN KEY (`id_zona`) REFERENCES `zona` (`id_zona`);

ALTER TABLE `pedido`
  ADD CONSTRAINT `pedido_ibfk_1` FOREIGN KEY (`dni_cliente`) REFERENCES `cliente_vip` (`dni`),
  ADD CONSTRAINT `pedido_ibfk_2` FOREIGN KEY (`dni_empleado`) REFERENCES `empleado` (`dni`),
  ADD CONSTRAINT `pedido_ibfk_3` FOREIGN KEY (`codigo_tienda`) REFERENCES `vivero` (`codigo_tienda`);

ALTER TABLE `producto`
  ADD CONSTRAINT `producto_ibfk_1` FOREIGN KEY (`id_tipo`) REFERENCES `tipo_producto` (`id_tipo`);

ALTER TABLE `stock`
  ADD CONSTRAINT `stock_ibfk_1` FOREIGN KEY (`codigo_producto`) REFERENCES `producto` (`codigo_producto`),
  ADD CONSTRAINT `stock_ibfk_2` FOREIGN KEY (`codigo_tienda`) REFERENCES `vivero` (`codigo_tienda`),
  ADD CONSTRAINT `stock_ibfk_3` FOREIGN KEY (`id_zona`) REFERENCES `zona` (`id_zona`);

ALTER TABLE `zona`
  ADD CONSTRAINT `zona_ibfk_1` FOREIGN KEY (`codigo_tienda`) REFERENCES `vivero` (`codigo_tienda`);
COMMIT;
