function calcularCompra(textoPrecio, textoCantidad) {
    if (textoPrecio.trim() === "" || textoCantidad.trim() === "") {
        return { error: "Todos los campos son obligatorios." };
    }

    const precio = Number(textoPrecio.replace(",", "."));
    const cantidad = Number(textoCantidad);

    if (isNaN(precio) || precio <= 0) {
        return { error: "El precio debe ser un número mayor que cero." };
    }
    if (isNaN(cantidad) || cantidad <= 0 || cantidad % 1 !== 0) {
        return { error: "La cantidad debe ser un número entero positivo." };
    }

    return { total: precio * cantidad };
}

function calcular(evento) {
    evento.preventDefault();

    const precio = document.getElementById("precio").value;
    const cantidad = document.getElementById("cant").value;
    const resultado = calcularCompra(precio, cantidad);

    const errorEl = document.getElementById("error");
    const seccion = document.getElementById("resultado");

    if (resultado.error) {
        errorEl.textContent = resultado.error;
        seccion.hidden = true;
        return;
    }

    errorEl.textContent = "";
    document.getElementById("total").textContent = "$" + resultado.total.toFixed(2);
    seccion.hidden = false;
}
