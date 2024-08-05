const textArea = document.querySelector(".texto-ingreso");
const mensaje = document.querySelector(".texto-salida");

function encriptar(stringEncriptada) {
    let llaves = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < llaves.length; i++) {
        if(stringEncriptada.includes(llaves[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(llaves[i][0], llaves[i][1])
        }
    }
    return stringEncriptada;
}

function btEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function desEncriptar(stringDesencriptada) {
    let llaves = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < llaves.length; i++) {
        if(stringDesencriptada.includes(llaves[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(llaves[i][1], llaves[i][0])
        }
    }
    return stringDesencriptada;
}

function btDesencriptar(){
    const textoEncriptado = desEncriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
}

function btnCopiar() {
    var copiarTexto = mensaje;
    navigator.clipboard.writeText(copiarTexto.value);
    alert("Texto Copiado");
}

