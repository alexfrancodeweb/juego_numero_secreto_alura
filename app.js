let listaNumerosSorteados = [];
let numeroMaximos = 10;
let numeroSecreto;
let intentos = 0;



function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
  intentos++;
  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento("p",`Acertaste el número en ${intentos} ${intentos == 1 ? "vez" : "veces"}`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento("p", "El número secreto es menor");
 
    } else {
      asignarTextoElemento("p", "El número secreto es mayor");
      
    }
  }
  limpiarCaja();
}

function limpiarCaja() {
  document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
    if (listaNumerosSorteados.length == numeroMaximos) {
      asignarTextoElemento("p", "Ya todos los números están sorteados");
      return null; // Retorna null si ya no hay más números disponibles
    }
  
    let numeroGenerado;
    do {
      numeroGenerado = Math.floor(Math.random() * numeroMaximos) + 1;
    } while (listaNumerosSorteados.includes(numeroGenerado)); // Sigue generando hasta encontrar uno nuevo
  
    listaNumerosSorteados.push(numeroGenerado);
    console.log(numeroGenerado);
    return numeroGenerado;
  }
  


function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego del número secreto");
  asignarTextoElemento("p",`Escoge un número entre el 1 y el ${numeroMaximos}`);
  numeroSecreto = generarNumeroSecreto(); 
  intentos = 0;
  document.querySelector("#reiniciar").setAttribute("disabled", "true");
}


function reiniciarJuego() {

  limpiarCaja();
  condicionesIniciales(); 
  document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();
document.getElementById("valorUsuario").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      verificarIntento();
    }
  });