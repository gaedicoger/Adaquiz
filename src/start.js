//importer les fonctions requises :
//import startQuiz from "./btn-next-questions.js";

//Fonction de démarrage du quizz :
function startScreen() {
  const startButton = document.getElementById("startButton"); //Récupérer le bouton start
  startButton.addEventListener("click", startQuiz);
} //Ecouter le bouton et renvoyer vers la fonction d'affichage des questions

//Ajouter un event et pas un click pour caché le bouton démarrer et ensuite appeler la fonction startquiz
