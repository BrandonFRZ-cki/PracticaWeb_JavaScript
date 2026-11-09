const NOTA_APROBACION = 7;
const notas = [8, 6, 9, 7, 5, 10, 4, 7];

function analizarNotas(lista) {
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
    const resultado = analizarNotas(notas);

    document.getElementById("listaNotas").textContent = notas.join(", ");
    document.getElementById("promedio").textContent = resultado.promedio.toFixed(2);
    document.getElementById("maxima").textContent = resultado.maxima;
    document.getElementById("minima").textContent = resultado.minima;
    document.getElementById("aprobadas").textContent = resultado.aprobadas;
    document.getElementById("noAprobadas").textContent = resultado.noAprobadas;
    document.getElementById("resultados").hidden = false;
}

document.getElementById("analizar").addEventListener("click", mostrarAnalisis);
