// Obtener los elementos del DOM
const musicPlayer = document.querySelector('.music-player');
const playButton = document.getElementById('play');
const audioPlayer = document.getElementById('audio-player');
const vinyl = document.querySelector(".vinyl");

// Control de rondas
let isPlaying = false; // Verifica si el audio está en reproducción
let rounds = 0;        // Número de rondas completadas
const maxRounds = 10;  // Número máximo de rondas permitidas

// Función para generar flores
function generateFlowers() {
    if (!isPlaying || rounds >= maxRounds) return; // Si está pausado o se alcanzaron las rondas, no hace nada

    // Incrementar el contador de rondas
    rounds++;

    // Limpiar flores previas
    const existingFlowers = document.querySelectorAll('.flw');
    existingFlowers.forEach(flower => flower.remove());

    // Generar un número aleatorio de flores (entre 10 y 20)
    const numFlowers = Math.floor(Math.random() * 16) + 10;

    for (let i = 0; i < numFlowers; i++) {
        const flower = document.createElement('div');
        flower.classList.add('flw');

        // Generar posiciones aleatorias dentro del contenedor
        const x = Math.random() * musicPlayer.clientWidth;
        const y = Math.random() * musicPlayer.clientHeight;

        flower.style.left = `${x}px`;
        flower.style.top = `${y}px`;

        // Añadir al contenedor
        musicPlayer.appendChild(flower);
    }

    // Activar animación de las flores
    const flowers = document.querySelectorAll('.flw');
    flowers.forEach(function(flower) {
        flower.classList.add('animate');
    });

    // Repetir el proceso tras un tiempo
    setTimeout(() => {
        generateFlowers(); // Llamar a la función para la siguiente ronda
    }, 6600); // Duración de cada animación
}

// Manejar el evento de cambio del botón de play/pause
playButton.addEventListener('change', function () {
    if (playButton.checked) { // Si el botón está en play
        isPlaying = true;
        vinyl.classList.remove("paused");
        vinyl.classList.add("playing");
        rounds = 0; // Reinicia las rondas
        audioPlayer.play(); // Reproducir música
        generateFlowers(); // Inicia la generación de flores
    } else { // Si el botón está en pause
        isPlaying = false;
        audioPlayer.pause(); // Pausar música
        vinyl.classList.remove("playing");
        vinyl.classList.add("paused");
        // Detener las animaciones y limpiar las flores
        const flowers = document.querySelectorAll('.flw');
        flowers.forEach(function (flower) {
            flower.classList.remove('animate');
        });

        // Limpiar flores del contenedor
        setTimeout(() => {
            flowers.forEach(flower => flower.remove());
        }, 5000); // Esperar un poco antes de limpiar para que las flores desaparezcan suavemente
    }
});

