alumnos = ["Santi", "Alita", "Alsina", "Type", "Ayrton", "Masi", "Joaco", "Joaco otra vez"]

notas = {
    "Santi": [8, 7, 9, 8, 7, 8],
    "Alita": [9, 9, 9, 8, 9, 10],
    "Alsina": [7, 6, 8, 7, 7, 8],
    "Type": [10, 9, 9, 10, 9, 10],
    "Ayrton": [6, 7, 7, 8, 7, 7],
    "Masi": [8, 8, 9, 8, 8, 9],
    "Joaco": [7, 7, 8, 7, 8, 7],
    "Joaco otra vez": [9, 8, 9, 9, 8, 9]
}

for alumno in alumnos:
    promedio = sum(notas[alumno]) / len(notas[alumno])
    print(f"El promedio de {alumno} es: {promedio:.2f}")