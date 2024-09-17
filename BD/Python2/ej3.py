# Diccionario de personas (nombre, edad, correo)
personas = [
    {"nombre": "Carlos", "edad": 25, "correo": "carlos@mail.com"},
    {"nombre": "Ana", "edad": 17, "correo": "ana@mail.com"},
    {"nombre": "Luis", "edad": 19, "correo": "luis@mail.com"},
    {"nombre": "María", "edad": 15, "correo": "maria@mail.com"}
]

# Función para filtrar personas mayores de 18 años
def filtrar_mayores_de_18(personas):
    mayores = [persona for persona in personas if persona['edad'] > 18]
    return mayores

personas_mayores = filtrar_mayores_de_18(personas)

print("Personas mayores de 18 años:", personas_mayores)
