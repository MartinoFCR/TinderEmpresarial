// Función para mostrar el formulario de usuario y ocultar el de empresa
function showUserForm() {
    document.getElementById('userForm').style.display = 'block';
    document.getElementById('companyForm').style.display = 'none';
    hideErrors();

    // Cambiar estilos de los botones
    document.getElementById('userButton').classList.add('active');
    document.getElementById('companyButton').classList.remove('active');
}

// Función para mostrar el formulario de empresa y ocultar el de usuario
function showCompanyForm() {
    document.getElementById('userForm').style.display = 'none';
    document.getElementById('companyForm').style.display = 'block';
    hideErrors();

    // Cambiar estilos de los botones
    document.getElementById('userButton').classList.remove('active');
    document.getElementById('companyButton').classList.add('active');
}

// Ocultar errores al cambiar de formulario
function hideErrors() {
    document.getElementById('userError').style.display = 'none';
    document.getElementById('companyError').style.display = 'none';
}

// Manejo del envío del formulario de login
function handleLogin(event, userType) {
    document.getElementById("userForm").addEventListener("submit", async function(event) {
    event.preventDefault(); // Prevenir el comportamiento de envío del formulario

    // Obtener el correo y la contraseña según el tipo de usuario
    const userEmail = userType === 'user' ? document.getElementById('userEmail').value : document.getElementById('companyEmail').value;
    const userPassword = userType === 'user' ? document.getElementById('userPassword').value : document.getElementById('companyPassword').value;

    // Validar las credenciales (simulación)
    try {
        const response = await fetch("http://localhost:8000/api/login/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ userEmail, userPassword }),
        });
        const data = await response.json();
        console.log(data);
        const messageDiv = document.getElementById("userMessage");

        if (response.ok) {
            messageDiv.innerText = "Inicio de sesión exitoso";
            window.location.href = "../home/home.component.html";
            localStorage.setItem("access_token", data.access);
            localStorage.setItem("refresh_token", data.refresh);
        } else {
            messageDiv.innerText = data.error || "Error al iniciar sesión";
        }
    } catch (error) {
        console.error("Error:", error);
    }
    });
    // Si las credenciales son correctas, redirigir al usuario
    //window.location.href = "../home/home.component.html"; // Cambia esta ruta a tu página de inicio
    //return true; // Asegura que el formulario se envíe si se necesita -->
    
}



// Redirigir a la página de crear cuenta cuando se hace clic en "Crear Cuenta"
document.getElementById('createAccountLink').addEventListener('click', function() {
    window.location.href = "../signup/signup.component.html";
});
