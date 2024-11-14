// Función para mostrar el formulario de usuario y ocultar el de empresa
function showUserForm() {
    document.getElementById('userForm').style.display = 'block';
    document.getElementById('companyForm').style.display = 'none';
    hideErrors();

    // Ocultar el botón de "Empresa" cuando se muestra el formulario de "Usuario"
    document.getElementById('companyButton').style.display = 'none';

    // Mostrar el botón de "Volver"
    document.getElementById('userButton').style.display = 'block';

    // Cambiar estilos de los botones
    document.getElementById('userButton').classList.add('active');
    document.getElementById('companyButton').classList.remove('active');
}

// Función para mostrar el formulario de empresa y ocultar el de usuario
function showCompanyForm() {
    document.getElementById('userForm').style.display = 'none';
    document.getElementById('companyForm').style.display = 'block';
    hideErrors();

    // Ocultar el botón de "Usuario" cuando se muestra el formulario de "Empresa"
    document.getElementById('userButton').style.display = 'none';

    // Mostrar el botón de "Volver"
    document.getElementById('companyButton').style.display = 'block';

    // Cambiar estilos de los botones
    document.getElementById('companyButton').classList.add('active');
    document.getElementById('userButton').classList.remove('active');
}

// Ocultar errores al cambiar de formulario
function hideErrors() {
    document.getElementById('userError').style.display = 'none';
    document.getElementById('companyError').style.display = 'none';
}

// Función para ocultar los formularios y volver a la pantalla principal
function goBack() {
    document.getElementById('userForm').style.display = 'none';
    document.getElementById('companyForm').style.display = 'none';
    hideErrors();

    // Mostrar ambos botones
    document.getElementById('userButton').style.display = 'block';
    document.getElementById('companyButton').style.display = 'block';

    // Remover la clase activa de ambos botones
    document.getElementById('userButton').classList.remove('active');
    document.getElementById('companyButton').classList.remove('active');
}

// Función para manejar el envío del formulario de login
function handleLogin(event, userType) {
    event.preventDefault(); // Prevenir el comportamiento de envío del formulario

    // Obtener el correo y la contraseña según el tipo de usuario
    const userEmail = userType === 'user' ? document.getElementById('userEmail').value : document.getElementById('companyEmail').value;
    const userPassword = userType === 'user' ? document.getElementById('userPassword').value : document.getElementById('companyPassword').value;

    // Credenciales simuladas para la validación (esto sería reemplazado por una llamada a tu API backend)
    const validUserCredentials = {
        email: 'usuario@example.com',
        password: 'usuario123'
    };

    const validCompanyCredentials = {
        email: 'empresa@example.com',
        password: 'empresasa123'
    };

    let isValid = false;
    let errorId = '';

    // Verificar si las credenciales son correctas
    if (userType === 'user') {
        if (userEmail === validUserCredentials.email && userPassword === validUserCredentials.password) {
            isValid = true;
        } else {
            errorId = 'userError';
        }
    } else if (userType === 'company') {
        if (userEmail === validCompanyCredentials.email && userPassword === validCompanyCredentials.password) {
            isValid = true;
        } else {
            errorId = 'companyError';
        }
    }

    // Mostrar mensaje de error si las credenciales son incorrectas
    if (!isValid) {
        document.getElementById(errorId).style.display = 'block';
        return false;
    }

    // Si las credenciales son correctas, redirigir al home
    window.location.href = "../home/home.component.html";
    return true;
}

// Redirigir al home cuando se hace clic en "Iniciar Sesión"
document.getElementById('loginButton').addEventListener('click', function() {
    window.location.href = "../home/home.component.html";
});

// Redirigir a la página de crear cuenta cuando se hace clic en "Crear Cuenta"
document.getElementById('createAccountLink').addEventListener('click', function() {
    window.location.href = "../signup/signup.component.html";
});
