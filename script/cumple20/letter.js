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
        const loremText = `Querida rayito de sol
En este día tan especial, quiero expresarte lo agradecido que estoy con la vida por habernos hecho coincidir. Este mes que hemos compartido ha sido suficiente para que te conviertas en mi persona favorita, en ese ser especial que ilumina mis días con tu presencia. Con esos ojos cautivadores y tu personalidad única me ha demostrado lo especial que eres. Gracias por llegar a mi vida y llenarla de esa felicidad única que solo tú sabes brindar.
En tu cumpleaños, quiero que sepas que creo firmemente en ti y en todos esos sueños que me has compartido. Sé que eres capaz de lograr todo lo que te propongas, porque he sido testigo de tu determinación y fortaleza.
Que este nuevo año de vida venga cargado de éxitos y alegrías. Que cada meta que te propongas se materialice, porque tienes la capacidad y la luz interior para alcanzar todo lo que desees. Que nunca se apague esa chispa tan especial que llevas dentro.
Mi más profundo deseo es poder celebrar muchos más cumpleaños a tu lado, mi hermoso rayito de sol, porque desde que llegaste, has iluminado mi vida de una manera que jamás imaginé posible. ¡Feliz cumpleaños! Que este día esté lleno de sonrisas, abrazos y momentos inolvidables junto a tus seres queridos.
Con cariño sincero...

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
