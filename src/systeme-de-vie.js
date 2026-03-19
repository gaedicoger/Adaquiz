import { retryQuiz } from "./btn-retry-quiz.js";

let lives = 5;

/**
 * - initialise nombre de vies
 * - affichage nombre de vies
 */

export function initLives() {
  lives = 5;
  displayLife();
}

function displayLife() {
  const lifeElement = document.querySelector("#lives");
  if (lifeElement) {
    lifeElement.textContent = "Vies : " + lives;
  }
}

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

export function resetLife() {
  lives = 5;
  displayLife();
}
