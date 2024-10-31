            // Lista de productos con ID único, acomodar imagenes pa luego tenerlo en las categorias
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
];

                        // Función para cargar productos en la página según la categoría
function cargarProductos(categoria) {
    const productGrid = document.querySelector(".product-grid");
    productGrid.innerHTML = ""; // Limpiar el contenedor

    // Filtrar productos por categoría si se especifica, o mostrar todos si no hay categoría
    const productosFiltrados = categoria ? productos.filter(producto => producto.categoria === categoria) : productos;

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

document.addEventListener("DOMContentLoaded", () => {
    cargarProductos(); // Llamar sin categoría para mostrar todos
});

function buscarProductos() {
    const searchQuery = document.getElementById("searchInput").value.toLowerCase();
    
    const productCards = document.querySelectorAll(".product-card");
    
    productCards.forEach(card => {
        const productName = card.querySelector("h3").textContent.toLowerCase();
        
        if (productName.includes(searchQuery)) {
            card.style.display = "block";  // Muestra la tarjeta
        } else {
            card.style.display = "none";  // Oculta la tarjeta
        }
    });
}

document.getElementById("searchInput").addEventListener("input", buscarProductos);

localStorage.setItem("productos", JSON.stringify(productos));


