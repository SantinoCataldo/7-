import sqlite3

conn = sqlite3.connect('EESTN5.db')
cursor = conn.cursor()

cursor.execute('''CREATE TABLE IF NOT EXISTS alumnos
                 (id INTEGER PRIMARY KEY,
                  nombre TEXT,
                  edad INTEGER)''')

alumnos_info = [
    (1, "Santino Cataldo", 16),
    (2, "Tomas Alsina", 17),
    (3, "Alan Cordoba", 18),
    (4, "Tomas Alsina 2", 19),
    (5, "Joaquin Fernandez", 17),
    (6, "Ayrton Stuffano", 18),
    (7, "Thiago Aliron", 16),
    (8, "Tomas Alsina 3", 19)
]

cursor.executemany('INSERT OR REPLACE INTO alumnos VALUES (?,?,?)', alumnos_info)

cursor.execute('SELECT * FROM alumnos WHERE edad > 17')
resultados = cursor.fetchall()

print("Alumnos mayores de 17 anios:")
for alumno in resultados:
    print(f"ID: {alumno[0]}, Nombre: {alumno[1]}, Edad: {alumno[2]}")

conn.commit()
conn.close()