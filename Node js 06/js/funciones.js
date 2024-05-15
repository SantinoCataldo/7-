function ingresarSemilla(){
    let semilla = parseInt(prompt("Ingrese la semilla"));
    return semilla
}

function procesarSemilla(semilla){
    let secuencia = [];
    secuencia.push(semilla);
    while(semilla != 1){
        if(semilla % 2 == 0){
            semilla/=2;
        }
        else{
            semilla*=3;
            semilla++;
        }
        secuencia.push(semilla);
    }
    return secuencia;
}


function procesarDatos(){
    const semilla = ingresarSemilla();
    const secuencia = procesarSemilla(semilla);

    document.getElementById("largo").innerText = secuencia.length;
    document.getElementById("maximo").innerText = Math.max(...secuencia);
}