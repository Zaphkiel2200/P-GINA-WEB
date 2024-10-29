// Función para buscar productos
function buscarProductos() {
    // Obtener el valor del campo de búsqueda y convertirlo a minúsculas
    const searchQuery = document.getElementById("searchInput").value.toLowerCase();
    
    // Seleccionar todas las tarjetas de productos ya existentes en el HTML
    const productCards = document.querySelectorAll(".product-card");
    
    // Iterar sobre cada tarjeta de producto para aplicar el filtro
    productCards.forEach(card => {
        // Obtener el nombre del producto dentro de la tarjeta
        const productName = card.querySelector("h3").textContent.toLowerCase();
        
        // Mostrar la tarjeta si coincide con el término de búsqueda; de lo contrario, ocultarla
        if (productName.includes(searchQuery)) {
            card.style.display = "block";  // Muestra la tarjeta
        } else {
            card.style.display = "none";  // Oculta la tarjeta
        }
    });
}

// Escuchar el evento de entrada de texto en el campo de búsqueda para filtrar automáticamente
document.getElementById("searchInput").addEventListener("input", buscarProductos);

const productos = [
    { nombre: "Body Burdeos", precio: 100000, imagen: "Assets/Body Burdeos.png", categoria: "Ropa" },
    { nombre: "Bolso de Oso", precio: 80000, imagen: "Assets/bolsooso.png", categoria: "Accesorios" },
    { nombre: "Bota Blanca", precio: 250000, imagen: "Assets/botablanca.png", categoria: "Zapatos" },
    { nombre: "Phone Case", precio: 25000, imagen: "Assets/phone case.png", categoria: "Accesorios" },
    { nombre: "CropTop", precio: 65000, imagen: "Assets/7.png", categoria: "Ropa" },
    { nombre: "Gafas de Sol Retro", precio: 50000, imagen: "Assets/gafasretro.png", categoria: "Accesorios" },
    { nombre: "Chaqueta de Cuero", precio: 320000, imagen: "Assets/chaqueta_cuero.png", categoria: "Ropa" },
    { nombre: "Sandalias Veraniegas", precio: 120000, imagen: "Assets/sandalias.png", categoria: "Zapatos" },
    { nombre: "Gorra Deportiva", precio: 40000, imagen: "Assets/gorra.png", categoria: "Accesorios" },
    { nombre: "Reloj Clásico", precio: 180000, imagen: "Assets/reloj.png", categoria: "Accesorios" },
    { nombre: "Camisa Blanca", precio: 90000, imagen: "Assets/camisa_blanca.png", categoria: "Ropa" },
    { nombre: "Jeans Oscuros", precio: 150000, imagen: "Assets/jeans_oscuros.png", categoria: "Ropa" },
    { nombre: "Vestido Floral", precio: 200000, imagen: "Assets/vestido_floral.png", categoria: "Ropa" },
    { nombre: "Botines Negros", precio: 270000, imagen: "Assets/botines_negros.png", categoria: "Zapatos" },
    { nombre: "Anillo de Plata", precio: 50000, imagen: "Assets/anillo_plata.png", categoria: "Accesorios" },
    { nombre: "Bolso de Cuero", precio: 220000, imagen: "Assets/bolso_cuero.png", categoria: "Accesorios" },
    { nombre: "Zapatos de Vestir", precio: 300000, imagen: "Assets/zapatos_vestir.png", categoria: "Zapatos" },
    { nombre: "Bufanda de Lana", precio: 45000, imagen: "Assets/bufanda.png", categoria: "Accesorios" },
    { nombre: "Sombrero de Paja", precio: 70000, imagen: "Assets/sombrero_paja.png", categoria: "Accesorios" },
    { nombre: "Chaleco de Mezclilla", precio: 110000, imagen: "Assets/chaleco_mezclilla.png", categoria: "Ropa" },
];

function cargarProductos() {
    const productGrid = document.querySelector(".product-grid"); // Selecciona el contenedor de productos

    productos.forEach(producto => {
        // Crear el HTML de cada tarjeta de producto
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <div class="product-info">
                <h3>${producto.nombre}</h3>
                <p>Precio: $${producto.precio.toLocaleString()}</p>
                <button class="favorite-btn">Adquirir<i class="far fa-heart"></i></button>
            </div>
        `;

        // Agregar la tarjeta al contenedor
        productGrid.appendChild(productCard);
    });
}

// Llamar a la función para cargar productos cuando la página esté lista
document.addEventListener("DOMContentLoaded", cargarProductos);