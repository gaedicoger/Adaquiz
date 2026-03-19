//! comme on travaille sur vite et non node.js pas besoin d'import les modules fs et parser le JSON

// Import
import "./style.css";
import "./start.js";
import "./btn-next-question.js";
import "./btn-retry-quiz.js";
import "./display-end-screen.js";
import "./progression.js";
import "./local-storage.js";

import quiz from "./quiz-femmes-scientifiques.json";

// import { startQuiz } from "./quiz-display.js";
// import {s resetScore } from "./calcul-score.js";
//import { initLives, resetLife } from "./systeme-de-vie.js";

// ========================= AFFICHAGE PAR DEFAUT ==========================

// //* récupérer les écrans
const displayStartScreen = document.querySelector(".welcome");
const displayQuizScreen = document.querySelector("#questions-container");
const displayEndScreen = document.querySelector(".endScreen");

// displayStartScreen.classList.add("hidden");

// //* masquer l'écran quiz et l'écran de fin
displayQuizScreen.classList.add("hidden");
displayEndScreen.classList.add("hidden");

// ======================= Ecran d'accueil =========================

//* affichage titre quizz sur écran d'accueil
document.querySelector(".welcome > h1").innerText = quiz.title;

// ========================= Ecran quizz ===========================

// initialisation des vies au chargement
//initLives();

// fonction pour relancer le quiz
/*export function restartQuiz() {
  resetScore();
  resetLife();

  displayStartScreen.classList.add("hidden");
  displayEndScreen.classList.add("hidden");
  displayQuizScreen.classList.remove("hidden");

  startQuiz();
}*/
