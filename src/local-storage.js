const STORAGE_KEY = "bestScore"; //Pas de tout de masjuscules pour déclarer une variable

export function saveBestScore(score) {
  //
  // récupérer le meilleur score enregistré
  const bestScore = localStorage.getItem(STORAGE_KEY);

  // si aucun score ou score actuel plus grand
  if (!bestScore || score > bestScore) {
    localStorage.setItem(STORAGE_KEY, score);
  }
}

export function displayBestScore() {
  const bestScore = localStorage.getItem(STORAGE_KEY);

  if (!bestScore) return;

  const bestScoreElement = document.querySelector("#bestScore");

  if (bestScoreElement) {
    bestScoreElement.textContent = "Meilleur score : " + bestScore;
  }
}
