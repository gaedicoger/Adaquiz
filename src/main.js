// ========================= INITIALISATION APP ==========================

// import

import "./style.css";
import "./start.js";
import "./btn-next-question.js";
import "./btn-retry-quiz.js";
import "./display-end-screen.js";
import "./progression.js";
import "./local-storage.js";
import quiz from "./quiz-femmes-scientifiques.json";

// DOM

const titleQuiz = document.querySelector(".welcome > h1");
const displayQuizScreen = document.querySelector("#questions-container");
const displayEndScreen = document.querySelector(".endScreen");

// ========================= AFFICHAGE PAR DEFAUT ==========================

//* affiche titre quizz sur écran d'accueil
titleQuiz.innerText = quiz.title;

//* masque écrans quiz et fin
displayQuizScreen.classList.add("hidden");
displayEndScreen.classList.add("hidden");
