const LONGITUD_MINIMA = 8;

// Devuelve true si algún carácter de la cadena es un dígito del 0 al 9.
function tieneDigito(clave) {
    for (let i = 0; i < clave.length; i++) {
        const caracter = clave[i];
        if (caracter >= "0" && caracter <= "9") {
            return true;
        }
    }
    return false;
}

// Devuelve true si la cadena contiene algún espacio (o carácter de espacio en blanco).
function tieneEspacios(clave) {
    for (let i = 0; i < clave.length; i++) {
        if (clave[i].trim() === "") {
            return true;
        }
    }
    return false;
}

// Devuelve un arreglo de tres booleanos: [longitud, dígito, sin espacios].
function evaluarClave(clave) {
    return [
        clave.length >= LONGITUD_MINIMA,
        tieneDigito(clave),
        !tieneEspacios(clave)
    ];
}

function mostrarResultados() {
    const clave = document.getElementById("clave").value;
    const resultados = evaluarClave(clave);
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

    // El mensaje solo aparece cuando se cumplen las tres condiciones.
    document.getElementById("mensaje").hidden = !todasCumplen;
}

document.getElementById("formulario").addEventListener("submit", function (evento) {
    evento.preventDefault();
    mostrarResultados();
});

// Reto: actualizar mientras se escribe, sin usar el botón.
document.getElementById("clave").addEventListener("input", mostrarResultados);
