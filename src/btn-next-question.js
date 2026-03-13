// ================================== BOUTON NEXT QUESTION ==================================

/* JS Page questions :
- Le bouton « Question suivante » doit être caché par défaut :
  - il s'affiche quand l'utilisateur clique sur une réponse
  - à la dernière question il doit afficher l’écran de fin.
*/

export function initBtnNext() {
  // on récupère les éléments
  const btnNextQuestion = document.getElementById("nextQuestion");
  const answerContainer = document.getElementById("answerButtons");
  const questionDisplay = document.querySelector(".questions");
  const endScreen = document.querySelector(".endScreen");

  // bouton caché au départ
  btnNextQuestion.classList.add("hidden");

  // bouton apparaît quand l'utilisateur clique sur une réponse
  answerContainer.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
      btnNextQuestion.classList.remove("hidden");
    }
  });

  // affichage écran de fin quand bouton cliqué
  btnNextQuestion.addEventListener("click", () => {
    // on cache l'écran des questions
    questionDisplay.classList.add("hidden");
    // on affiche l'écran de fin
    endScreen.classList.remove("hidden");
  });
}

/**
//todo : pour le moment on affiche directement l'écran de fin quand on clique sur le bouton
//todo : pour que l'écran de fin ne s'affiche qu'après la dernière question, il faut itérer sur l'index "questions"
//todo : l'itération est à gérer dans le fichier quiz-display
//todo : quand quiz-display sera ok, intégrer les fonctions nécessaires ici
*/

/**
//! on vérifie que l'utilisateur clique bien sur le bouton et non entre deux boutons

"event" représente l'événement du clic qui vient de se produire
Il contient plusieurs informations, dont :
- où l'utilisateur a cliqué : event.target = l'élément exact qui a été cliqué par l'utilisateur
- quel élément HTML a été cliqué : tagName = le type de balise HTML de cet élément (BUTTON, DIV, P, etc.)
"if" vérifie que si la condition est vraie : on enlève la classe "hidden" du bouton next question
*/
