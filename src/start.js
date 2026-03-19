// ========================= ECRAN D'ACCUEIL ==========================

// imports

import quiz from "./quiz-femmes-scientifiques.json";
import { showQuestion } from "./quiz-display.js";
import { initNextButton } from "./btn-next-question.js";
import { initLives } from "./systeme-de-vie.js";

// DOM

const displayQuizScreen = document.querySelector("#questions-container");
const startButton = document.getElementById("start-button"); //Récupérer le bouton start

// écoute bouton démarrer

startButton.addEventListener("click", () => {
  const welcome = document.querySelector(".welcome"); //récupérer la div welcome
  welcome.classList.add("hidden");
  displayQuizScreen.classList.remove("hidden");
  document.querySelector(".questions > header > h1").innerText = quiz.title;
  showQuizScreen();
});

/**
 * - affiche l'écran de quiz
 * - initialise le bouton question suivante
 * - initialise nombre de vies
 */

export function showQuizScreen() {
  showQuestion();
  initNextButton();
  initLives();
}
