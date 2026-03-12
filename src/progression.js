// affiche d'une barre de progression en fanction du score

let questionActuelle = 1;
mettreAJourProgression();

function questionSuivante() {
  if (questionActuelle < totalQuestions) {
    questionActuelle++;
    mettreAJourProgression();
  }
}
