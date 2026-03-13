//Fonction affichage des bonnes et des mauvaises réponses :
/**
 *
 * @param {*} indexUserAnswer
 * @param {*} correctIndex
 */

export function displayAnswerMessage(indexUserAnswer, correctIndex) {
  const answerMessage = document.getElementById("answerMessage");
  const messageText = document.createElement("p");

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
