let vies = 3;

export function afficherVies() {
  const viesElement = document.querySelector("#lives");
  if (viesElement) {
    viesElement.textContent = "Vies : " + vies;
  }
}

export function resetVies() {
  vies = 3;
  afficherVies();
}

export function retirerVie() {
  vies--;
  afficherVies();

  if (vies <= 0) {
    alert("Tu as perdu ! Le quiz recommence.");
    resetVies();
    location.reload();
  }
}
