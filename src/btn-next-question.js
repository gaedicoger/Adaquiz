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

//let isIntialized = false;

// ================= INITIALISATION =================
export function initBtnNext() {
  //if (isInitialized) return; // 👈 ne pas réinitialiser si déjà fait
  //isInitialized = true;
  nextButton.classList.add("hidden"); // cacher le bouton next au départ
  resultButton.classList.add("hidden");
  // ================= clic sur une réponse =================
  for (let index = 0; index < answerButtons.length; index++) {
    answerButtons[index].addEventListener("click", function () {
      answerButtons.forEach((button) => (button.disabled = true)); //Désactivé les boutons après une première réponse choisie
      // dernière question ?
      if (currentQuestionIndex === quiz.questions.length - 1) {
        resultButton.classList.remove("hidden"); // afficher le bouton Résultat
      } else {
        nextButton.classList.remove("hidden"); // afficher le bouton Next
      }
      const indexUserAnswer = Number(answerButtons[index].dataset.index);
      const correctIndex = quiz.questions[currentQuestionIndex].correctIndex;

      calculScore(indexUserAnswer, correctIndex); //Appel de la fonction d'itération du score
      //displayAnswerMessage(indexUserAnswer, correctIndex); //Appel de la fonction d'affichage des bonnes ou mauvaises réponses
    });
  }

  // ================= clic sur bouton Next =================
  nextButton.addEventListener("click", function () {
    nextQuestion(); // passer à la question suivante
    nextButton.classList.add("hidden"); // cacher le bouton next
    resultButton.classList.add("hidden"); // cacher le bouton Résultat (au cas où)
    answerMessage.innerHTML = ``;
    answerButtons.forEach((button) => (button.disabled = false)); //Réactivé les boutons pour la question suivante
    updateProgressBar();
  });

  // ================= clic sur bouton Résultat =================
  resultButton.addEventListener("click", function () {
    // appeler la fonction de score / écran final
    //cacher l'écran de questions
    questionContainer.classList.add("hidden");
    endScreen();
  });
}
