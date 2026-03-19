// ============================= ECRAN QUIZ =================================

// imports

import quiz from "./quiz-femmes-scientifiques.json";
import { loseLife } from "./systeme-de-vie";

// DOM
const questionElement = document.getElementById("current-question");
const answerButtons = document.querySelectorAll(".buttonA");
export const answerMessage = document.getElementById("answer-message");
export const messageText = document.createElement("p");

// ============================= DISPLAY =============================

// affichage écran quiz géré par fonction showQuizScreen() dans start.js

export let currentQuestionIndex = 0;

/**
 * - affiche la question
 */

export function showQuestion() {
  const question = quiz.questions[currentQuestionIndex];
  questionElement.innerText = question.question; // afficher la question

  // remplir les boutons avec les réponses
  for (let i = 0; i < question.options.length; i++) {
    answerButtons[i].innerText = question.options[i];
  }
}

/**
 * - passe à la question suivante
 * - affiche la question suivante
 */

export function moveToNextQuestion() {
  if (currentQuestionIndex < quiz.questions.length - 1) {
    currentQuestionIndex++;
    showQuestion();
  }
}

/**
 * Affiche "bonne" ou "mauvaise" réponse
 * @param {number} indexUserAnswer bouton réponse sélectionné
 * @param {number} correctIndex réponse correcte
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
    loseLife();
  }
}

// ============================== RESET ==============================

/**
 * - réinitialise index question
 */
export function resetCurrentIndex() {
  currentQuestionIndex = 0;
}
