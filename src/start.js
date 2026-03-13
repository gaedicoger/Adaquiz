// ============================= IMPORTS ======================================
//import startQuiz from "./quiz-display.js";

// ===========================================================================
// ==============================  START ==========================================
// ===========================================================================

//Fonction de démarrage du quizz :
function startScreen() {
  const startButton = document.getElementById("startButton"); //Récupérer le bouton start
  const welcome = document.querySelector(".welcome"); //récupérer la div welcome
  startButton.addEventListener("click", () => {
    //Ajouter un event et pas un click pour caché le bouton démarrer et ensuite appeler la fonction startquiz
    welcome.classList.add("hidden");
    startQuiz();
  });
}

startScreen();
