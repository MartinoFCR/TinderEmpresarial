document.getElementById('editButton').addEventListener('click', function() {
    // Hacer los campos editables
    const fields = document.querySelectorAll('input');
    fields.forEach(field => field.removeAttribute('readonly')); // Quitar readonly

    // Mostrar el botón de guardar y ocultar el de editar
    document.getElementById('saveButton').style.display = 'inline-block';
    document.getElementById('editButton').style.display = 'none';
});

document.getElementById('saveButton').addEventListener('click', function() {
    // Obtener los valores de los campos
    const nit = document.getElementById('nit').value;
    const razonSocial = document.getElementById('razonSocial').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const ciudad = document.getElementById('ciudad').value;
    const categoria = document.getElementById('categoria').value;
    const direccion = document.getElementById('direccion').value;
    const representante = document.getElementById('representante').value;
    const password = document.getElementById('password').value;

    // Aquí podrías hacer una petición para guardar los cambios, por ejemplo:
    // fetch('/guardar-datos', { method: 'POST', body: JSON.stringify({ nit, razonSocial, email, telefono, ciudad, categoria, direccion, representante, password }) });

    // Cambiar los campos de nuevo a "solo lectura"
    const fields = document.querySelectorAll('input');
    fields.forEach(field => field.setAttribute('readonly', true));

    // Ocultar el botón de guardar y mostrar el de editar
    document.getElementById('saveButton').style.display = 'none';
    document.getElementById('editButton').style.display = 'inline-block';

    alert('Los datos se han guardado correctamente.');
});
