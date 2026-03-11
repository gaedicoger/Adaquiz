//importer les fonctions requises :
import startQuiz from "./es-questions.js";

//Fonction de démarrage du quizz :
function startScreen() {
  const startButton = document.getElementById("startButton"); //Récupérer le bouton start
  startButton.addEventListener("click", startQuiz);
} //Ecouter le bouton et renvoyer vers la fonction d'affichage des questions
