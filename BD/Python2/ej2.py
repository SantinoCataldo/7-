# Diccionario de productos con sus precios
productos = {
    "Producto1": 100,
    "Producto2": 200,
    "Producto3": 300
}

# Función para calcular el total a pagar
def calcular_total_a_pagar(productos_seleccionados, productos):
    total = 0
    for producto in productos_seleccionados:
        if producto in productos:
            total += productos[producto]
    return total

# Lista de productos seleccionados
productos_seleccionados = ["Producto1", "Producto3"]

total = calcular_total_a_pagar(productos_seleccionados, productos)

print("Total a pagar:", total)
