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
