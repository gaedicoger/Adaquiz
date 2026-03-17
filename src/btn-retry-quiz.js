// JS Page fin : Ecouter le bouton pour réinitialiser

import { startScreen } from "./start";

//todo code à introduire dans main.js :

/* 
- récupérer le fichier js

import "./es-end-screen-btn-reset.js"

- récupérer le bouton de la div class="endScreen"

const btnRetry = document.getElementById("retryQuiz");

- écouter le bouton et déclencher la fonction

btnRetry.addEventListener("click", (retryQuiz) => {
    retryQuiz();
    });

*/

//! Création d'une fonction qui sera ensuite utilisée dans main.js

export function retryQuiz() {
  // Quand l’utilisateur clique sur "Recommencer":
  score = 0; // réinitialiser le score,
  // GO: inutile l'index de la réponse ne s'affiche quand le quiz est commencé en lien avec les questions:
  // réinitialiser l'index des questions //* let indexAnswers
  // vider le localStorage (bonus) pourquoi faire alors qu'on veut concerver justement un historique des score grâce au local storage
  const endScreen = document.querySelector("endScreen");
  endScreen.classList.add("hidden"); //masquer l’écran de fin
  startScreen(); //Afficher l'écran start // cacher le bouton "Question suivante"
}
