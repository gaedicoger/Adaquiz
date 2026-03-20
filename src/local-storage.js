// =========================== LOCAL STORAGE ===============================

const STORAGE_KEY = "bestScore";

/**
 * - sauvegarde le meilleur score
 * @param {number} score
 */

export function saveBestScore(score) {
  const bestScore = Number(localStorage.getItem(STORAGE_KEY));

  if (score > bestScore) {
    localStorage.setItem(STORAGE_KEY, score);
  }
}

// ============================== DISPLAY ==================================

/**
 * - affiche le meilleur score
 */

export function displayBestScore() {
  const bestScore = localStorage.getItem(STORAGE_KEY);
  const bestScoreElement = document.querySelector("#best-score");

  if (bestScoreElement) {
    if (bestScore) {
      bestScoreElement.textContent = "Meilleur score : " + bestScore;
    } else {
      bestScoreElement.textContent = "Meilleur score : 0";
    }
  }
}
