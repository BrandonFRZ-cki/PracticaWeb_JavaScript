const formulario = document.getElementById("formTarea");
const entrada = document.getElementById("nuevaTarea");
const lista = document.getElementById("listaTareas");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const texto = entrada.value.trim();
    if (texto === "") {
        return;
    }

    agregarTarea(texto);
    entrada.value = "";
});

function agregarTarea(texto) {
    const item = document.createElement("li");

    const casilla = document.createElement("input");
    casilla.type = "checkbox";

    const descripcion = document.createElement("span");
    descripcion.textContent = texto;

    casilla.addEventListener("change", function () {
        descripcion.classList.toggle("completada", casilla.checked);
    });

    item.append(casilla, descripcion);
    lista.appendChild(item);
}
