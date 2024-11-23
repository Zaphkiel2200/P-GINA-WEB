// Clase para modelar los productos
class Producto {
    constructor(id, nombre, precio, imagen, categoria) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
        this.categoria = categoria;
    }
}

// Crear productos a partir de los datos originales
const productos = [
    new Producto(1, "Body Burdeos", 100000, "Assets/Body Burdeos.png", "Ropa"),
    new Producto(2, "Bolso de Oso", 80000, "Assets/bolsooso.png", "Accesorios"),
    new Producto(3, "Bota Blanca", 250000, "Assets/botablanca.png", "Zapatos"),
    new Producto(4, "Phone Case", 25000, "Assets/phone case.png", "Accesorios"),
    new Producto(5, "CropTop", 65000, "Assets/7.png", "Ropa"),
    // Agrega los demás productos según el formato...
];

// Renderizar productos en la página según categoría o todos
function cargarProductos(categoria = null) {
    const productGrid = document.querySelector(".product-grid");
    productGrid.innerHTML = ""; // Limpiar el contenedor

    // Filtrar productos por categoría si se especifica, de lo contrario mostrar todos
    const productosFiltrados = categoria
        ? productos.filter((producto) => producto.categoria === categoria)
        : productos;

    productosFiltrados.forEach((producto) => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";
        productCard.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <div class="product-info">
                <h3>${producto.nombre}</h3>
                <p>Precio: $${producto.precio.toLocaleString()}</p>
                <div class="product-buttons">
                    <a href="detail.html?id=${producto.id}" class="btn-details">Ver Detalles</a>
                    <button class="btn-add" onclick="agregarAlCarrito(${producto.id})">Agregar al Carrito</button>
                </div>
            </div>
        `;
        productGrid.appendChild(productCard);
    });
}

// Agregar productos al carrito y almacenarlos en localStorage
function agregarAlCarrito(id) {
    const producto = productos.find((p) => p.id === id);
    if (!producto) return;

    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert(`${producto.nombre} agregado al carrito`);
}

// Función para buscar productos por nombre
function buscarProductos() {
    const searchQuery = document.getElementById("searchInput").value.toLowerCase();
    const productCards = document.querySelectorAll(".product-card");

    productCards.forEach((card) => {
        const productName = card.querySelector("h3").textContent.toLowerCase();
        if (productName.includes(searchQuery)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

// Configuración inicial al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    cargarProductos(); // Mostrar todos los productos inicialmente
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
        searchInput.addEventListener("input", buscarProductos);
    }
});

