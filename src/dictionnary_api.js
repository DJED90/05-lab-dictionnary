export async function obtenirInfosMot(mot) {
  try {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${mot}`);
    const data = await response.json();
    console.log(data);
    // Vérification si la réponse contient des résultats
    if (data.length > 0) {
      const meanings = data[0].meanings;
      const phonetics = data[0].phonetics;
      const container = document.getElementById("word");

      // Modification de la première lettre du mot en majuscule
      const motMajuscule = mot.charAt(0).toUpperCase() + mot.slice(1);

      // Récupération du lien audio
      let audioUrl = ""
      phonetics.forEach((phonetic) => {
        if (phonetic.audio && audioUrl === "") {
          audioUrl = phonetic.audio;

          // Affichage du mot recherché s'il y a un fichier audio (mp3)
          const motParagraphe = document.createElement("h2");
          motParagraphe.innerHTML = `<span>${motMajuscule}</span> <audio controls id="audio-player" src="${audioUrl}" style="display: none;"></audio><img id="audio-icon" src="./image/audio.png" alt="icone haut parleur pour écouter la phonétique" width="20" height="20">`;
          container.appendChild(motParagraphe);

          // Récupération de la fonction de la balise audio sur la balise image pour rendre la fonction de l'audio cliquable sur l'image
          const audioElement = document.getElementById("audio-player");
          const imageElement = document.getElementById("audio-icon");
          imageElement.addEventListener("click", function () {
            if (audioElement.paused) {
              audioElement.play();
            } else {
              audioElement.pause();
            }
          });
        }
      });

      // Vérification s'il n'y a pas de phonétique disponible
      if (phonetics.length === 0) {
        // Affichage du mot recherché s'il n'y a pas de phonétique disponible
        const motParagraphe = document.createElement("h2");
        motParagraphe.innerHTML = `<span>${motMajuscule}</span>`;
        container.appendChild(motParagraphe);
      }

      // Affichage des synonymes
      const synonymsParagraphe = document.createElement("p");
      const allSynonyms = meanings.flatMap((meaning) => meaning.synonyms);
      if (allSynonyms.length > 0) {
        synonymsParagraphe.innerHTML = `<span>Synonyms : </span> ${allSynonyms.join(", ")}`;
        container.appendChild(synonymsParagraphe);
      }

      // Affichage des phonétiques
      const phoneticsParagraphe = document.createElement("p");
      const allPhonetics = phonetics.map((phonetic) => phonetic.text);
      if (allPhonetics.length > 0) {
        phoneticsParagraphe.innerHTML = `<span>Phonetics : </span> ${allPhonetics.join(", ")}`;
        container.appendChild(phoneticsParagraphe);
      }
      //Récupération des natures de mot
      meanings.forEach((meaning) => {
        let partOfSpeech = "";
        if (meaning.partOfSpeech && partOfSpeech === "") {
          partOfSpeech = meaning.partOfSpeech;
        }
        const definitions = meaning.definitions;
        const definitionsParagraphe = document.createElement("p");
        definitionsParagraphe.innerHTML = `<span>Définitions ( of the ${partOfSpeech}) :</span>`;
        container.appendChild(definitionsParagraphe);

        // Affichage des définitions
        const ulDef = document.createElement("ul");
        container.appendChild(ulDef);
        definitions.forEach((definition) => {
          const definitionParagraphe = document.createElement("li");
          definitionParagraphe.textContent = `${definition.definition}`;
          ulDef.appendChild(definitionParagraphe);
        });
      });
    } else {
      const container = document.getElementById("word");
      const errorParagraphe = document.createElement("p");
      errorParagraphe.innerHTML = `No data found for ${mot}`;
      container.appendChild(errorParagraphe);
    }
  } catch (error) {
    console.log(`Une erreur s'est produite: ${error}`);
  }
}