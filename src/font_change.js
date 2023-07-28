// Fonction pour gérer le changement de sélection du type de police 
export function responsive_handleFontChange() {
    const responsive_radios = document.getElementsByName("responsive-radio");
    const container = document.getElementById("word");
  
    responsive_radios.forEach((radio) => {
      radio.addEventListener("change", () => {
        const selectedFont = radio.nextElementSibling.textContent.trim();
        
        // Changer le style de police en fonction de la police sélectionnée
        switch (selectedFont) {
          case "Sans Serif":
            container.style.fontFamily = "sans-serif";
            break;
          case "Serif":
            container.style.fontFamily = "serif";
            break;
          case "Monospace":
            container.style.fontFamily = "monospace";
            break;
          default:
            container.style.fontFamily = "";
            break;
        }
      });
    });
    
  }
  // Fonction pour gérer le changement de sélection du type de police
export function handleFontChange() {
    const radios = document.getElementsByName("radio");
    const container = document.getElementById("word");
  
    radios.forEach((radio) => {
      radio.addEventListener("change", () => {
        const selectedFont = radio.nextElementSibling.textContent.trim();
        
        // Changer le style de police en fonction de la police sélectionnée
        switch (selectedFont) {
          case "Sans Serif":
            container.style.fontFamily = "sans-serif";
            break;
          case "Serif":
            container.style.fontFamily = "serif";
            break;
          case "Monospace":
            container.style.fontFamily = "monospace";
            break;
          default:
            container.style.fontFamily = "";
            break;
        }
      });
    });
  }