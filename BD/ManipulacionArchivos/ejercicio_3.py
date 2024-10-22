import sqlite3

# Ejercicio 3: Crear una base de datos, una tabla y añadir alumnos

# Crear o conectar a la base de datos "escuela.db"
conexion = sqlite3.connect('escuela.db')
cursor = conexion.cursor()

# Crear la tabla "alumnos"
cursor.execute('''CREATE TABLE IF NOT EXISTS alumnos (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    nombre TEXT NOT NULL,
                    curso TEXT NOT NULL)''')

# Insertar tres alumnos
alumnos = [
    ('Juan Pérez', 'Matemáticas'),
    ('Ana Gómez', 'Programación'),
    ('Luis Martínez', 'Historia')
]
cursor.executemany('INSERT INTO alumnos (nombre, curso) VALUES (?, ?)', alumnos)

# Guardar los cambios y cerrar la conexión
conexion.commit()
conexion.close()
