// ================================== BOUTON NEXT QUESTION ==================================

import quiz from "./quiz-femmes-scientifiques.json";
import {} from "./quiz-display.js";
import { calculScore } from "./calcul-score.js";
import {
  nextQuestion,
  answerMessage,
  messageText,
  displayAnswerMessage,
  currentQuestionIndex,
} from "./quiz-display.js";
import { endScreen } from "./display-end-screen.js";
import { updateProgressBar } from "./progression.js";

// récupérer les éléments HTML
const nextButton = document.getElementById("next-question");
export const answerButtons = document.querySelectorAll(".buttonA");
const questionContainer = document.querySelector("#questions-container");

// créer le bouton Résultat (il n'existe pas dans le HTML)
const resultButton = document.createElement("button");
resultButton.innerText = "Résultat";
resultButton.classList.add("button", "hidden");
questionContainer.appendChild(resultButton);

// ================= INITIALISATION =================
export function initBtnNext() {
  nextButton.classList.add("hidden");
  resultButton.classList.add("hidden"); // ← le fix du bug retry
  answerButtons.forEach((button) => (button.disabled = false));
}

// ================= clic sur une réponse =================
// (en dehors de initBtnNext, branché une seule fois au chargement)
for (let index = 0; index < answerButtons.length; index++) {
  answerButtons[index].addEventListener("click", function () {
    answerButtons.forEach((button) => (button.disabled = true));
    if (currentQuestionIndex === quiz.questions.length - 1) {
      resultButton.classList.remove("hidden");
    } else {
      nextButton.classList.remove("hidden");
    }
    const indexUserAnswer = Number(answerButtons[index].dataset.index);
    const correctIndex = quiz.questions[currentQuestionIndex].correctIndex;
    calculScore(indexUserAnswer, correctIndex);
  });
}

// ================= clic sur bouton Next =================
nextButton.addEventListener("click", function () {
  nextQuestion();
  nextButton.classList.add("hidden");
  resultButton.classList.add("hidden");
  answerMessage.innerHTML = ``;
  answerButtons.forEach((button) => (button.disabled = false));
  updateProgressBar();
});

// ================= clic sur bouton Résultat =================
resultButton.addEventListener("click", function () {
  questionContainer.classList.add("hidden");
  endScreen();
});
