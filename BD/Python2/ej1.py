# Lista de estudiantes con nombre y edad
estudiantes = [
    {"nombre": "Juan", "edad": 20},
    {"nombre": "Ana", "edad": 19},
    {"nombre": "Pedro", "edad": 22},
    {"nombre": "Lucía", "edad": 18}
]

# Función para encontrar el estudiante con mayor y menor edad
def encontrar_mayor_menor_edad(estudiantes):
    if not estudiantes:
        return None, None

    mayor = max(estudiantes, key=lambda estudiante: estudiante['edad'])
    menor = min(estudiantes, key=lambda estudiante: estudiante['edad'])
    
    return mayor, menor

mayor_edad, menor_edad = encontrar_mayor_menor_edad(estudiantes)

print("Estudiante con mayor edad:", mayor_edad)
print("Estudiante con menor edad:", menor_edad)
