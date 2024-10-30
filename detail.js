        // Obtener el ID del producto de la URL
const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get('id'));

    // Buscar el producto en la lista de productos
const producto = productos.find(prod => prod.id === productId);

// Cargar los detalles del producto en la página
if (producto) {
    document.getElementById("productName").textContent = producto.nombre;
    document.getElementById("productImage").src = producto.imagen;
    document.getElementById("productPrice").textContent = `Precio: $${producto.precio.toLocaleString()}`;
    document.getElementById("productDescription").textContent = `Descripción detallada de ${producto.nombre}.`;
} else {
    document.querySelector(".product-details").innerHTML = "<p>Producto no encontrado</p>";
}