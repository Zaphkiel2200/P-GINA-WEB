// Aquíiii es pa q el carrito de localStorage se muestren los productos
function cargarCarrito() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const cartContainer = document.querySelector(".cart-items");
    const cartTotal = document.getElementById("cartTotal");

    cartContainer.innerHTML = ""; // Limpiar el contenedor del carrito
    let total = 0; // Variable para el total del carrito

    // Verificar si el carrito está vacío
    if (carrito.length === 0) {
        cartContainer.innerHTML = "<p>Tu carrito está vacío</p>";
        cartTotal.textContent = "$0";
        return;
    }

    // Mostrar cada producto en el carrito
    carrito.forEach((producto, index) => {
        total += producto.precio;

        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");

        cartItem.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <div class="item-details">
                <h3>${producto.nombre}</h3>
                <p class="item-price">Precio: $${producto.precio.toLocaleString()}</p>
            </div>
            <div class="item-quantity">
                <button class="quantity-btn minus" onclick="actualizarCantidad(${index}, -1)">-</button>
                <input type="number" value="1" min="1">
                <button class="quantity-btn plus" onclick="actualizarCantidad(${index}, 1)">+</button>
            </div>
            <button class="remove-item" onclick="eliminarDelCarrito(${index})">🗑️</button>
        `;

        cartContainer.appendChild(cartItem);
    });

    // Actualizar el total en el HTML
    cartTotal.textContent = `$${total.toLocaleString()}`;
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(index) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const producto = carrito[index];
    carrito.splice(index, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarToast(`${producto.nombre} eliminado del carrito`);
    cargarCarrito();
}

// Función para actualizar la cantidad (sin funcionalidad completa de cambio de precios)
function actualizarCantidad(index, cambio) {
    const cantidadInput = document.querySelectorAll(".item-quantity input")[index];
    let nuevaCantidad = parseInt(cantidadInput.value) + cambio;
    nuevaCantidad = nuevaCantidad < 1 ? 1 : nuevaCantidad;
    cantidadInput.value = nuevaCantidad;
}

// Función para mostrar notificaciones tipo toast
function mostrarToast(mensaje) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = mensaje;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Función para finalizar la compra
function finalizarCompra() {
    localStorage.removeItem("carrito");
    mostrarToast("¡Gracias por tu compra!");
    cargarCarrito();
}

// Llamar a cargarCarrito al cargar la página
document.addEventListener("DOMContentLoaded", cargarCarrito);
