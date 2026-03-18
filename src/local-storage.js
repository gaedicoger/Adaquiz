const STORAGE_KEY = "bestScore"; //Pas de tout de masjuscules pour déclarer une variable

export function saveBestScore(score) {
  const bestScore = Number(localStorage.getItem(STORAGE_KEY));

  if (score > bestScore) {
    localStorage.setItem(STORAGE_KEY, score);
  }
}

export function displayBestScore() {
  const bestScore = localStorage.getItem(STORAGE_KEY);
  const bestScoreElement = document.querySelector("#bestScore");

  if (bestScoreElement) {
    if (bestScore) {
      bestScoreElement.textContent = "Meilleur score : " + bestScore;
    } else {
      bestScoreElement.textContent = "Meilleur score : 0";
    }
  }
}
