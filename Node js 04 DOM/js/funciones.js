function decodificar() {
    let textoCodificado = document.getElementById("texto").value;
    let textoDecodificado = "";
    let textoADecodificar = "";
    
    for(let i = 0; i < textoCodificado.length; i++) {
        if(textoCodificado[i] == "(") { // Busco el fragmento codificado dentro del texto
            let j = i;
            while(j < textoCodificado.length && textoCodificado[j] != ")") {
                textoADecodificar += textoCodificado[j];
                j++;
            }
            i = j;
            
            for(let z = textoADecodificar.length - 1; z >= 0; z--) { // Decodifico el fragmento
                if(textoADecodificar[z] != "(" && textoADecodificar[z] != ")") {
                    textoDecodificado += textoADecodificar[z];
                }
            }
            
            textoADecodificar = "";
        } else {
            textoDecodificado += textoCodificado[i];
        }
    }
    
    alert(textoDecodificado);
}
