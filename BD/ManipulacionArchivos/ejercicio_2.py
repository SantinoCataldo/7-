# Ejercicio 2: Crear un archivo y escribir varias líneas

# Crear y escribir en el archivo "notas.txt"
with open('notas.txt', 'w') as archivo:
    archivo.write('PDeISC\n')
    archivo.write('Bases de Datos\n')
    archivo.write('Instalación mantenimiento.\n')

# Leer y mostrar las tres líneas del archivo "notas.txt"
with open('notas.txt', 'r') as archivo:
    for linea in archivo:
        print(linea.strip())  # Mostrar las líneas una por una
