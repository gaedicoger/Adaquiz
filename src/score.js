//IMPORTS:
import startScreen from "./start.js";
import quiz from "./quiz-femmes-scientifiques.json";
//import ? score from "./es-questions.js"

//VARIABLES:
//Stocker le nombre de questions en tout:
const numberQuestions = quiz.questions.length;
//Stocker le score:
let score = 0;
//Stocker le pourcentage:
let pourcentScore = 0;
//Stocker l'index de la réponse utilisateur :
let indexUserAnswer = ;

//Fonction affichage des bonnes et des mauvaises réponses:
/**
 * 
 * @param {*} indexUserAnswer 
 * @param {*} correctIndex 
 */
function displayAnswerMessage (indexUserAnswer, correctIndex) {
  const answerMessage = document.getElementById("answerMessage");
  const messageText = document.createElement("p");

  if (indexUserAnswer === correctIndex) { //Comparer les index pour voir la bonne réponse
    messageText.textContent = "✅ Bonne réponse !";
    messageText.style.color = "lightgreen";
  } else {   
    messageText.textContent = "❌ Mauvaise réponse...";
    messageText.style.color = "salmon";
  }
  answerMessage.appendChild(messageText);
}

//Fonction calcul:
/**
 * 
 * @param {*} indexUserAnswer 
 * @param {*} correctIndex 
 */
function calculScore (indexUserAnswer, correctIndex) { 
//quand je clique sur une réponse sur un bouton je stocke l'index de la réponse trouver comment le stocker sur la page bouton ?
displayAnswerMessage()
if (indexUserAnswer === correctIndex) {
    score +=1;
  }
}

//Récupérer les boutons réponses :
//Pour chaque click sur un bouton réponse:
//Récupérer l'index de la réponses choisie:
//Appeler calcul score:


// ===========================================================================
// ==============================  FINISH ==========================================
// ===========================================================================

//Fonction Afficher le score:
function displayScoreMessage () { 
let scoreMessage= document.getElementById("scoreMessage")//récupérer l'emplacement du score
if (pourcentScore===100) {scoreMessage.innerText= `Aucune erreur, c'est parfait 😎`; //Remplacer le message par le score à jour selon le score ou le pourcentage de réussite
} if else (pourcentScore >=80 && score<100) {scoreMessage.innerText= `C'est bien, tu as fait peu d'erreurs 😉`}
if else (pourcentScore >=50 && score<80 ) {scoreMessage.innerText= `C'est pas mal, mais tu peux encore t'améliorer 💪`}
if else (pourcentScore<50) {scoreMessage.innerText=`Aïe, tu as beaucoup d'erreurs, tu devrais réessayer 😅`}
else {scoreMessage.innerText= `Oups ! Tu n'as trouvé aucune bonne réponse 😱`};
}

//Fonction pour afficher le score :
function displayScore (score) {
let resultScore=document.getElementById("resultScore")
resultScore.innerText=`Ton score est de ${score} points`
}
//Fonction pour afficher le nombre de questions réussies:
function displayTotalScore () {
const displayTotalScore = ` Tu as trouvé la bonne réponse pour ${score} questions sur ${numberQuestions}`
}

function calculPourcentScore () {
//Transformer le score en pourcentage. selon le nombre de questions
pourcentScore = (score / numberQuestions)*100;
}

//Commencer la récupération du bouton retryquiz:
//let retryQuiz = document.getElementById("retryQuiz")//Récupérer le bouton recommencer
//retryQuiz.addEventListener("click", (startScreen))//Ecouter le bouton récommencer pour réinitialiser le questionnaire an appelant la fonction StartScreen
