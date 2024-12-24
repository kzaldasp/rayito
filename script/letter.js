document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.start-writing');
    const letterContent = document.querySelector('.letter-content');
    const navigateButton = document.querySelector('.navigate-btn'); // Botón VAMOS

    button.addEventListener('click', function () {
        audioPlayer.pause(); // Reproducir música

        const audio = document.getElementById('song');
        audio.play(); // Reproducir canción
        // Ocultar el botón de inicio
        button.style.display = 'none';

        // Mostrar la carta y empezar a escribir
        const loremText = `Lorem ipsum dolor 
        sit amet, consectetur. Vestibulum sed blandit neque. Integer et mauris quis libe
        Loreminpu Lorem ipsum dolor 
        sit amet, consectetur. Vestibulum sed blandit neque. Integer et mauris quis libe
        LoreminpuLorem ipsum dolor 
        sit amet, consectetur. Vestibulum sed blandit neque. Integer et mauris quis libe
        Loreminpu Lorem ipsum dolor 
        sit amet, consectetur. Vestibulum sed blandit neque. Integer et mauris quis libe
        LoreminpuLorem ipsum dolor 
        sit amet, consectetur. Vestibulum sed blandit neque. Integer et mauris quis libe
        Loreminpu
        `;

        let index = 0;
        letterContent.classList.add('visible'); // Mostrar la carta

        // Animar el texto
        const interval = setInterval(() => {
            letterContent.textContent += loremText[index];
            index++;

            // Cuando el texto haya terminado de escribir, mostramos el botón "Vámos"
            if (index === loremText.length) {
                clearInterval(interval);
                navigateButton.style.display = 'block'; // Muestra el botón
                audio.pause(); // Detener el audio
                audio.currentTime = 0; // Reiniciar el audio al inicio (opcional)
            }
        }, 50); // Tiempo entre cada letra

    });
});
