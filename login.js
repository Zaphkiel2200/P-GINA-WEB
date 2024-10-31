document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("login-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar el envío del formulario

        // Obtener los valores de los campos
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Obtener usuarios de localStorage
        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        // Buscar el usuario con el correo y contraseña ingresados
        const usuario = usuarios.find(u => u.email === email && u.password === password);

        if (usuario) {
            // Si el usuario es válido, redirigir a MainPage.html
            alert("Inicio de sesión exitoso");
            window.location.href = "MainPage.html";
        } else {
            // Mostrar mensaje de error si las credenciales no coinciden
            alert("Correo electrónico o contraseña incorrectos");
        }
    });
});
