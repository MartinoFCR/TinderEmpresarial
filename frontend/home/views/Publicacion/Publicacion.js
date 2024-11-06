<script>
    // Función para aceptar la publicación y mostrar el contenido en vista previa
    function aceptarPublicacion() {
        const texto = document.getElementById("publicacion-text").value;
        if (texto.trim() !== "") {
            // Mostrar el texto ingresado en la vista previa
            document.getElementById("preview-content").innerText = texto;
        &rbrace; else {
            // Mostrar alerta si el campo de texto está vacío
            alert("Por favor, escribe algo en el cuadro de texto.");
        }
    }

    // Función para rechazar la publicación y limpiar los campos
    function rechazarPublicacion() {
        // Limpiar el texto del cuadro de entrada
        document.getElementById("publicacion-text").value = ""
        // Limpiar la vista previa del contenido
        document.getElementById("preview-content").innerText = "";
    }
</script>
