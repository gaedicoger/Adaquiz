/* JS Page questions :

- Le bouton « Question suivante » doit être caché par défaut et s’afficher lorsqu’on clique sur une réponse
- Lorsqu’on clique sur ce bouton, il doit afficher la question suivante
- La dernière question il doit afficher l’écran de fin.

*/

//! récupérer le bouton "question suivante" et le cacher par défaut

// récupérer le bouton

const btnNextQuestion = document.getElementById("nextQuestion");

// cacher le bouton au départ en ajoutant une classe au bouton

btnNextQuestion.classList.add("hidden");

//* j'ai ajouté la classe suivante dans le CSS :
/*
.hidden{
display:none;
}
*/

//! afficher le bouton quand on clique sur une réponse

// récupérer la div qui contient les boutons réponses

const answerContainer = document.getElementById("answerButtons");

// écouter la div quand on clique sur une réponse

answerContainer.addEventListener("click", (event) => {
  //* on vérifie que l'utilisateur clique bien sur le bouton et non entre deux boutons
  // "event" représente l'événement de clic qui vient de se produire
  // Il contient plusieurs informations, dont :
  // - où l'utilisateur a cliqué
  // - quel élément HTML a été cliqué
  // event.target = l'élément exact qui a été cliqué par l'utilisateur
  // tagName = le type de balise HTML de cet élément (BUTTON, DIV, P, etc.)
  if (event.target.tagName === "BUTTON") {
    // Si la condition est vraie :
    // on enlève la classe "hidden" du bouton next question
    btnNextQuestion.classList.remove("hidden");
  }
});

// answerContainer.addEventListener("click", () => {
//   //! attention ici on applique le code même si l'utilisateur clique entre les boutons car on applique sur la div entière !!
//   btnNextQuestion.classList.remove("hidden");
// });
