// ============================ BOUTON QUESTION SUIVANTE ============================

// imports

import quiz from "./quiz-femmes-scientifiques.json";
import {
  nextQuestion,
  answerMessage,
  currentQuestionIndex,
} from "./quiz-display.js";
import { calculScore } from "./calcul-score.js";
import { endScreen } from "./display-end-screen.js";
import { updateProgressBar } from "./progression.js";

// DOM
const nextButton = document.getElementById("next-question");
export const answerButtons = document.querySelectorAll(".buttonA");
const questionContainer = document.querySelector("#questions-container");

// DOM : créer le bouton Résultat (il n'existe pas dans le HTML)
const resultButton = document.createElement("button");
resultButton.innerText = "Résultat";
resultButton.classList.add("button", "hidden");
questionContainer.appendChild(resultButton);

// ==================== INITIALISATION ====================

/**
 * initBtnNext() permet de :
 * - masquer les boutons question suivante et résultat
 * - désactiver les boutons réponses
 */

export function initBtnNext() {
  nextButton.classList.add("hidden");
  resultButton.classList.add("hidden"); // ← le fix du bug retry
  answerButtons.forEach((button) => (button.disabled = false));
}

// ==================== EVENT CLICK ====================

// bouton réponse
//! (en dehors de initBtnNext, branché une seule fois au chargement)

for (let i = 0; i < answerButtons.length; i++) {
  answerButtons[i].addEventListener("click", function () {
    answerButtons.forEach((button) => (button.disabled = true));
    if (currentQuestionIndex === quiz.questions.length - 1) {
      resultButton.classList.remove("hidden");
    } else {
      nextButton.classList.remove("hidden");
    }
    const indexUserAnswer = Number(answerButtons[i].dataset.index);
    const correctIndex = quiz.questions[currentQuestionIndex].correctIndex;
    calculScore(indexUserAnswer, correctIndex);
  });
}

// écoute bouton question suivante

nextButton.addEventListener("click", function () {
  nextQuestion();
  nextButton.classList.add("hidden");
  resultButton.classList.add("hidden");
  answerMessage.innerHTML = ``;
  answerButtons.forEach((button) => (button.disabled = false));
  updateProgressBar();
});

// écoute bouton résultat

resultButton.addEventListener("click", function () {
  questionContainer.classList.add("hidden");
  endScreen();
});
