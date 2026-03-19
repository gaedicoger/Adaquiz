// ============================= IMPORTS ======================================
import quiz from "./quiz-femmes-scientifiques.json";
import { showQuestion } from "./quiz-display.js";
import { initBtnNext } from "./btn-next-question.js";
import { initLives } from "./systeme-de-vie.js";

// ===========================================================================
// ==============================  START ==========================================
// ===========================================================================

const displayQuizScreen = document.querySelector("#questions-container");

//Fonction de démarrage du quizz :
// export function startScreen() {
//   const startButton = document.getElementById("startButton"); //Récupérer le bouton start
//   const welcome = document.querySelector(".welcome"); //récupérer la div welcome
//   startButton.addEventListener("click", () => {
//     //Ajouter un event et pas un click pour caché le bouton démarrer et ensuite appeler la fonction startquiz
//     welcome.classList.add("hidden");
//     displayQuizScreen.classList.remove("hidden");
//     document.querySelector(".questions > header > h1").innerText = quiz.title;
//     showQuestion();
//     initBtnNext();
//   });
// }

// startScreen();

const startButton = document.getElementById("startButton"); //Récupérer le bouton start
startButton.addEventListener("click", () => {
  const welcome = document.querySelector(".welcome"); //récupérer la div welcome
  welcome.classList.add("hidden");
  displayQuizScreen.classList.remove("hidden");
  document.querySelector(".questions > header > h1").innerText = quiz.title;
  startScreen();
});

export function startScreen() {
  showQuestion();
  initBtnNext();
  initLives();
}
