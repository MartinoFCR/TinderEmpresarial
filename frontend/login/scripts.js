// Función para mostrar el formulario de usuario y ocultar el de empresa
function showUserForm() {
    // Mostrar formulario de usuario
    document.getElementById('userForm').style.display = 'block';
    // Ocultar formulario de empresa
    document.getElementById('companyForm').style.display = 'none';
    // Ocultar el mensaje de "¿No tienes una cuenta? Crear cuenta"
    document.getElementById('signupPrompt').style.display = 'none';
    // Mostrar el botón de "Volver" y ocultar el otro
    document.getElementById('companyButton').style.display = 'none';
    document.getElementById('userButton').style.display = 'inline';
}

// Función para mostrar el formulario de empresa y ocultar el de usuario
function showCompanyForm() {
    // Mostrar formulario de empresa
    document.getElementById('companyForm').style.display = 'block';
    // Ocultar formulario de usuario
    document.getElementById('userForm').style.display = 'none';
    // Ocultar el mensaje de "¿No tienes una cuenta? Crear cuenta"
    document.getElementById('signupPrompt').style.display = 'none';
    // Mostrar el botón de "Volver" y ocultar el otro
    document.getElementById('userButton').style.display = 'none';
    document.getElementById('companyButton').style.display = 'inline';
}

// Función para volver a la pantalla principal
function goBack() {
    // Ocultar ambos formularios
    document.getElementById('userForm').style.display = 'none';
    document.getElementById('companyForm').style.display = 'none';
    // Mostrar el mensaje de "¿No tienes una cuenta? Crear cuenta"
    document.getElementById('signupPrompt').style.display = 'block';
    // Mostrar los botones de selección (Usuario y Empresa)
    document.getElementById('companyButton').style.display = 'inline';
    document.getElementById('userButton').style.display = 'inline';
}

// Función para manejar el login de usuario y empresa
function handleLogin(event, userType) {
    event.preventDefault();

    if (userType === 'user') {
        // Obtener los valores de los campos del formulario de usuario
        var email = document.getElementById('userEmail').value;
        var password = document.getElementById('userPassword').value;

        // Validar las credenciales (esto es solo un ejemplo, puedes agregar tu lógica aquí)
        if (email === 'usuario@ejemplo.com' && password === 'contraseña123') {
            alert('Bienvenido Usuario');
            // Redirigir a la página principal del usuario o realizar alguna otra acción
        } else {
            // Mostrar mensaje de error
            document.getElementById('userError').style.display = 'block';
        }
    } else if (userType === 'company') {
        // Obtener los valores de los campos del formulario de empresa
        var email = document.getElementById('companyEmail').value;
        var password = document.getElementById('companyPassword').value;

        // Validar las credenciales (esto es solo un ejemplo, puedes agregar tu lógica aquí)
        if (email === 'empresa@ejemplo.com' && password === 'contraseña456') {
            alert('Bienvenido Empresa');
            // Redirigir a la página principal de la empresa o realizar alguna otra acción
        } else {
            // Mostrar mensaje de error
            document.getElementById('companyError').style.display = 'block';
        }
    }
}
