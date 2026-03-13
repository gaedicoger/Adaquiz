//PAGE INTERMEDIAIRE AVEC FONCTIONS A DEPLACER :

// ============================= IMPORTS ======================================
//import { score } from "./main.js";
//On ne peut que lire une variable quand on l'importe. Du coup on doit mettre score et sa fonction d'incrémentation dans main.js

//A DEPLACER DANS main.js :
// ============================= VARIABLES ====================================
//Récupérer et stocker les deux index dans une variable:  doit être dans main.js avec la fonction calcul de score
let indexUserAnswer =; //le chemin correspondant à l'index du bouton sur lequle l'utilisateur à cliqué.
let correctIndex = //le chemin correspondant au correctIndex correspondant à la question
//Fonction calcul du score:
/**
 *
 * @param {*} indexUserAnswer
 * @param {*} correctIndex
 */
export function calculScore(indexUserAnswer, correctIndex) {
  //quand je clique sur une réponse sur un bouton je stocke l'index de la réponse trouver comment le stocker sur la page bouton ?
  if (indexUserAnswer === correctIndex) {
    score += 1;
  }
}
//A DEPLACER DANS QUIZ-DISPLAY:
// ============================= IMPORTS ======================================
//import { correctIndex } from "./main.js";

//Fonction affichage des bonnes et des mauvaises réponses :
/**
 *
 * @param {*} indexUserAnswer
 * @param {*} correctIndex
 */

export function displayAnswerMessage(indexUserAnswer, correctIndex) {
  const answerMessage = document.getElementById("answerMessage");
  const messageText = document.createElement("p");
  //ajouter une création de class pour gérer le style dans le CSS?

  if (indexUserAnswer === correctIndex) {
    //Comparer les index pour voir la bonne réponse
    messageText.textContent = "✅ Bonne réponse !";
    messageText.style.color = "lightgreen";
  } else {
    messageText.textContent = "❌ Mauvaise réponse...";
    messageText.style.color = "salmon";
  }
  answerMessage.appendChild(messageText);
}
