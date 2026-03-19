// ========================= SYSTEME DE VIE =============================

// imports

import { retryQuiz } from "./btn-retry-quiz.js";

// ============================= DISPLAY =================================

function displayLife() {
  const lifeElement = document.querySelector("#lives");
  if (lifeElement) {
    lifeElement.textContent = "Vies : " + lives;
  }
}

// ============================= CALCUL =================================

// initialisation

/**
 * - initialise nombre de vies
 * - affichage nombre de vies
 */

export function initLives() {
  lives = 5;
  displayLife();
}

// gestion vie

let lives = 5;

/**
 * - décrémente vie à chaque mauvaise réponse
 */

export function lostLife() {
  lives--;
  displayLife();
  if (lives <= 0) {
    alert("Tu as perdu ! Le quiz recommence.");
    retryQuiz();
  }
}

// ============================= RESET =================================

export function resetLife() {
  lives = 5;
  displayLife();
}
