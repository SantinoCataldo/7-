function filtranum(numeros) {
    let resultado = [];
    let contador = 0;

    switch(true){
        case (numeros.length == 1 && numeros[0] <= 10): // Subtarea 1
            resultado.push(numeros[0]);
            contador = 1;
            console.log("Subtarea 1"); //para comprobar que se este ejecutando este caso
        break;

    case (numeros.every(num => num <= 10)): // Subtarea 2
        for (let i = 0; i < numeros.length; i++) {
            const numStr = numeros[i].toString();
            const primerDigito = numStr.charAt(0);
            const ultimoDigito = numStr.charAt(numStr.length - 1);

            if (primerDigito == ultimoDigito) {
                resultado.push(numeros[i]);
                contador++;
            }
        }
        console.log("Subtarea 2");

        break;

    case (numeros.length == 1 && numeros[0] <= 20): // Subtarea 3
            resultado.push(numeros[0]);
            contador = 1;
            console.log("Subtarea 3");

            break;

    case (numeros.every(num => num <= 20)): // Subtarea 4
        for (let i = 0; i < numeros.length; i++) {
            const numStr = numeros[i].toString();
            const primerDigito = numStr.charAt(0);
            const ultimoDigito = numStr.charAt(numStr.length - 1);

            if (primerDigito == ultimoDigito) {
                resultado.push(numeros[i]);
                contador++;
            }
        }
        console.log("Subtarea 4");

        break;

    case (numeros.length == 1 && numeros[0] <= 100): // Subtarea 5
            resultado.push(numeros[0]);
            contador = 1;
            console.log("Subtarea 5");

        break;

    case (numeros.every(num => num <= 100)): // Subtarea 6
        for (let i = 0; i < numeros.length; i++) {
            const numStr = numeros[i].toString();
            const primerDigito = numStr.charAt(0);
            const ultimoDigito = numStr.charAt(numStr.length - 1);

            if (primerDigito == ultimoDigito) {
                resultado.push(numeros[i]);
                contador++;
            }
        }
        console.log("Subtarea 6");

        break;

    case (numeros.length == 1): // Subtarea 7
            resultado.push(numeros[0]);
            contador = 1;
            console.log("Subtarea 7");

        break;
    default: //Subtarea 8
        for (let i = 0; i < numeros.length; i++) {
            const numStr = numeros[i].toString();
            const primerDigito = numStr.charAt(0);
            const ultimoDigito = numStr.charAt(numStr.length - 1);

            if (primerDigito == ultimoDigito) {
                resultado.push(numeros[i]);
                contador++;
            }
        }
        console.log("Subtarea 8");

    }
    return { cantidad: contador, numerosFiltrados: resultado };    
}

function LeerArchivo(callback) {
    const archivoInput = document.getElementById('archivo');
    const archivo = archivoInput.files[0];

    if (!archivo) {
      alert('Por favor selecciona un archivo.');
      return;
    }

    const lector = new FileReader();

    lector.onload = function(evento) {
        const contenido = evento.target.result;
        const lineas = contenido.trim().split('\n');
        const numeros = lineas[1].trim().split(' ').map(Number);
        const { cantidad, numerosFiltrados } = filtranum(numeros);
        const contenidoResultado = `${cantidad}\n${numerosFiltrados.join(' ')}`;
        callback(contenidoResultado);
    };
    lector.readAsText(archivo);
}
function GuardarDatos(dato) {
    const archivoBlob = new Blob([dato], { type: 'text/plain' });
    const urlArchivo = URL.createObjectURL(archivoBlob);

    const linkDescarga = document.createElement('a');
    linkDescarga.href = urlArchivo;
    linkDescarga.download = 'datos.txt';
    document.body.appendChild(linkDescarga);

    linkDescarga.click();

    document.body.removeChild(linkDescarga);

    URL.revokeObjectURL(urlArchivo);

}

function procesarArchivo() {
    LeerArchivo(function(resultado) {
        GuardarDatos(resultado);
    });
}