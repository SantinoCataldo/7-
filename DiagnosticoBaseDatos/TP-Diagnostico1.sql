CREATE TABLE listaDeComidas (
    numero INT AUTO_INCREMENT PRIMARY KEY,
    plato VARCHAR(25),
    precioPorcion FLOAT
);

INSERT INTO listaDeComidas (plato, precioPorcion) VALUES
('Bruschetta al Pomodoro', 3200.00),
('Insalata Caprese', 3000.00),
('Carpaccio di Manzo', 2500.00),
('Spaghetti alla Carbonara', 9800.00),
('Lasagna alla Bolognese', 10000.00),
('Risotto ai Funghi', 5200.00),
('Pizza Margherita', 6000.00),
('Gnocchi al Pesto', 12600.00),
('Pollo alla Parmigiana', 9500.00),
('Ossobuco alla Milanese', 4000.00),
('Fettuccine Alfredo', 4700.00),
('Tiramisù', 2800.00)

SELECT * FROM listaDeComidas WHERE numero = 5;
SELECT * FROM listaDeComidas WHERE plato LIKE 'M%';
SELECT * FROM listaDeComidas WHERE precioPorcion > 15000;
SELECT * FROM listaDeComidas WHERE precioPorcion < 9000;