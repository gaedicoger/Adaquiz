// =============================== SCORE ======================================

// imports

import { displayAnswerMessage } from "./quiz-display.js";

// =============================== CALCUL =====================================

export let score = 0;

/**
 * - calcul le score
 * - affiche "bonne ou mauvaise" réponse
 * @param {number} indexUserAnswer
 * @param {number} correctIndex
 */

export function calculScore(indexUserAnswer, correctIndex) {
  if (indexUserAnswer === correctIndex) {
    score += 1;
  }
  displayAnswerMessage(indexUserAnswer, correctIndex);
}

// =============================== RESET =====================================

/**
 * - réinitialise le score
 */

export function resetScore() {
  score = 0;
}
