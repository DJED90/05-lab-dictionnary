Projet Dictionary


Bienvenue dans le projet Dictionary, une application web qui vous permet de rechercher des mots, d'obtenir leur définition et d'écouter leur prononciation. Voici un aperçu du code source du fichier index.js de ce projet, qui fait usage de Webpack et GitHub Pages :

Fichier index.js

Le fichier index.js est la partie JavaScript de l'application. Il contient les éléments suivants :

Importations (Imports)


Importe le fichier de style style.sass.

Importe les fonctions obtenirInfosMot, handleFontChange, et responsive_handleFontChange depuis d'autres fichiers.

Définit les fonctions et les gestionnaires d'événements pour l'application.

Gestionnaire de soumission (handleSearch)


Gère le clic sur le bouton de soumission.

Récupère le mot recherché depuis le champ de texte.

Efface les résultats précédents.

Affiche un message d'erreur si aucun mot n'est entré.

Appelle la fonction obtenirInfosMot avec le mot recherché.


Gestion du mode sombre (toggleDarkMode)


Met à jour le mode sombre en fonction de la case à cocher.

Modifie les classes CSS pour activer ou désactiver le mode sombre.

Change le logo en conséquence.



Écouteurs d'événements


Associe des événements aux éléments de l'interface utilisateur pour déclencher les fonctions appropriées.

Gère le changement de mode sombre lorsque la case à cocher est cochée ou décochée.


Fonction du scroll et de l'animation


Met en place une animation de fade in et fade out pour une section responsive.

Gère le scroll de la page et l'animation des boutons en fonction de la position actuelle.


Utilisation de Webpack


Ce projet utilise Webpack pour gérer la compilation des fichiers JavaScript et de style. Vous pouvez trouver les fichiers de configuration de Webpack dans le dossier du projet. Assurez-vous d'installer les dépendances nécessaires en utilisant npm install avant de lancer le projet.

Publication sur GitHub Pages
Ce projet est hébergé sur GitHub Pages, ce qui signifie que vous pouvez accéder à l'application en ligne en suivant le lien : https://djed90.github.io/05-lab-dictionnary/.

Comment utiliser ce fichier
Vous pouvez cloner ou télécharger ce projet depuis lien GitHub.
Ouvrez le fichier index.html dans votre navigateur pour voir l'application en action.
Explorez le code du fichier index.js pour comprendre comment l'application fonctionne.
