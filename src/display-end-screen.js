// ============================= ECRAN DE FIN =================================

// imports

import quiz from "./quiz-femmes-scientifiques.json";
import { score } from "./calcul-score.js";
import { saveBestScore, displayBestScore } from "./local-storage.js";

// ==============================  FINISH ====================================

/**
 * - affiche écran de fin
 *    - affiche pourcentage réussite
 *    - affiche message réussite
 *    - affiche score final
 *    - affiche nombre de questions réussies
 *    - affiche meilleur score
 */

export function showEndScreen() {
  const finalScore = score;
  const endScreen = document.querySelector(".end-screen");
  endScreen.classList.remove("hidden");
  calculPourcentScore(finalScore, numberQuestions);
  displayScore(finalScore);
  displayScoreMessage(pourcentScore);
  displayTotalScore(finalScore, numberQuestions);
  saveBestScore(finalScore);
  displayBestScore();
}

// ==============================  CALCUL =====================================

// Variables

const numberQuestions = quiz.questions.length;
let pourcentScore = 0;

// Fonction qui transforme le score en pourcentage

function calculPourcentScore(finalScore, numberQuestions) {
  pourcentScore = (finalScore / numberQuestions) * 100;
}

// ==============================  DISPLAY ====================================

// Score final

function displayScore(finalScore) {
  let resultScore = document.getElementById("result-score");
  resultScore.innerText = `Ton score est de ${finalScore} points`;
}

// Messages selon pourcentage de réussite

function displayScoreMessage(pourcentScore) {
  const scoreMessagePlace = document.getElementById("score-message");
  scoreMessagePlace.innerHTML = "";
  let scoreMessage = document.createElement("p");

  if (pourcentScore === 100) {
    scoreMessage.innerText = `Aucune erreur, c'est parfait 😎`;
  } else if (pourcentScore >= 80 && pourcentScore < 100) {
    scoreMessage.innerText = `C'est bien, tu as fait peu d'erreurs 😉`;
  } else if (pourcentScore >= 50 && pourcentScore < 80) {
    scoreMessage.innerText = `C'est pas mal, mais tu peux encore t'améliorer 💪`;
  } else if (pourcentScore > 0 && pourcentScore < 50) {
    scoreMessage.innerText = `Aïe, tu as beaucoup d'erreurs, tu devrais réessayer 😅`;
  } else {
    scoreMessage.innerText = `Oups ! Tu n'as trouvé aucune bonne réponse 😱`;
  }

  scoreMessagePlace.appendChild(scoreMessage);
}

// Nombre de questions réussies

function displayTotalScore(finalScore, numberQuestions) {
  const displayTotalScore = document.getElementById("total-score");
  displayTotalScore.innerText = ` Tu as trouvé la bonne réponse pour ${finalScore} questions sur ${numberQuestions}`;
}
