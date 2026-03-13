// ================================== AFFICHAGE DU QUIZZ ==================================

import quiz from "./quiz-femmes-scientifiques.json";

// récupérer les éléments HTML
const startScreen = document.querySelector(".start-screen");
const quizScreen = document.querySelector("#app");
const questionElement = document.getElementById("currentQuestion");
const answerButtons = document.querySelectorAll(".buttonA");

// variable pour savoir quelle question est affichée
export let currentQuestionIndex = 0;

// ==================== FONCTION POUR LANCER LE QUIZ ====================
export function startQuiz() {
  // masquer écran d'accueil
  startScreen.classList.add("hidden");

  // afficher écran quiz
  quizScreen.classList.remove("hidden");

  // afficher la première question
  showQuestion();
}

// ==================== FONCTION POUR AFFICHER UNE QUESTION ====================
export function showQuestion() {
  const question = quiz.questions[currentQuestionIndex];

  // afficher la question
  questionElement.innerText = question.question;

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
