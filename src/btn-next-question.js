// ============================ NEXT QUESTION BUTTON =======================

// imports

import quiz from "./quiz-femmes-scientifiques.json";
import {
  moveToNextQuestion,
  answerMessage,
  currentQuestionIndex,
} from "./quiz-display.js";
import { calculScore } from "./calcul-score.js";
import { showEndScreen } from "./display-end-screen.js";
import { updateProgressBar } from "./progression.js";

// DOM
const nextButton = document.getElementById("next-question-button");
export const answerButtons = document.querySelectorAll(".answer-button");
const questionContainer = document.querySelector(".quiz-screen");

// DOM : créer le bouton Résultat (il n'existe pas dans le HTML)
const resultButton = document.createElement("button");
resultButton.innerText = "Résultat";
resultButton.classList.add("button", "hidden");
questionContainer.appendChild(resultButton);

// =========================== INITIALISATION ==============================

/**
 * - masque boutons question suivante et résultat
 * - désactive boutons réponses
 */

export function initNextButton() {
  nextButton.classList.add("hidden");
  resultButton.classList.add("hidden");
  answerButtons.forEach((button) => (button.disabled = false));
}

// ============================ EVENT CLICK ================================

// bouton réponse
//! (en dehors de initNextButton, branché une seule fois au chargement)

for (let i = 0; i < answerButtons.length; i++) {
  answerButtons[i].addEventListener("click", function () {
    answerButtons.forEach((button) => (button.disabled = true));
    if (currentQuestionIndex === quiz.questions.length - 1) {
      resultButton.classList.remove("hidden");
    } else {
      nextButton.classList.remove("hidden");
    }
    const indexUserAnswer = Number(answerButtons[i].dataset.index); // dataset récupère le data-index du bouton cliqué
    const correctIndex = quiz.questions[currentQuestionIndex].correctIndex;
    calculScore(indexUserAnswer, correctIndex);
  });
}

// écoute bouton question suivante

nextButton.addEventListener("click", function () {
  moveToNextQuestion();
  nextButton.classList.add("hidden");
  resultButton.classList.add("hidden");
  answerMessage.innerHTML = ``;
  answerButtons.forEach((button) => (button.disabled = false));
  updateProgressBar();
});

// écoute bouton résultat

resultButton.addEventListener("click", function () {
  questionContainer.classList.add("hidden");
  showEndScreen();
});
