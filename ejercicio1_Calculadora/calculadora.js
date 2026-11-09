// Calculadora de compra: precio unitario x cantidad, con descuento del 10 % si el subtotal >= $100.

const DESCUENTO = 0.10;          // 10 %
const MINIMO_DESCUENTO = 100;    // subtotal mínimo para aplicar el descuento

/**
 * Valida los datos y calcula subtotal, descuento y total.
 * Trabaja en centavos para evitar errores de redondeo de punto flotante.
 * Devuelve { error: "mensaje" } si hay un problema, o { subtotal, descuento, total } si todo es correcto.
 */
function calcularCompra(textoPrecio, textoCantidad) {
    const precioTxt = textoPrecio.trim().replace(/\$/g, "").replace(",", ".");
    const cantidadTxt = textoCantidad.trim();

    if (precioTxt === "" || cantidadTxt === "") {
        return { error: "Todos los campos son obligatorios." };
    }
    // Número decimal positivo: 12, 12.5, 12.50, .5
    if (!/^(\d+\.?\d*|\.\d+)$/.test(precioTxt) || Number(precioTxt) <= 0) {
        return { error: "El precio debe ser un número mayor que cero." };
    }
    // Entero positivo: solo dígitos y mayor que cero
    if (!/^\d+$/.test(cantidadTxt) || Number(cantidadTxt) <= 0) {
        return { error: "La cantidad debe ser un número entero positivo." };
    }

    const precioCent = Math.round(Number(precioTxt) * 100);
    const cantidad = Number(cantidadTxt);

    const subtotalCent = precioCent * cantidad;
    const descuentoCent = subtotalCent >= MINIMO_DESCUENTO * 100
        ? Math.round(subtotalCent * DESCUENTO)
        : 0;
    const totalCent = subtotalCent - descuentoCent;

    return {
        subtotal: subtotalCent / 100,
        descuento: descuentoCent / 100,
        total: totalCent / 100
    };
}

function formatearMoneda(valor) {
    return "$" + valor.toFixed(2);
}

// Función llamada por el formulario al pulsar «Calcular total».
function calcular(evento) {
    if (evento) evento.preventDefault();

    const precio = document.getElementById("precio").value;
    const cantidad = document.getElementById("cant").value;

    const errorEl = document.getElementById("error");
    const resultadoEl = document.getElementById("resultado");

    const resultado = calcularCompra(precio, cantidad);

    if (resultado.error) {
        errorEl.textContent = resultado.error;
        resultadoEl.hidden = true;
        return;
    }

    errorEl.textContent = "";
    document.getElementById("subtotal").textContent = formatearMoneda(resultado.subtotal);
    document.getElementById("descuento").textContent = formatearMoneda(resultado.descuento);
    document.getElementById("total").textContent = formatearMoneda(resultado.total);
    resultadoEl.hidden = false;
}
