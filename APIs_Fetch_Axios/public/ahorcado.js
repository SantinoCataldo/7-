let palabra = '';  // Palabra a adivinar
let letrasUsadas = new Set();  // Conjunto de letras ya intentadas
let intentosRestantes = 6;
let letrasElemento = document.getElementById('letras');
let palabraElemento = document.getElementById('palabra');
let letrasUsadasElemento = document.getElementById('letras-usadas');
let canvas = document.getElementById('ahorcadoCanvas');  // Canvas donde se dibuja el ahorcado
let ctx = canvas.getContext('2d');  // Contexto de dibujo en el canvas
let jugarBoton = document.getElementById('jugar');
let vidasElemento = document.getElementById('vidas');

async function inicializarJuego() {
    jugarBoton.addEventListener('click', empezarJuego);
    document.addEventListener('keydown', manejarEntradaTeclado);
    await empezarJuego();  // Empezar el juego al cargar la página
}

async function empezarJuego() {
    letrasUsadas.clear();
    intentosRestantes = 6;
    await obtenerPalabra();
    actualizarPalabra();
    limpiarCanvas();
    dibujarBase();
    crearBotonesLetras();
    actualizarVidas();
}

async function obtenerPalabra() {
    try {
        const response = await fetch('/api/palabra');  // Hacer una solicitud a la api para obtener la palabra
        const data = await response.json();  // Convertir la respuesta a formato JSON
        palabra = data.palabra.toUpperCase();
    } catch (error) {
        console.error('Error al obtener la palabra:', error);
    }
}

function crearBotonesLetras() {
    letrasElemento.innerHTML = '';  // Limpiar el contenido anterior de las letras disponibles
    for (let i = 65; i <= 90; i++) {  // Recorrer el código ASCII de A a Z
        const letra = String.fromCharCode(i);  // `String.fromCharCode(i)` convierte el código ASCII `i` en su letra
        const letraElemento = document.createElement('div');
        letraElemento.textContent = letra;
        letraElemento.className = 'letra';
        letraElemento.addEventListener('click', () => intentarLetra(letra));  // Event listener para intentar la letra al hacer click
        letrasElemento.appendChild(letraElemento);  // Agregar el elemento de letra al contenedor de letras
    }
}

function manejarEntradaTeclado(event) {
    const letra = event.key.toUpperCase();  // Obtener la letra ingresada y convertirla a mayúscula
    if (letra.length === 1 && letra >= 'A' && letra <= 'Z') {  // Verificar que la letra sea válida
        intentarLetra(letra);  // Intentar adivinar la letra
    }
}

function intentarLetra(letra) {
    if (letrasUsadas.has(letra)) return;  // Salir de la función si la letra ya ha sido intentada

    letrasUsadas.add(letra);  // Agregar la letra al conjunto de letras usadas

    const letraElemento = document.querySelector(`.letra:nth-child(${letra.charCodeAt(0) - 64})`);
    // `letra.charCodeAt(0)` obtiene el valor Unicode de la letra. Por ejemplo, para 'A', devuelve 65.
    // La resta `- 64` ajusta el valor para obtener el índice correcto del elemento dentro de los botones de letras.
    // Esto se debe a que el primer botón (para la letra 'A') tiene un índice de 1 en el selector `nth-child`.
    if (letraElemento) {
        letraElemento.classList.add('usada');
    }

    if (!palabra.includes(letra)) {  // Verificar si la letra no esta en la palabra
        intentosRestantes--;  // Eestar el número de intentos restantes
        dibujarAhorcado(6 - intentosRestantes);  // Dibujar la parte del ahorcado
        actualizarVidas();
    }

    actualizarPalabra();
    verificarEstadoJuego();
}

function actualizarPalabra() {
    palabraElemento.textContent = palabra
        .split('')
        .map(letra => letrasUsadas.has(letra) ? letra : '_')
        .join(' ');  // Mostrar las letras adivinadas
}

function actualizarVidas() {
    vidasElemento.innerHTML = '';  // Limpiar las vidas anteriores

    for (let i = 0; i < 6; i++) {
        const vida = document.createElement('div');
        vida.className = i < intentosRestantes ? 'vida verde' : 'vida rojo';  // Asignar clase verde o rojo según si la vida está activa o perdida
        vidasElemento.appendChild(vida);  // Agregar el elemento de vida al contenedor de vidas
    }
}

function limpiarCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);  // Limpiar el canvas completamente
}

function dibujarBase() {
    ctx.beginPath();
    ctx.moveTo(50, 270);
    ctx.lineTo(250, 270);
    ctx.moveTo(100, 270);
    ctx.lineTo(100, 50);
    ctx.lineTo(200, 50);
    ctx.lineTo(200, 80);
    ctx.stroke();  // Dibujar todas las líneas 
}

function dibujarAhorcado(paso) {
    ctx.beginPath();
    ctx.lineWidth = 2;
    switch (paso) {
        case 1:
            ctx.arc(200, 100, 20, 0, Math.PI * 2);  // Cabeza
            break;
        case 2:
            ctx.moveTo(200, 120);
            ctx.lineTo(200, 190);  // Cuerpo
            break;
        case 3:
            ctx.moveTo(200, 130);
            ctx.lineTo(170, 160);  // Brazo izquierdo
            break;
        case 4:
            ctx.moveTo(200, 130);
            ctx.lineTo(230, 160);  // Brazo derecho
            break;
        case 5:
            ctx.moveTo(200, 190);
            ctx.lineTo(180, 230);  // Pierna izquierda
            break;
        case 6:
            ctx.moveTo(200, 190);
            ctx.lineTo(220, 230);  // Pierna derecha
            break;
    }
    ctx.stroke();  // Dibujar la parte del ahorcado
}

function verificarEstadoJuego() {
    if (palabra === palabraElemento.textContent.replace(/ /g, '')) {
        // `.replace(/ /g, '')` elimina todos los espacios en blanco de la cadena `palabraElemento.textContent`
        // Esto es necesario porque en la representación visual de las letras a adivinar, se usan espacios para separar las letras adivinadas de las no adivinadas
        setTimeout(() => {
            alert('Ganaste');
            empezarJuego();
        }, 100);
    } else if (intentosRestantes === 0) {
        setTimeout(() => {
            alert(`La palabra era: ${palabra}`);
            empezarJuego();
        }, 100);
    }
}

// Iniciar cuando se carga la página completamente
document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');

    jugarBoton.addEventListener('click', () => {
        loader.classList.add('hidden');
        inicializarJuego();
    });
});