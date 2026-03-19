// ========================= ECRAN D'ACCUEIL ==========================

// imports

import quiz from "./quiz-femmes-scientifiques.json";
import { showQuestion } from "./quiz-display.js";
import { initNextButton } from "./btn-next-question.js";
import { initLives } from "./systeme-de-vie.js";

// DOM

const displayQuizScreen = document.querySelector("#questions-container");
const startButton = document.getElementById("startButton"); //Récupérer le bouton start

// écoute bouton démarrer

startButton.addEventListener("click", () => {
  const welcome = document.querySelector(".welcome"); //récupérer la div welcome
  welcome.classList.add("hidden");
  displayQuizScreen.classList.remove("hidden");
  document.querySelector(".questions > header > h1").innerText = quiz.title;
  showQuizScreen();
});

/**
 * showQuizScreen() permet :
 * - d'afficher l'écran de quiz
 * - d'initialiser le bouton question suivante
 * - d'initialiser le nombre de vies
 */

export function showQuizScreen() {
  showQuestion();
  initNextButton();
  initLives();
}
