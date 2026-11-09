const LONGITUD_MINIMA = 8;

function tieneDigito(clave) {
    for (let i = 0; i < clave.length; i++) {
        const caracter = clave[i];
        if (caracter >= "0" && caracter <= "9") {
            return true;
        }
    }
    return false;
}

function tieneEspacios(clave) {
    for (let i = 0; i < clave.length; i++) {
        if (clave[i] === " ") {
            return true;
        }
    }
    return false;
}

function mostrarResultados() {
    const clave = document.getElementById("clave").value;
    const resultados = [
        clave.length >= LONGITUD_MINIMA,
        tieneDigito(clave),
        !tieneEspacios(clave)
    ];
    const ids = ["regla-longitud", "regla-digito", "regla-espacios"];

    let todasCumplen = true;
    for (let i = 0; i < ids.length; i++) {
        const elemento = document.getElementById(ids[i]);
        const cumple = resultados[i];
        elemento.classList.toggle("cumple", cumple);
        elemento.classList.toggle("no-cumple", !cumple);
        elemento.querySelector(".icono").textContent = cumple ? "✔" : "✘";
        if (!cumple) {
            todasCumplen = false;
        }
    }

    document.getElementById("mensaje").hidden = !todasCumplen;
}

document.getElementById("formulario").addEventListener("submit", function (evento) {
    evento.preventDefault();
    mostrarResultados();
});
