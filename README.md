<h1 align="center">Application de Dictionnaire</h1>

## Table des matières
- [Introduction](#introduction)
- [Tâches et Opérations](#tâches-et-opérations)
  - [Contexte](#contexte)
  - [Architecture du Site](#architecture-du-site)
  - [Animations](#animations)
  - [Intégration](#intégration)
  - [Déploiement](#déploiement)
- [Moyens Utilisés](#moyens-utilisés)
---
## Demo

Ce projet est hébergé sur GitHub Pages, ce qui signifie que vous pouvez accéder à l'application en ligne en suivant le lien : [Dictionnaire en Ligne](https://djed90.github.io/05-lab-dictionnary/).

---


## Introduction

Bienvenue dans la documentation de l'application de dictionnaire. Cette application a été conçue pour fournir aux utilisateurs des informations sur les mots, y compris la prononciation, les définitions et les synonymes. Vous trouverez ci-dessous des détails sur les tâches effectuées, le contexte de développement, les moyens utilisés, et plus encore.

---

## Tâches et Opérations

### Contexte

L'objectif principal de cette application était de créer un dictionnaire en ligne qui s'appuie sur une API de dictionnaire pour obtenir des informations sur les mots. Voici un aperçu des opérations effectuées :

### Architecture du Site

Pour concevoir l'interface utilisateur de l'application, nous nous sommes inspirés du site [dictionary.com](https://www.dictionary.com/). L'architecture de notre site comprend les éléments suivants :

- Un en-tête avec un logo.
- Une barre de recherche pour saisir les mots à rechercher.
- Des boutons radio pour choisir la police du texte.
- Un bouton pour activer ou désactiver le mode sombre.
- Une section de résultats pour afficher la prononciation, les définitions et les synonymes.

### Animations

Nous avons ajouté des fonctionnalités interactives à la page en utilisant un fichier JavaScript ("index.js"). Nous avons également inclus des animations pour les transitions, telles que le fondu d'entrée et de sortie de la section "responsive". De plus, nous avons implémenté un interrupteur pour activer ou désactiver le mode sombre, qui modifie les couleurs de fond et de texte pour un aspect sombre.

### Intégration

Pour rechercher un mot, nous avons écrit une fonction déclenchée lorsque l'utilisateur clique sur le bouton de recherche. Cette fonction récupère le mot saisi par l'utilisateur, vérifie s'il est vide, puis effectue une requête API pour obtenir des informations sur le mot recherché. Les résultats, y compris la prononciation, les définitions et les synonymes, sont affichés dans la section dédiée de la page. En cas d'absence de résultats, un message d'erreur est affiché. Pour le changement de police, des fonctions ont été créées pour permettre à l'utilisateur de personnaliser le texte affiché en fonction de la sélection des boutons radio.

### Déploiement

Une fois l'intégration terminée et les tests réussis, le site a été déployé en utilisant le service d'hébergement web fiable GitPage. Nous avons veillé à ce que le domaine soit facilement accessible pour les visiteurs, assurant ainsi une visibilité optimale de notre portfolio en ligne.

---

## Moyens Utilisés

Les moyens suivants ont été utilisés pour développer cette application de dictionnaire :

- WebPack
- NodeJS
- Npm
- Figma (pour la conception de la maquette)
- Google (pour la recherche d'inspiration)
- ChatGPT (pour des informations et des conseils)
- API Dictionnary (pour obtenir des informations sur les mots)
- SASS (pour la gestion des styles)
- Uiverse (pour des éléments de design)
- Vistaprint-Logo (pour la création du logo)
- GIT/GITHUB/GITPAGE (pour le contrôle de version et le déploiement)

---

C'est tout pour le README de cette application de dictionnaire. Si vous avez des questions ou avez besoin de plus d'informations, n'hésitez pas à nous contacter. Bonne utilisation de l'application !
