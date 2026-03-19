// ================================== AFFICHAGE DU QUIZZ ==================================

import quiz from "./quiz-femmes-scientifiques.json";
import { lostLife } from "./systeme-de-vie";
// import { currentQuestionIndex } from "./calcul-score";

// récupérer les éléments HTML
const questionElement = document.getElementById("currentQuestion");
const answerButtons = document.querySelectorAll(".buttonA");

export const answerMessage = document.getElementById("answerMessage");
export const messageText = document.createElement("p");

// variable pour savoir quelle question est affichée
export let currentQuestionIndex = 0; //todo : éviter code en dur!

// ==================== FONCTION POUR LANCER LE QUIZ ====================
// fonctionnalité développée dans start.js function showQuizScreen ()

// ==================== FONCTION POUR AFFICHER UNE QUESTION ====================
export function showQuestion() {
  const question = quiz.questions[currentQuestionIndex];
  questionElement.innerText = question.question; // afficher la question

  // remplir les boutons avec les réponses
  for (let index = 0; index < question.options.length; index++) {
    answerButtons[index].innerText = question.options[index];
  }
}

// ==================== FONCTION POUR PASSER À LA QUESTION SUIVANTE ====================
export function nextQuestion() {
  if (currentQuestionIndex < quiz.questions.length - 1) {
    currentQuestionIndex++;
    showQuestion();
  }
}

//Fonction affichage des bonnes et des mauvaises réponses :
/**
 *
 * @param {*} indexUserAnswer
 * @param {*} correctIndex
 */

export function displayAnswerMessage(indexUserAnswer, correctIndex) {
  if (indexUserAnswer === correctIndex) {
    //Comparer les index pour voir la bonne réponse
    messageText.textContent = "✅ Bonne réponse !";
    messageText.style.color = "lightgreen";
  } else {
    messageText.textContent = "❌ Mauvaise réponse...";
    messageText.style.color = "salmon";
  }
  answerMessage.appendChild(messageText);

  if (indexUserAnswer !== correctIndex) {
    lostLife();
  }
}

export function resetCurrentIndex() {
  currentQuestionIndex = 0;
}
