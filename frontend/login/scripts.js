// scripts.js

// Redirigir al home cuando se hace clic en "Iniciar Sesión"
document.getElementById('loginButton').addEventListener('click', function() {
    window.location.href = "/ruta/a/tu/pagina/home.html";
});

// Redirigir a la página de crear cuenta cuando se hace clic en "Crear Cuenta"
document.getElementById('createAccountLink').addEventListener('click', function() {
    window.location.href = "/ruta/a/tu/pagina/crear-cuenta.html";
});
