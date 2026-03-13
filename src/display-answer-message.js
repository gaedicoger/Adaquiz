// ============================= IMPORTS ======================================
import score from {"./main.js"}

// ============================= VARIABLES ====================================
//récupérer les index ?

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
  // @ts-ignore
  answerMessage.appendChild(messageText);
}
