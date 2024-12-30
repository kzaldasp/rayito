document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector("#carousel");
    const body = document.body;
    const panels = document.querySelectorAll(".panel");
    const dotsContainer = document.querySelector("#carousel-dots");

    const backgrounds = [
        "url('https://64.media.tumblr.com/aaa66a89ba7874f532f4f772fcee5fd8/cdf196d4b86e7dd6-16/s540x810/29eab0fbe8d19c47109f9b141bc6e6297453ef14.gif')",
        "url('https://i.pinimg.com/originals/57/c5/69/57c5697206091bd39bd90731bbc60a36.gif')",
    ];

    let currentIndex = 0;

    // Función para cambiar la imagen de fondo
    const updateBackground = () => {
        body.style.setProperty("--background-image", backgrounds[currentIndex]);
    };

    // Crear puntos según la cantidad de paneles
    const createDots = () => {
        panels.forEach(() => {
            const dot = document.createElement("span");
            dotsContainer.appendChild(dot);
        });
        updateDotActiveState();
    };

    // Actualizar el estado activo de los puntos
    const updateDotActiveState = () => {
        const dots = dotsContainer.querySelectorAll("span");
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add("active");
            } else {
                dot.classList.remove("active");
            }
        });
    };

    // Avanzar al siguiente panel
    const goToNextPanel = () => {
        currentIndex = (currentIndex + 1) % panels.length;
        carousel.scrollTo({
            left: currentIndex * carousel.clientWidth,
            behavior: "smooth"
        });
        updateBackground();
        updateDotActiveState();
    };

    // Iniciar el carrusel dinámico
    setInterval(goToNextPanel, 3000); // Cambia cada 3 segundos

    // Detectar el scroll y cambiar el fondo
    carousel.addEventListener("scroll", () => {
        const scrollPosition = carousel.scrollLeft;
        const totalWidth = carousel.scrollWidth - carousel.clientWidth;
        const index = Math.round((scrollPosition / totalWidth) * (panels.length - 1));
        currentIndex = index;
        updateBackground();
        updateDotActiveState();
    });

    // Llamar a la función para crear los puntos al cargar
    createDots();
});
