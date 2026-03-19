// ============================= BOUTON RECOMMENCER =================================

// imports

import { showQuestion, resetCurrentIndex } from "./quiz-display.js";
import { initNextButton, answerButtons } from "./btn-next-question.js";
import { resetScore } from "./calcul-score.js";
import { resetProgressBar } from "./progression.js";
import { resetLife } from "./systeme-de-vie.js";

// DOM

const btnRetry = document.getElementById("retryQuiz");

// =================================== RESET ======================================

/**
 * - masque écran de fin
 * - vide message "bonne ou mauvaise" réponse
 * - affiche écran quiz
 * - réactive boutons réponses
 * - reset vie, score, index question, barre progression
 * - initialise bouton question suivante
 */

export function retryQuiz() {
  const endScreen = document.querySelector(".endScreen");
  endScreen.classList.add("hidden"); //masquer l’écran de fin
  const answerMessage = document.getElementById("answerMessage");
  answerMessage.innerHTML = ``;
  const displayQuizScreen = document.querySelector("quiz-screen");
  displayQuizScreen.classList.remove("hidden");
  answerButtons.forEach((button) => (button.disabled = false));
  resetLife();
  resetScore();
  resetCurrentIndex();
  resetProgressBar();
  initNextButton();
  showQuestion();
}

// event

btnRetry.addEventListener("click", () => {
  retryQuiz();
});
