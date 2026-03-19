import { restartQuiz } from "./main";

let lives = 3;

function displayLife() {
  const lifeElement = document.querySelector("#lives");
  if (lifeElement) {
    lifeElement.textContent = "Vies : " + lives;
  }
}

export function initLives() {
  lives = 3;
  displayLife();
}

export function resetLife() {
  lives = 3;
  displayLife();
}

export function lostLife() {
  lives--;
  displayLife();

  if (lives <= 0) {
    alert("Tu as perdu ! Le quiz recommence.");
    restartQuiz();
  }
}
