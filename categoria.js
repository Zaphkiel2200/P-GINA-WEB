// Define la categoría específica
const categoria = "Ropa"; // Asegúrate de que coincida con la categoría que deseas mostrar

// Cargar productos desde localStorage
const productos = JSON.parse(localStorage.getItem("productos")) || [];

// Filtrar productos por la categoría
const productosFiltrados = productos.filter(producto => producto.categoria === categoria);

// Seleccionar el contenedor de productos
const productGrid = document.querySelector(".product-grid");

// Mostrar productos de la categoría específica
if (productosFiltrados.length === 0) {
    productGrid.innerHTML = "<p>No hay productos en esta categoría.</p>";
} else {
    productosFiltrados.forEach(producto => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <div class="product-info">
                <h3>${producto.nombre}</h3>
                <p>Precio: $${producto.precio.toLocaleString()}</p>
                <a href="detail.html?id=${producto.id}" class="favorite-btn">Adquirir<i class="far fa-heart"></i></a>
            </div>
        `;
        productGrid.appendChild(productCard);
    });
}
