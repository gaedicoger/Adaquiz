//! comme on travaille sur vite et non node.js pas besoin d'import les modules fs et parser le JSON

// Import

import "./style.css";
import ".start.js";
import quiz from "./quiz-femmes-scientifiques.json";
//import start from "./start.js";
//start.startScreen;

// Affichage titre quizz sur écran d'acceuil (+ écran questions ?)
document.querySelector(".welcome > h1").innerText = quiz.title;
