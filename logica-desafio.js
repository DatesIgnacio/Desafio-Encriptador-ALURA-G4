const inputMensaje = document.querySelector("#mensaje")
const inputResultado = document.querySelector("#mensajeResultado");


function validarTexto() {
  let textoEscrito = document.querySelector("#mensaje").value;
  let validador = textoEscrito.match(/^[a-z]*$/);

  if (!validador || validador === 0) {
    alert("Sea tan amable de ingresar nuevamente el mensaje con letras minúsculas y sin acentos")
    location.reload();
    return true;
  }
}

function btnEncriptar() {
  if (inputMensaje.value == "") {
    alert("Debe ingresar un mensaje");
  } else {
    (!validarTexto())
    const textoEncriptado = encriptar(inputMensaje.value);
    inputResultado.value = textoEncriptado;

    inputMensaje.value = "";
  }
}

function encriptar(stringEncriptada) {
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  stringEncriptada = stringEncriptada.toLowerCase()

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

    }

  }
  return stringEncriptada
}

function btnDesencriptar() {
  if (inputMensaje.value == "") {
    alert("Debe ingresar un mensaje");
  } else {
    (!validarTexto())
    const textoEncriptado = desencriptar(inputMensaje.value)
    inputResultado.value = textoEncriptado
    inputMensaje.value = "";
  }


}

function desencriptar(stringDesencriptada) {
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  stringDesencriptada = stringDesencriptada.toLowerCase()

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptada.includes(matrizCodigo[i][1])) {
      stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

    }

  }
  return stringDesencriptada
}

function copiar() {
  if (inputResultado.value == "") {
    alert("No hay mensaje para copiar");
  } else {
    inputResultado.select();
    navigator.clipboard.writeText(inputResultado.value)
    inputResultado.value = "";
    alert("El texto ha sido copiado");
    inputMensaje.focus();
  }
}

function borrar() {
  inputMensaje.value = "";
  inputResultado.value = "";

  inputMensaje.focus();
}




