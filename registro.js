document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita el envío del formulario

        // Obtener los valores de los campos
        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        // Validar contraseñas
        if (password !== confirmPassword) {
            alert("Las contraseñas no coinciden");
            return;
        }

        // Crear el usuario y guardarlo en localStorage
        const usuario = { nombre, email, password };

        // Recuperar usuarios almacenados o inicializar el arreglo
        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        
        // Verificar si el email ya existe
        const existeUsuario = usuarios.find(u => u.email === email);
        if (existeUsuario) {
            alert("El correo electrónico ya está registrado");
            return;
        }

        // Agregar el nuevo usuario y guardarlo en localStorage
        usuarios.push(usuario);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        alert("Cuenta creada con éxito");

        // Redirigir a la página de inicio de sesión
        window.location.href = "login.html";
    });
});
