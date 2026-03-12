//! comme on travaille sur vite et non node.js pas besoin d'import les modules fs et parser le JSON

// Import

import "./style.css";
import "./start.js";
import quiz from "./quiz-femmes-scientifiques.json";
import { initBtnNext } from "./btn-next-question.js";
import { questionSuivante } from "./progression.js"; // syntaxe à favoriser pour cibler une fonction définie dans le .js, permet de minimiser le nombre d'import

// Affichage titre quizz sur écran d'acceuil (+ écran questions ?)
document.querySelector(".welcome > h1").innerText = quiz.title;
questionSuivante();

// initialiser ton bouton « Question suivante »
initBtnNext();
