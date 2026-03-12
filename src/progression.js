// affiche d'une barre de progression en fonction du score

const totalQuestions = 10;
let questionActuelle = 1;

function mettreAJourProgression() {
  const barre = document.getElementById("displayProgress");
  const pourcentage = (questionActuelle / totalQuestions) * 100;
  barre.style.width = `${pourcentage}%`;
}

export function questionSuivante() {
  if (questionActuelle < totalQuestions) {
    questionActuelle++;
    mettreAJourProgression();
  }
}
