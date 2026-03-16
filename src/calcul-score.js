// ============================= IMPORTS ======================================
import { displayAnswerMessage } from "./quiz-display.js";

//On ne peut que lire une variable quand on l'importe. Du coup on doit mettre score et sa fonction d'incrémentation dans main.js

// ============================= VARIABLES ====================================
//Récupérer et stocker les deux index dans une variable:  doit être dans main.js avec la fonction calcul de score

export let score = 0;

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
  displayAnswerMessage(indexUserAnswer, correctIndex);
}
