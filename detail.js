// Lista de productos (cópiala aquí en `detalles.js`)
const productos = [
    { id: 1, nombre: "Body Burdeos", precio: 100000, imagen: "Assets/Body Burdeos.png", categoria: "Ropa" },
    { id: 2, nombre: "Bolso de Oso", precio: 80000, imagen: "Assets/bolsooso.png", categoria: "Accesorios" },
    { id: 3, nombre: "Bota Blanca", precio: 250000, imagen: "Assets/botablanca.png", categoria: "Zapatos" },
    { id: 4, nombre: "Phone Case", precio: 25000, imagen: "Assets/phone case.png", categoria: "Accesorios" },
    { id: 5, nombre: "CropTop", precio: 65000, imagen: "Assets/7.png", categoria: "Ropa" },
    { id: 6, nombre: "Gafas de Sol Retro", precio: 50000, imagen: "Assets/gafasretro.png", categoria: "Accesorios" },
    { id: 7, nombre: "Chaqueta de Cuero", precio: 320000, imagen: "Assets/chaqueta_cuero.png", categoria: "Ropa" },
    { id: 8, nombre: "Sandalias Veraniegas", precio: 120000, imagen: "Assets/sandalias.png", categoria: "Zapatos" },
    { id: 9, nombre: "Gorra Deportiva", precio: 40000, imagen: "Assets/gorra.png", categoria: "Accesorios" },
    { id: 10, nombre: "Reloj Clásico", precio: 180000, imagen: "Assets/reloj.png", categoria: "Accesorios" },
    { id: 11, nombre: "Camisa Blanca", precio: 90000, imagen: "Assets/camisa_blanca.png", categoria: "Ropa" },
    { id: 12, nombre: "Jeans Oscuros", precio: 150000, imagen: "Assets/jeans_oscuros.png", categoria: "Ropa" },
    { id: 13, nombre: "Vestido Floral", precio: 200000, imagen: "Assets/vestido_floral.png", categoria: "Ropa" },
    { id: 14, nombre: "Botines Negros", precio: 270000, imagen: "Assets/botines_negros.png", categoria: "Zapatos" },
    { id: 15, nombre: "Anillo de Plata", precio: 50000, imagen: "Assets/anillo_plata.png", categoria: "Accesorios" },
    { id: 16, nombre: "Bolso de Cuero", precio: 220000, imagen: "Assets/bolso_cuero.png", categoria: "Accesorios" },
    { id: 17, nombre: "Zapatos de Vestir", precio: 300000, imagen: "Assets/zapatos_vestir.png", categoria: "Zapatos" },
    { id: 18, nombre: "Bufanda de Lana", precio: 45000, imagen: "Assets/bufanda.png", categoria: "Accesorios" },
    { id: 19, nombre: "Sombrero de Paja", precio: 70000, imagen: "Assets/sombrero_paja.png", categoria: "Accesorios" },
    { id: 20, nombre: "Chaleco de Mezclilla", precio: 110000, imagen: "Assets/chaleco_mezclilla.png", categoria: "Ropa" }
];|

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
