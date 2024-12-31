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
    setInterval(goToNextPanel, 3500); // Cambia cada 3 segundos

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

    class Countdown {
        constructor(el){
          this.el = el;
          this.targetDate = new Date(el.getAttribute("date-time"));
          this.createCountDownParts()
          this.countdownFunction();
          this.countdownLoopId = setInterval(this.countdownFunction.bind(this), 1000)
        }
        createCountDownParts(){
          ["days", "hours", "minutes", "seconds"].forEach(part => {
            const partEl = document.createElement("div");
            partEl.classList.add("part", part);
            const textEl = document.createElement("div");
            textEl.classList.add("text");
            textEl.innerText = part;
            const numberEl = document.createElement("div");
            numberEl.classList.add("number");
            numberEl.innerText = 0;
            partEl.append(numberEl, textEl);
            this.el.append(partEl);
            this[part] = numberEl;
          })
        }
      
        countdownFunction(){
          const currentDate = new Date();    
          if(currentDate > this.targetDate) return clearInterval(this.countdownLoopId);
          const remaining = this.getRemaining(this.targetDate, currentDate);
          Object.entries(remaining).forEach(([part,value]) => {
            this[part].style.setProperty("--value", value)
            this[part].innerText = value
          })  
        }
        
        getRemaining(target, now){
          let seconds = Math.floor((target - (now))/1000);
          let minutes = Math.floor(seconds/60);
          let hours = Math.floor(minutes/60);
          let days = Math.floor(hours/24);
          hours = hours-(days*24);
          minutes = minutes-(days*24*60)-(hours*60);
          seconds = seconds-(days*24*60*60)-(hours*60*60)-(minutes*60);
          return { days, hours, minutes, seconds }      
        }
      
      }
      
      const countdownEls= document.querySelectorAll(".countdown") || [];
      countdownEls.forEach(countdownEl => new Countdown(countdownEl))
      

// Obtén el botón
const btn = document.getElementById("countdown-btn");

// Establece la fecha actual y la fecha objetivo
const currentDate = new Date();
const targetDate = new Date("2025-01-01T00:00:00");

// Verifica si la fecha actual es igual o posterior a la fecha objetivo
if (currentDate >= targetDate) {
    // Remueve la clase 'disabled' para habilitar el botón
    btn.classList.remove("disabled");
} else {
    // Calcula cuánto tiempo falta para la fecha objetivo
    const timeUntilTarget = targetDate - currentDate;

    // Programa la habilitación del botón cuando llegue la fecha objetivo
    setTimeout(() => {
        btn.classList.remove("disabled");
    }, timeUntilTarget);
}


});
