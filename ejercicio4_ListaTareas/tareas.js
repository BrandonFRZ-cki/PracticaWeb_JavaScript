const formulario = document.getElementById("formTarea");
const entrada = document.getElementById("nuevaTarea");
const lista = document.getElementById("listaTareas");
const errorEl = document.getElementById("error");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const texto = entrada.value.trim();
    if (texto === "") {
        errorEl.textContent = "La tarea no puede estar vacía ni contener solo espacios.";
        entrada.focus();
        return;
    }

    errorEl.textContent = "";
    agregarTarea(texto);
    entrada.value = "";
    entrada.focus();
});

// Crea el elemento de una tarea con su casilla, su texto y un botón para eliminarla.
function agregarTarea(texto) {
    const item = document.createElement("li");

    const casilla = document.createElement("input");
    casilla.type = "checkbox";

    const descripcion = document.createElement("span");
    descripcion.textContent = texto;

    casilla.addEventListener("change", function () {
        descripcion.classList.toggle("completada", casilla.checked);
    });

    const eliminar = document.createElement("button");
    eliminar.type = "button";
    eliminar.textContent = "Eliminar";
    eliminar.addEventListener("click", function () {
        item.remove();
    });

    item.append(casilla, descripcion, eliminar);
    lista.appendChild(item);
}
