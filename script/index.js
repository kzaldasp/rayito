// Agregar evento a todas las flechas
document.addEventListener('DOMContentLoaded', function () {
    const scrollButtons = document.querySelectorAll('.scroll-down');

    scrollButtons.forEach((button) => {
        button.addEventListener('click', function () {
            const nextSection = button.parentElement.nextElementSibling;

            if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave
            }
        });
    });
});
