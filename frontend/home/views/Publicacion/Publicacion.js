<script>
    function aceptarPublicacion() {
        const texto = document.getElementById("publicacion-text").value;
        if (texto.trim() !== "") {
            document.getElementById("preview-content").innerText = texto;
        } else {
            alert("Por favor, escribe algo en el cuadro de texto.");
        }
    }

    function rechazarPublicacion() {
        document.getElementById("publicacion-text").value = ""; // Limpiar el texto
        document.getElementById("preview-content").innerText = ""; // Limpiar la vista previa
    }
</script>
