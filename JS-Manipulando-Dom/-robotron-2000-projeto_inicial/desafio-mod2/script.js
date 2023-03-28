const envirNotas = document.querySelector("#calcular");
const resultado = document.querySelector(".resultado");

envirNotas.addEventListener("click", calcule);

function calcule() {
    resultado.innerHTML = "Fui clicado"
}