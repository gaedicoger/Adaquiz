// affiche d'une barre de progression en fonction du score

const totalQuestions = 10; //! prendre la longueur du tableau JSON pour que ce soit adaptable
let questionActuelle = 1; //! idem ici

function mettreAJourProgression() {
  const barre = document.getElementById("display-progress");
  const pourcentage = (questionActuelle / totalQuestions) * 100;
  barre.style.width = `${pourcentage}%`;
}

export function questionSuivante() {
  if (questionActuelle < totalQuestions) {
    questionActuelle++;
    mettreAJourProgression();
  }
}
