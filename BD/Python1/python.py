def main():
    print("Aventura: Ir al Supermercado (de Noche)")
    print("Es una noche oscura y fría, y te das cuenta de que necesitás comprar algunas cosas.")
    print("Tu objetivo: ir al supermercado antes de que cierren. Pero cuidado, cualquier mala decisión puede terminar muy mal...\n")

    print("Escena 1: En la puerta de tu casa")
    print("Estás por salir al supermercado, pero sentís que algo falta.")
    decision1 = input("¿Qué hacés? (1) Revisás la billetera / (2) Salís sin revisar nada porque se hace tarde / (3) Te quedás viendo TikTok: ")

    if decision1 == "1":
        print("\nDecidís revisar la billetera. Bien hecho, tenés todo lo necesario.")
        decision2 = input("¿Vas al supermercado en bicicleta, auto o caminando? (1) Bicicleta / (2) Auto / (3) Caminando: ")

        if decision2 == "1":
            print("\nDecidís ir en bicicleta. La noche está fresca.")
            decision3 = input("¿Vas rápido o despacio? (1) Rápido / (2) Despacio: ")

            if decision3 == "1":
                print("\nVas rápido en bicicleta. De repente, te caés y te rompés la clavícula.")
                print("Final 1: Terminas en el hospital con una clavícula rota. No pudiste ir al supermercado.")
            else:
                print("\nVas despacio en bicicleta y llegás al supermercado sin problemas.")
                decision4 = input("Al pagar, te avisan que sos el comprador 100.000 del supermercado. ¿Querés recibir el premio? (1) Sí / (2) No, desconfías: ")

                if decision4 == "1":
                    print("\nFinal 2: ¡Ganaste un premio increíble! Te llevás una TV de 55 pulgadas y las compras son gratis.")
                    print("¡Felicitaciones, es el mejor final posible!")
                else:
                    print("\nFinal 3: Compraste todo sin problemas, pero rechazaste el premio por desconfianza.")
                    print("A pesar de eso, llegás a casa tranquilo. ¡Misión cumplida!")
        
        elif decision2 == "2":
            print("\nDecidís ir en auto. En el camino, te cruzás con un trapito que quiere limpiarte el parabrisas.")
            decision3 = input("¿Le das una buena propina o no? (1) Sí / (2) No: ")

            if decision3 == "1":
                print("\nLe das una buena propina y sigues tu camino.")
                print("Llegás al supermercado y comprás todo lo que necesitás.")
                decision4 = input("Al pagar, te avisan que sos el comprador 100.000 del supermercado. ¿Querés recibir el premio? (1) Sí / (2) No, desconfías: ")

                if decision4 == "1":
                    print("\nFinal 4: ¡Ganaste un premio increíble! Te llevás una TV de 55 pulgadas y las compras son gratis.")
                    print("¡Felicitaciones, es el mejor final posible!")
                else:
                    print("\nFinal 5: Compraste todo sin problemas, pero rechazaste el premio por desconfianza.")
                    print("A pesar de eso, llegás a casa tranquilo. ¡Misión cumplida!")
            else:
                print("\nDecidís no darle propina y el trapito se enoja.")
                print("Final 6: Te rompe el vidrio del auto y no podés ir al supermercado. ¡Qué mala suerte!")

        else:
            print("\nDecidís caminar hasta el supermercado.")
            print("La caminata es agradable, pero te distraés sacando el celular.")
            print("Alguien te roba el celular mientras caminas.")
            print("Final 7: Te quedás sin celular y sin poder hacer las compras. ¡Un verdadero desastre!")

    elif decision1 == "2":
        print("\nSalís sin revisar nada.")
        print("Llegás al supermercado, pero te das cuenta de que te olvidaste la billetera en casa.")
        decision2 = input("¿Qué hacés? (1) Volvés a buscarla / (2) Intentás comprar con el celular: ")

        if decision2 == "1":
            print("\nVolvés a casa a buscar la billetera, pero te distraés viendo la tele y te olvidás de volver al supermercado.")
            print("Final 8: El supermercado cierra mientras vos te quedás mirando una peli.")
        else:
            print("\nIntentás pagar con el celular, pero te das cuenta de que no tenés suficiente saldo en la cuenta.")
            print("Final 9: Te quedás sin poder comprar nada. ¡Qué día más desafortunado!")
    
    elif decision1 == "3":
        print("\nTe quedás viendo TikTok y perdés la noción del tiempo.")
        print("Cuando te das cuenta, el supermercado ya está cerrado.")
        decision2 = input("¿Vas a otro almacén o te quedás en casa? (1) Vas a otro almacén / (2) Te quedás en casa: ")

        if decision2 == "1":
            print("\nVas a otro almacén, pero mientras caminás por la calle, alguien te sigue.")
            print("Final 10: Te secuestran. Fin de la historia.")
        else:
            print("\nTe quedás en casa viendo más TikTok.")
            print("Final 11: No compraste nada y te quedaste con hambre. ¡Qué noche más productiva!")

    else:
        print("\Final oculto.")
        print("Final 12: Inteligente pediste en pedidosYa porque tenias un cupon.")

    print("\nFin de la historia. ¡Gracias por jugar!")

if __name__ == "__main__":
    main()
