import { initRetryButton } from "./btn-retry-quiz";

export let lives = 3;

function displayLife() {
  const lifeElement = document.querySelector("#lives");
  lifeElement.textContent = "Vies : " + lives;
}

export function resetLife() {
  lives = 3;
}

export function lostLife() {
  lives--;
  if (lives <= 0) {
    alert("Tu as perdu ! Le quiz recommence.");
    resetLife();
    initRetryButton();
  }
}
