import "./style.sass";
import {obtenirInfosMot} from "./dictionnary_api";
import {handleFontChange,responsive_handleFontChange} from "./font_change";
 // Fonction pour gérer le clic sur le bouton de soumission
 function handleSearch() {
    const wordInput = document.getElementById("wordsearch");
    const motRecherche = wordInput.value;
    const container = document.getElementById("word");
    const errorElement = document.getElementById("error");
    container.innerText = ''; // Supprime les résultats précédents
    if (motRecherche.trim() === "") {
      // Afficher l'élément #error s'il n'y a pas de mot recherché
      errorElement.style.display = "block";
      // Masquer les résultats précédents
      container.innerHTML = "";
    } else {
      // Masquer l'élément #error s'il y a un mot recherché
      errorElement.style.display = "none";
      // Appeler la fonction obtenirInfosMot avec le mot recherché
      obtenirInfosMot(motRecherche);
    }
  }

  // Associer l'événement clic au bouton de soumission
  const submitButton = document.getElementById("wordsubmit");
  submitButton.addEventListener("click", handleSearch);

// Appeler la fonction handleFontChange pour initialiser la gestion du changement de police
handleFontChange();

//DARK MODE 
const toggleSwitch = document.querySelector(".checkbox");
const container = document.querySelector("#container");
const box = document.querySelector("#box");
const logoElement = document.querySelector("#logo");
const originalLogoSrc = logoElement.src;


// Fonction pour mettre à jour le mode sombre
function toggleDarkMode() {
  if (toggleSwitch.checked) {
    logoElement.src = originalLogoSrc;
    container.classList.remove("dark-mode");
    box.classList.remove("dark-mode");
  }
  else {
    container.classList.toggle("dark-mode");
    box.classList.toggle("dark-mode");
    logoElement.src = "./image/logo-dark-mode.webp" ;
  }
}

// Écoute de l'événement de changement de la case à cocher
toggleSwitch.addEventListener("change", () => {
  if (toggleSwitch.checked) {
    toggleDarkMode();
  } else {
    toggleDarkMode();
  }
});

//DARK MODE 2
const responsive_toggleSwitch = document.querySelector(".responsive-checkbox");

// Fonction pour mettre à jour le mode sombre
function responsive_toggleDarkMode() {
  if (responsive_toggleSwitch.checked) {
    logoElement.src = originalLogoSrc;
    container.classList.remove("dark-mode");
    box.classList.remove("dark-mode");
  }
  else {
    container.classList.toggle("dark-mode");
    box.classList.toggle("dark-mode");
    logoElement.src = "./image/logo-dark-mode.webp" ;
  }
}
// Écoute de l'événement de changement de la case à cocher
responsive_toggleSwitch.addEventListener("change", () => {
  if (responsive_toggleSwitch.checked) {
    responsive_toggleDarkMode();
  } else {
    responsive_toggleDarkMode();
  }
});

// Appeler la fonction handleFontChange pour initialiser la gestion du changement de police
responsive_handleFontChange();

// Fonction du scroll et de l'animation des boutons //
var derniere_position_de_scroll_connue = 0;
var ticking = false;

document.addEventListener("DOMContentLoaded", function () {
  const responsive = document.querySelector(".responsive");
  responsive.classList.add("fadeIn");
});

function faireQuelqueChose(position_scroll) {
  if (position_scroll= derniere_position_de_scroll_connue) {}
  const responsive = document.querySelector(".responsive");
  responsive.classList.add("fadeOut");
}

window.addEventListener('scroll', function(e) {
  derniere_position_de_scroll_connue = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      faireQuelqueChose(derniere_position_de_scroll_connue);
      ticking = false;
    });
  }

  ticking = true;
    setTimeout(function () {
      const responsive = document.querySelector(".responsive");
      responsive.classList.remove("fadeOut");
    }, 2500);
});