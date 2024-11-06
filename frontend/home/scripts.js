// Función para cambiar la vista al hacer clic en un módulo
function changeView(viewPath) {
    // Al hacer clic, mostramos el contenido correspondiente
    fetch(viewPath)
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al cargar la vista: " + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            // Insertamos la vista en el contenedor #module-view
            document.getElementById('module-view').innerHTML = data;
        })
        .catch(error => {
            console.error(error);
            // Si hay error, mostramos un mensaje
            document.getElementById('module-view').innerHTML = "<p>Error al cargar el contenido.</p>";
        });
}

// Función para cerrar sesión
function logout() {
    alert("Sesión cerrada.");
    // Redirige al login después de cerrar sesión
    window.location.href = "../login/login.component.html";
}
