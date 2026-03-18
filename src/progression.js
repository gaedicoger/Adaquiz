//import du quiz JSON pour venir faire un question.length
// affiche d'une barre de progression en fonction du score

const totalQuestions = 10; //! prendre la longueur du tableau JSON pour que ce soit adaptable : question.length
let questionActuelle = 0; //! idem ici

function mettreAJourProgression() {
  const barre = document.getElementById("display-progress"); // Récupérer la div display-progress.
  const pourcentage = (questionActuelle / totalQuestions) * 100;
  // Stocker un pourcentage de progression.
  barre.style.width = `${pourcentage}%`; //Définir la taille de la boit en fonction de la progression
}

export function questionSuivante() {
  if (questionActuelle < totalQuestions) {
    //inférieur ou égale ? car il faut arriver à 100 %.
    questionActuelle++; //
    mettreAJourProgression();
  }
}
