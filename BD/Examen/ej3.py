calificaciones = []

while True:
    entrada = input("Ingresa una calificacion (o 'n' para terminar): ")
    if entrada.lower() == 'n': 
        break
    calificacion = float(entrada)
    if 0 <= calificacion <= 10:
        calificaciones.append(calificacion)
    else:
        print("Ingresa una calificación entre 0 y 10")

if calificaciones:
    print(f"\nCalificacion más alta: {max(calificaciones)}")
    print(f"Calificacion más baja: {min(calificaciones)}")
    promedio = sum(calificaciones) / len(calificaciones)
    print(f"Promedio de calificaciones: {promedio:.2f}")
else:
    print("No se ingresaron calificaciones")