//! comme on travaille sur vite et non node.js pas besoin d'import les modules fs et parser le JSON

// Import

import "./style.css";
// import "./start.js";
import quiz from "./quiz-femmes-scientifiques.json";

//! les import ci-dessous suppriment le style CSS de Vite....
import { initBtnNext } from "./btn-next-question.js";
import { questionSuivante } from "./progression.js"; // syntaxe à favoriser pour cibler une fonction définie dans le .js, permet de minimiser le nombre d'import
import { startQuiz } from "./quiz-display.js";

// ========================= AFFICHAGE PAR DEFAUT ==========================

// //* récupérer les écrans
const displayStartScreen = document.querySelector(".welcome");
const displayQuizScreen = document.querySelector("#questions-container");
const displayEndScreen = document.querySelector(".endScreen");

// displayStartScreen.classList.add("hidden");

// //* masquer par l'écran quiz et écran de fin

displayQuizScreen.classList.add("hidden");
displayEndScreen.classList.add("hidden");

// ======================= Ecran d'acceuil =========================

//* affichage titre quizz sur écran d'acceuil
document.querySelector(".welcome > h1").innerText = quiz.title;

//* récupérer le bouton "démarrer"
const startButton = document.getElementById("startButton");

// ========================= Ecran quizz ===========================

startButton.addEventListener("click", function () {
  // cacher l'écran d'accueil
  displayStartScreen.classList.add("hidden");

  // afficher l'écran quiz
  displayQuizScreen.classList.remove("hidden");
  document.querySelector(".questions > header > h1").innerText = quiz.title;

  // lancer le quiz (affiche la première question)
  startQuiz();

  // initialiser le bouton Next + bouton Résultat
  initBtnNext();
});
