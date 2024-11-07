// scripts.js
function changeView(viewPath) {
    fetch(viewPath)
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al cargar la vista: " + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('contentArea').innerHTML = data;
        })
        .catch(error => {
            console.error(error);
            document.getElementById('contentArea').innerHTML = "<p>Error al cargar el contenido.</p>";
        });
}

function logout() {
    alert("Sesión cerrada.");
    window.location.href = "/proyecto xamp/Proyectos/InterfasTinder/login/login.component.html";
}
