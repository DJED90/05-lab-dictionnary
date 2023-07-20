import "./style.sass";
async function obtenirInfosMot(mot) {
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${mot}`);
      const data = await response.json();
  
      // Vérification si la réponse contient des résultats
      if (Array.isArray(data) && data.length > 0) {
        const meanings = data[0].meanings;
        const phonetics = data[0].phonetics;
  
        const container = document.getElementById("word");
  
        // Modification de la première lettre du mot en majuscule
      const motMajuscule = mot.charAt(0).toUpperCase() + mot.slice(1);

        // Récupération du lien audio
        const audioUrl = data[0].phonetics[1].audio;

        // Affichage du mot recherché
        const motParagraphe = document.createElement("h2");
        motParagraphe.innerHTML = `<span>${motMajuscule}<span> <audio controls id="audio-player" src="${audioUrl}" style="display: none;"></audio><img id="audio-icon" src="./image/audio.png" alt="icone haut parleur pour ecouter la phonétique" width="20" height="20">`;
        container.appendChild(motParagraphe);

        //Récupération de la fonction de la balise audio sur la balise image pour rendre la fonction de l'audio cliquable sur l'image
        const audioElement = document.getElementById("audio-player");
        const imageElement = document.getElementById("audio-icon");
        imageElement.addEventListener("click", function() {
          if (audioElement.paused) {
            audioElement.play();
          } else {
            audioElement.pause();
          }
        });
        
        // Affichage des synonymes
        const synonymsParagraphe = document.createElement("p");
        const allSynonyms = meanings.flatMap((meaning) => meaning.synonyms);
        synonymsParagraphe.innerHTML = `<span>Synonymes :</span> ${allSynonyms.join(", ")}`;
        container.appendChild(synonymsParagraphe);
  
        // Affichage des phonétiques
        const phoneticsParagraphe = document.createElement("p");
        const allPhonetics = phonetics.map((phonetic) => phonetic.text);
        phoneticsParagraphe.innerHTML = `<span>Phonétiques :</span> ${allPhonetics.join(", ")}`;
        container.appendChild(phoneticsParagraphe);
  
        // Affichage des définitions
        meanings.forEach((meaning, index) => {
            const definitions = meaning.definitions;
            const definitionsParagraphe = document.createElement("p");
            definitionsParagraphe.innerHTML = `<span>Définitions (${index + 1}) :</span>`;
            container.appendChild(definitionsParagraphe);
    
            definitions.forEach((definition) => {
              const definitionParagraphe = document.createElement("p");
              definitionParagraphe.textContent = ` - ${definition.definition}`;
              container.appendChild(definitionParagraphe);
            });
          });
      } else {
        console.log(`Aucune donnée trouvée pour le mot ${mot}.`);
      }
    } catch (error) {
      console.log(`Une erreur s'est produite: ${error}`);
    }
    const imageElement = document.getElementById("audio-icon");
  }
 // Fonction pour gérer le clic sur le bouton de soumission
 function handleSearch() {
    const wordInput = document.getElementById("wordsearch");
    const motRecherche = wordInput.value;

    const container = document.getElementById("word");
    container.innerText = ''; // Supprime les résultats précédents

    // Appeler la fonction obtenirInfosMot avec le mot recherché
    obtenirInfosMot(motRecherche);
  }

  // Associer l'événement clic au bouton de soumission
  const submitButton = document.getElementById("wordsubmit");
  submitButton.addEventListener("click", handleSearch);

// Fonction pour gérer le changement de sélection du type de police
function handleFontChange() {
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

// Appeler la fonction handleFontChange pour initialiser la gestion du changement de police
handleFontChange();

//DARK MODE 
const toggleSwitch = document.querySelector(".checkbox");
const container = document.querySelector("#box");
const logoElement = document.querySelector("#logo");
const originalLogoSrc = logoElement.src;



// Fonction pour mettre à jour le mode sombre
function toggleDarkMode() {
  if (toggleSwitch.checked) {
    logoElement.src = originalLogoSrc;
    container.classList.remove("dark-mode");
  }
  else {
    container.classList.toggle("dark-mode");
    logoElement.src = "./image/logo-dark-mode.png" ;
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
  }
  else {
    container.classList.toggle("dark-mode");
    logoElement.src = "./image/logo-dark-mode.png" ;
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

// Fonction pour gérer le changement de sélection du type de police 2
function responsive_handleFontChange() {
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
// Appeler la fonction handleFontChange pour initialiser la gestion du changement de police
responsive_handleFontChange();