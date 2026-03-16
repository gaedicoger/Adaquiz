// ============================= IMPORTS ======================================
import quiz from "./quiz-femmes-scientifiques.json";
//import score from "./main.js";

// ============================= VARIABLES ====================================
//Stocker le nombre de questions en tout:
const numberQuestions = quiz.questions.length;
//Stocker le score:
let finalScore = score;
//Stocker le pourcentage:
let pourcentScore = 0;

// ===========================================================================
// ==============================  CALCUL ==========================================
// ===========================================================================

//Fonction transformer le score en pourcentage. selon le nombre de questions
/**
 *
 * @param {*} finalScore
 * @param {*} numberQuestions
 */
function calculPourcentScore(finalScore, numberQuestions) {
  pourcentScore = (finalScore / numberQuestions) * 100;
}

// ===========================================================================
// ==============================  DISPLAY ==========================================
// ===========================================================================

//Fonction pour afficher le score :
/**
 *
 * @param {*} finalScore
 */
function displayScore(finalScore) {
  let resultScore = document.getElementById("resultScore");
  resultScore.innerText = `Ton score est de ${finalScore} points`;
}

//Fonction Afficher les message en fonction du score en pourcentage:
/**
 *
 * @param {*} pourcentScore
 */

function displayScoreMessage(pourcentScore) {
  const scoreMessagePlace = document.getElementById("scoreMessage"); //récupérer l'emplacement du score
  let scoreMessage = document.createElement("p");
  //ajouter une création de class pour gérer le style dans le CSS?
  if (pourcentScore === 100) {
    scoreMessage.innerText = `Aucune erreur, c'est parfait 😎`; //Remplacer le message par le score à jour selon le score ou le pourcentage de réussite
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

//Fonction pour afficher le nombre de questions réussies:
/**
 *
 * @param {*} finalScore
 * @param {*} numberQuestions
 */

function displayTotalScore(finalScore, numberQuestions) {
  const displayTotalScore = document.getElementById("totalScore");
  displayTotalScore.innerText = ` Tu as trouvé la bonne réponse pour ${finalScore} questions sur ${numberQuestions}`;
}
// ===========================================================================
// ==============================  FINISH ==========================================
// ===========================================================================

export function endScreen() {
  const endScreen = document.querySelector(".endScreen");
  endScreen.classList.remove("hidden"); //afficher l’écran de fin
  calculPourcentScore(finalScore, numberQuestions); //calculer le pourcentage de réussite
  displayScore(finalScore); //afficher le score final
  displayScoreMessage(pourcentScore); //afficher le message réussite
  displayTotalScore(finalScore, numberQuestions); //afficher le nombre de questions réussies
}
