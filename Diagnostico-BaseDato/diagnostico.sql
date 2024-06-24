CREATE TABLE lista_de_comidas (
    numero INT AUTO_INCREMENT PRIMARY KEY,
    plato VARCHAR(25),
    precio_porcion FLOAT
);

INSERT INTO lista_de_comidas (plato, precio_porcion) VALUES
('Paella', 4000.00),
('Sushi', 3000.00),
('Tacos al Pastor', 1600.00),
('Boeuf Bourguignon', 20000.00),
('Curry de Pollo', 2400.00),
('Ratatouille', 2000.00),
('Pad Thai', 2600.00),
('Feijoada', 17000.00),
('Moussaka', 3400.00),
('Goulash', 2800.00),
('Bibimbap', 18000.00),
('Ceviche', 3000.00);

SELECT * FROM lista_de_comidas WHERE numero = 5;

SELECT * FROM lista_de_comidas WHERE plato LIKE 'M%';
SELECT * FROM lista_de_comidas WHERE precio_porcion > 15000;

SELECT * FROM lista_de_comidas WHERE precio_porcion < 9000;