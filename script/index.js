const gif = document.querySelector('.floating-gif'); // Selecciona el GIF
const hero = document.querySelector('.hero'); // Selecciona la sección .hero

// Detectar cuando el GIF está cruzando
gif.addEventListener('animationiteration', () => {
    hero.classList.add('white-background'); // Cambiar fondo a blanco

    // Volver al fondo original después de 2 segundos
    setTimeout(() => {
        hero.classList.remove('white-background');
    }, 2000);
});
