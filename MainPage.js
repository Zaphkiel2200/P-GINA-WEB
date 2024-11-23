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
    new Producto(6, "Gafas de Sol Retro", 50000, "Assets/gafasretro.png", "Accesorios"),
    new Producto(7, "Chaqueta de Cuero", 320000, "Assets/chaqueta_cuero.png", "Ropa"),
    new Producto(8, "Sandalias Veraniegas", 120000, "Assets/sandalias.png", "Zapatos"),
    new Producto(9, "Gorra Deportiva", 40000, "Assets/gorra.png", "Accesorios"),
    new Producto(10, "Reloj Clásico", 180000, "Assets/reloj.png", "Accesorios"),
    new Producto(11, "Camisa Blanca", 90000, "Assets/camisa_blanca.png", "Ropa"),
    new Producto(12, "Jeans Oscuros", 150000, "Assets/jeans_oscuros.png", "Ropa"),
    new Producto(13, "Vestido Floral", 200000, "Assets/vestido_floral.png", "Ropa"),
    new Producto(14, "Botines Negros", 270000, "Assets/botines_negros.png", "Zapatos"),
    new Producto(15, "Anillo de Plata", 50000, "Assets/anillo_plata.png", "Accesorios"),
    new Producto(16, "Bolso de Cuero", 220000, "Assets/bolso_cuero.png", "Accesorios"),
    new Producto(17, "Zapatos de Vestir", 300000, "Assets/zapatos_vestir.png", "Zapatos"),
    new Producto(18, "Bufanda de Lana", 45000, "Assets/bufanda.png", "Accesorios"),
    new Producto(19, "Sombrero de Paja", 70000, "Assets/sombrero_paja.png", "Accesorios"),
    new Producto(20, "Chaleco de Mezclilla", 110000, "Assets/chaleco_mezclilla.png", "Ropa"),
];

// Renderizar productos en la página según categoría o todos
function cargarProductos(categoria = null) {
    const productGrid = document.querySelector(".product-grid");
    productGrid.innerHTML = ""; // Limpiar el contenedor

    // Filtrar productos por categoría si se especifica, de lo contrario mostrar todos
    const productosFiltrados = categoria
        ? productos.filter((producto) => producto.categoria === categoria)
        : productos;

    cargarProductosFiltrados(productosFiltrados);
}

// Renderizar productos filtrados
function cargarProductosFiltrados(productosFiltrados) {
    const productGrid = document.querySelector(".product-grid");
    productGrid.innerHTML = ""; // Limpiar el contenedor

    if (productosFiltrados.length === 0) {
        productGrid.innerHTML = "<p>No se encontraron productos</p>";
        return;
    }

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

    // Filtrar productos por el término de búsqueda
    const productosFiltrados = productos.filter((producto) =>
        producto.nombre.toLowerCase().includes(searchQuery)
    );

    // Renderizar solo los productos que coinciden
    cargarProductosFiltrados(productosFiltrados);
}

// Configuración inicial al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    cargarProductos(); // Mostrar todos los productos inicialmente
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
        searchInput.addEventListener("input", buscarProductos);
    }
});
