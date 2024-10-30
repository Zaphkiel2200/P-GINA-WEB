        // Cargar el carrito de localStorage
function cargarCarrito() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const cartContainer = document.querySelector(".cart-items");

    cartContainer.innerHTML = ""; // Limpiar el contenedor del carrito

    // Verificar si el carrito está vacío
    if (carrito.length === 0) {
        cartContainer.innerHTML = "<p>Tu carrito está vacío</p>";
        return;
    }

    // Mostrar cada producto en el carrito
    carrito.forEach((producto, index) => {
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
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(index) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.splice(index, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    cargarCarrito();
}

// Función para actualizar la cantidad (sin funcionalidad completa de cambio de precios)
function actualizarCantidad(index, cambio) {
    const cantidadInput = document.querySelectorAll(".item-quantity input")[index];
    let nuevaCantidad = parseInt(cantidadInput.value) + cambio;
    nuevaCantidad = nuevaCantidad < 1 ? 1 : nuevaCantidad;
    cantidadInput.value = nuevaCantidad;
}

// Llamar a cargarCarrito al cargar la página
document.addEventListener("DOMContentLoaded", cargarCarrito);
