// =============================== SCORE ======================================

// imports

import quiz from "./quiz-femmes-scientifiques.json";
import { displayAnswerMessage } from "./quiz-display.js";

// =============================== CALCUL =====================================

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

// =============================== RESET =====================================

export function resetScore() {
  score = 0;
}
