const NOTA_APROBACION = 7;
const NOTA_MINIMA_VALIDA = 0;
const NOTA_MAXIMA_VALIDA = 10;

// Calificaciones de ejemplo. Puedes cambiarlas para probar otros conjuntos.
const notas = [8, 6, 9, 7, 5, 10, 4, 7];

/**
 * Analiza el arreglo con un ciclo, acumuladores y comparaciones.
 * Devuelve { error } si hay datos inválidos, o los resultados del análisis.
 */
function analizarNotas(lista) {
    if (lista.length === 0) {
        return { error: "El arreglo no tiene calificaciones." };
    }

    // Reto: detectar valores fuera del intervalo 0 a 10 antes de calcular.
    const fueraDeRango = [];
    for (let i = 0; i < lista.length; i++) {
        const nota = lista[i];
        if (typeof nota !== "number" || isNaN(nota) || nota < NOTA_MINIMA_VALIDA || nota > NOTA_MAXIMA_VALIDA) {
            fueraDeRango.push(nota);
        }
    }
    if (fueraDeRango.length > 0) {
        return { error: "Hay calificaciones fuera del intervalo de 0 a 10: " + fueraDeRango.join(", ") };
    }

    let suma = 0;
    let maxima = lista[0];
    let minima = lista[0];
    let aprobadas = 0;
    let noAprobadas = 0;

    for (let i = 0; i < lista.length; i++) {
        const nota = lista[i];
        suma += nota;
        if (nota > maxima) {
            maxima = nota;
        }
        if (nota < minima) {
            minima = nota;
        }
        if (nota >= NOTA_APROBACION) {
            aprobadas++;
        } else {
            noAprobadas++;
        }
    }

    return {
        promedio: suma / lista.length,
        maxima: maxima,
        minima: minima,
        aprobadas: aprobadas,
        noAprobadas: noAprobadas
    };
}

function mostrarAnalisis() {
    const errorEl = document.getElementById("error");
    const seccion = document.getElementById("resultados");
    const resultado = analizarNotas(notas);

    if (resultado.error) {
        errorEl.textContent = resultado.error;
        seccion.hidden = true;
        return;
    }

    errorEl.textContent = "";
    document.getElementById("listaNotas").textContent = notas.join(", ");
    document.getElementById("promedio").textContent = resultado.promedio.toFixed(2);
    document.getElementById("maxima").textContent = resultado.maxima;
    document.getElementById("minima").textContent = resultado.minima;
    document.getElementById("aprobadas").textContent = resultado.aprobadas;
    document.getElementById("noAprobadas").textContent = resultado.noAprobadas;
    seccion.hidden = false;
}

document.getElementById("analizar").addEventListener("click", mostrarAnalisis);
