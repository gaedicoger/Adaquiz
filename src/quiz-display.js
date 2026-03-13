// ================================== AFFICHAGE DU QUIZZ ==================================

import quiz from "./quiz-femmes-scientifiques.json";

// récupérer les éléments HTML
const startScreen = document.querySelector(".welcome");
const quizScreen = document.querySelector("#app");
const questionElement = document.getElementById("currentQuestion");
const answerButtons = document.querySelectorAll(".buttonA");

// variable pour savoir quelle question est affichée
export let currentQuestionIndex = 0; //todo : éviter vode en dur?

// ==================== FONCTION POUR LANCER LE QUIZ ====================
export function startQuiz() {
  startScreen.classList.add("hidden"); // masquer écran d'accueil
  quizScreen.classList.remove("hidden"); // afficher écran quiz
  // afficher la première question
  showQuestion();
}

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
