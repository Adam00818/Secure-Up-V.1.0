// Función para obtener la ubicación y crear el enlace de WhatsApp
function sendLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const message = `Mi ubicación es: https://www.google.com/maps?q=${latitude},${longitude}`;

            // Actualizar mensaje en la página
            document.getElementById('locationMessage').innerHTML = "Ubicación obtenida. Enviando...";

            // Enlace para enviar el mensaje por WhatsApp
            const whatsappLink = `https://wa.me/?text=${encodeURIComponent(message)}`;
            window.open(whatsappLink, '_blank'); // Abre WhatsApp con el mensaje
        }, function(error) {
            document.getElementById('locationMessage').innerHTML = "No se pudo obtener la ubicación.";
        });
    } else {
        document.getElementById('locationMessage').innerHTML = "Tu navegador no soporta geolocalización.";
    }
}

// Función para llamar a emergencias
function emergencyCall() {
    const emergencyNumber = "112"; // Número de emergencias (puedes cambiarlo si es necesario)
    window.location.href = `tel:${emergencyNumber}`; // Llama al número de emergencias
}

// Añadir evento al botón de enviar ubicación
document.getElementById('sendLocationBtn').addEventListener('click', sendLocation);

// Añadir evento al botón de llamar a emergencias
document.getElementById('emergencyCallBtn').addEventListener('click', emergencyCall);
