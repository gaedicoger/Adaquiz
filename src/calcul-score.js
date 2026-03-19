// ============================= IMPORTS ======================================
import { displayAnswerMessage } from "./quiz-display.js";
import quiz from "./quiz-femmes-scientifiques.json";

//On ne peut que lire une variable quand on l'importe. Du coup on doit mettre score et sa fonction d'incrémentation dans main.js

// ============================= VARIABLES ====================================
//Récupérer et stocker les deux index dans une variable:  doit être dans main.js avec la fonction calcul de score

export let score = 0;

/**
 * - calcul le score
 * - affiche "bonne ou mauvaise" réponse
 * @param {*} indexUserAnswer
 * @param {*} correctIndex
 */

export function calculScore(indexUserAnswer, correctIndex) {
  //quand je clique sur une réponse sur un bouton je stocke l'index de la réponse trouver comment le stocker sur la page bouton ?
  if (indexUserAnswer === correctIndex) {
    score += 1;
  }
  displayAnswerMessage(indexUserAnswer, correctIndex);
}
let indexInitQuiz = 0;

export function resetScore() {
  score = 0;
  let initQuiz = quiz.questions[indexInitQuiz];
  // currentQuestionIndex = 0;
}
