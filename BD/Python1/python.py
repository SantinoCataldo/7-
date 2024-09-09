def main():
    print("Bienvenido a la Novela Gráfica: El Viaje a Teratiar")
    print("Eres un joven valiente que ha decidido emprender un viaje hacia la legendaria ciudad de Teratiar.\n")

    print("Escena 1: En la Aldea")
    print("Te encuentras en tu aldea natal, preparando tus cosas para el viaje.")
    decision1 = input("¿Qué haces? (1) Hablas con el anciano sabio para recibir consejos / (2) Te diriges directamente hacia el bosque en tu camino a Teratiar: ")

    if decision1 == "1":
        print("\nDecides hablar con el anciano sabio...")
        print("El anciano te da un mapa antiguo y te advierte sobre los peligros del camino.")
        decision2 = input("¿Qué haces? (1) Sigues el mapa del anciano / (2) Ignoras el mapa y sigues tu instinto: ")

        if decision2 == "1":
            print("\nSigues el mapa y encuentras un atajo secreto.")
            print("Logras evitar varios peligros y llegas a Teratiar a salvo.")
            print("¡Has alcanzado la legendaria ciudad de Teratiar y tu nombre será recordado!")
        elif decision2 == "2":
            print("\nIgnoras el mapa y sigues tu instinto...")
            print("Desafortunadamente, te pierdes en el camino y nunca llegas a Teratiar.")
            print("El viaje termina en tragedia. Game Over.")
        else:
            print("\nOpción no válida. Mientras dudas, pierdes el día y decides no emprender el viaje.")
            print("Game Over.")
    
    elif decision1 == "2":
        print("\nDecides dirigirte directamente hacia el bosque...")
        print("El camino es oscuro y lleno de peligros.")
        print("Sin un mapa o guía, te enfrentas a muchas dificultades.")
        decision3 = input("¿Qué haces? (1) Sigues adelante sin importar los peligros / (2) Regresas a la aldea para prepararte mejor: ")

        if decision3 == "1":
            print("\nSigues adelante con determinación...")
            print("Después de días de lucha, llegas a Teratiar, pero estás exhausto y sin fuerzas.")
            print("Aunque llegas, te das cuenta de que el viaje podría haber sido más fácil.")
        elif decision3 == "2":
            print("\nDecides regresar a la aldea...")
            print("Te preparas mejor y esta vez, con el mapa del anciano, llegas a Teratiar sin problemas.")
            print("¡Has alcanzado la legendaria ciudad de Teratiar!")
        else:
            print("\nOpción no válida. Te pierdes en el bosque y decides abandonar el viaje.")
            print("Game Over.")
    else:
        print("\nOpción no válida. Pierdes el valor de emprender el viaje y decides quedarte en la aldea.")
        print("Game Over.")
    
    print("\nFin de la historia. Gracias por jugar.")

if __name__ == "__main__":
    main()
