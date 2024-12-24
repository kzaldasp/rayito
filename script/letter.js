document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.start-writing');
    const letterContent = document.querySelector('.letter-content');
    const navigateButton = document.querySelector('.navigate-btn'); // Botón VAMOS

    button.addEventListener('click', function () {
        // Ocultar el botón de inicio
        button.style.display = 'none';

        // Mostrar la carta y empezar a escribir
        const loremText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula turpis id volutpat ultricies. Morbi eget urna aliquam, tincidunt augue non, eleifend turpis. Nullam a dapibus diam. Maecenas sit amet efficitur neque. Donec pretium suscipit lectus, vel suscipit neque. Morbi consequat scelerisque lorem et placerat. Mauris rhoncus, tellus vulputate commodo ornare, libero nulla blandit leo, sed vestibulum est arcu a velit. Vestibulum sed blandit neque. Integer et mauris quis libe`;

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
            }
        }, 50); // Tiempo entre cada letra
    });
});
