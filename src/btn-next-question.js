// ================================== BOUTON NEXT QUESTION ==================================

import { nextQuestion, currentQuestionIndex } from "./quiz-display.js";
import quiz from "./quiz-femmes-scientifiques.json";

// récupérer les éléments HTML
const nextButton = document.getElementById("next-question");
const answerButtons = document.querySelectorAll(".buttonA");
const questionContainer = document.querySelector(".questions");

// créer le bouton Résultat (il n'existe pas dans le HTML)
const resultButton = document.createElement("button");
resultButton.innerText = "Résultat";
resultButton.classList.add("button", "hidden");
questionContainer.appendChild(resultButton);

// ================= INITIALISATION =================
export function initBtnNext() {
  nextButton.classList.add("hidden"); // cacher le bouton next au départ

  // ================= clic sur une réponse =================
  for (let index = 0; index < answerButtons.length; index++) {
    answerButtons[index].addEventListener("click", function () {
      // dernière question ?
      if (currentQuestionIndex === quiz.questions.length - 1) {
        resultButton.classList.remove("hidden"); // afficher le bouton Résultat
      } else {
        nextButton.classList.remove("hidden"); // afficher le bouton Next
      }
    });
  }

  // ================= clic sur bouton Next =================
  nextButton.addEventListener("click", function () {
    nextQuestion(); // passer à la question suivante
    nextButton.classList.add("hidden"); // cacher le bouton next
    resultButton.classList.add("hidden"); // cacher le bouton Résultat (au cas où)
  });

  // ================= clic sur bouton Résultat =================
  resultButton.addEventListener("click", function () {
    // appeler la fonction de score / écran final
    alert("Afficher le score / écran final");
  });
}
