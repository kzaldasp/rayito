// Obtener los elementos necesarios
const playCheckbox = document.getElementById('play');
const audioPlayer = document.getElementById('audio-player');
const vinyl = document.querySelector('.vinyl');  // El vinilo

// Función para manejar el cambio en el checkbox (play/pause)
playCheckbox.addEventListener('change', function() {
    if (playCheckbox.checked) {
        audioPlayer.play(); // Reproducir el audio
        vinyl.classList.add('playing'); // Iniciar la animación de giro
    } else {
        audioPlayer.pause(); // Pausar el audio
        vinyl.classList.remove('playing'); // Detener la animación de giro (se queda en la posición actual)
    }
});
