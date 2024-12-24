// Función para comenzar a escribir texto
function startTyping(captionElement, textToWrite, typingSpeed) {
    let i = 0;
  
    // Limpiar el contenido previo de la caption
    captionElement.textContent = ""; 
    
    // Crear el intervalo para escribir el texto carácter por carácter
    const typingInterval = setInterval(function () {
      if (i < textToWrite.length) {
        captionElement.textContent += textToWrite.charAt(i);  // Escribir una letra
        i++;
      } else {
        clearInterval(typingInterval);  // Detener el intervalo cuando termine el texto
      }
    }, typingSpeed);  // Intervalo de tiempo entre caracteres
  }
  
  // Añadir eventos de clic a las imágenes
  document.querySelectorAll('.polaroid img').forEach((img, index) => {
    img.addEventListener('click', () => {
      // Obtener el div.caption correspondiente
      const captionElement = img.closest('.polaroid').querySelector('.caption');
  
      // Determinar el texto que se debe escribir para cada imagen
      let textToWrite = "";
      switch (index) {
        case 0:
          textToWrite = "Eres arte";
          break;
        case 1:
          textToWrite = "La belleza está en los ojos de quien mira";
          break;
        case 2:
          textToWrite = "El arte transforma el alma";
          break;
        case 3:
          textToWrite = "Inspiras creatividad";
          break;
        case 4:
          textToWrite = "Vivir es crear";
          break;
        default:
          textToWrite = "";
          break;
      }
  
      // Llamar a la función de escritura
      startTyping(captionElement, textToWrite, 100);
    });
  });
  