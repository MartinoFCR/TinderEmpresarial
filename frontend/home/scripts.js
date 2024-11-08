function changeView(viewPath) {
    const moduleView = document.getElementById('module-view');
    moduleView.innerHTML = "<p>Cargando...</p>";
    fetch(viewPath)
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al cargar la vista: " + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            moduleView.innerHTML = data;
        })
        .catch(error => {
            console.error(error);
            moduleView.innerHTML = "<p>Error al cargar el contenido.</p>";
        });
}

function logout() {
    // Limpiar datos de sesión
    sessionStorage.clear();
    localStorage.clear();
    alert("Sesión cerrada.");
    window.location.href = "../login/login.component.html";
}