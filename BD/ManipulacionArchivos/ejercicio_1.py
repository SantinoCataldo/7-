# Ejercicio 1: Manipulación básica de archivos (creación, escritura, lectura)

# Crear y escribir en el archivo "mi_archivo.txt"
with open('mi_archivo.txt', 'w') as archivo:
    archivo.write('Hola, estoy aprendiendo Python')

# Leer y mostrar el contenido del archivo "mi_archivo.txt"
with open('mi_archivo.txt', 'r') as archivo:
    contenido = archivo.read()

# Mostrar el contenido del archivo
print(contenido)
