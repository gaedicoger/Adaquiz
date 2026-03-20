// ================================= PROGRESSION QUIZ =================================

// imports

import quiz from "./quiz-femmes-scientifiques.json";

// =============================== BARRE DE PROGRESSION ===============================

const totalQuestions = quiz.questions.length;
export let currentQuestion = 0;

/**
 * - affiche barre de progression
 * - incrémente son avancement
 */

export function updateProgressBar() {
  const barre = document.getElementById("display-progress");

  if (!barre) return;

  currentQuestion++;

  const pourcentage = (currentQuestion / totalQuestions) * 100;
  barre.style.width = `${pourcentage}%`;
}

// ===================================== RESET ========================================

/**
 * - réinitialise la barre de progression
 */

export function resetProgressBar() {
  currentQuestion = 0;
  const barre = document.getElementById("display-progress");
  if (!barre) return;
  barre.style.width = "0%";
}
