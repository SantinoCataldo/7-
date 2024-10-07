# Lista de compañeros con su información
compañeros = {
    "Alan Cordoba": ["18", "Conduce un Ka 2003"],
    "Maxi": ["19", "Cirujano plástico"],
    "Ayrton": ["19", "Corre carreras en un simulador"],
    "Type": ["18", "Pro Player de Haxball"],
    "Joaco": ["18", "Ornitorrinco"],
    "Alsina": ["18", "Enano"],
    "Fede": ["19", "Fede Barber"],
    "Gadi": ["18", "Batanense"]
}

# Función para mostrar todos los compañeros
def mostrar_compañeros():
    print("\nLista de compañeros:\n")
    for nombre, datos in compañeros.items():
        print(f"Nombre: {nombre}, Edad: {datos[0]}, Cualidad: {datos[1]}")
    print()

# Función para actualizar la información de un compañero
def actualizar_compañero(nombre, nueva_edad=None, nueva_cualidad=None):
    if nombre in compañeros:
        if nueva_edad:
            compañeros[nombre][0] = nueva_edad
        if nueva_cualidad:
            compañeros[nombre][1] = nueva_cualidad
        print(f"Información de {nombre} actualizada correctamente.\n")
    else:
        print(f"El compañero {nombre} no está registrado.\n")

# Función para agregar un nuevo compañero
def agregar_compañero(nombre, edad, cualidad):
    if nombre not in compañeros:
        compañeros[nombre] = [edad, cualidad]
        print(f"Compañero {nombre} agregado correctamente.\n")
    else:
        print(f"El compañero {nombre} ya existe en el registro.\n")

# Función para eliminar un compañero
def eliminar_compañero(nombre):
    if nombre in compañeros:
        del compañeros[nombre]
        print(f"Compañero {nombre} eliminado correctamente.\n")
    else:
        print(f"El compañero {nombre} no está registrado.\n")

# Menú interactivo para gestionar los compañeros
def menu():
    while True:
        print("1. Mostrar todos los compañeros")
        print("2. Actualizar un compañero")
        print("3. Agregar un compañero nuevo")
        print("4. Eliminar un compañero")
        print("5. Salir")
        opcion = input("Elige una opción: ")

        if opcion == "1":
            mostrar_compañeros()

        elif opcion == "2":
            nombre = input("Ingresa el nombre del compañero a actualizar: ")
            nueva_edad = input("Ingresa la nueva edad (presiona Enter si no quieres cambiarla): ")
            nueva_cualidad = input("Ingresa la nueva cualidad (presiona Enter si no quieres cambiarla): ")
            
            # Solo actualiza si el usuario ingresó nuevos valores
            actualizar_compañero(nombre, nueva_edad if nueva_edad else None, nueva_cualidad if nueva_cualidad else None)

        elif opcion == "3":
            nombre = input("Ingresa el nombre del nuevo compañero: ")
            edad = input("Ingresa la edad del nuevo compañero: ")
            cualidad = input("Ingresa la cualidad del nuevo compañero: ")
            agregar_compañero(nombre, edad, cualidad)

        elif opcion == "4":
            nombre = input("Ingresa el nombre del compañero a eliminar: ")
            eliminar_compañero(nombre)

        elif opcion == "5":
            print("Saliendo del programa...")
            break

        else:
            print("Opción no válida. Inténtalo de nuevo.\n")

# Ejecutar el menú
if __name__ == "__main__":
    menu()
