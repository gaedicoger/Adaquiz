//IMPORTS:
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

// ===========================================================================
// ==============================  CALCUL ==========================================
// ===========================================================================
//Fonction calcul du score:
/**
 * 
 * @param {*} indexUserAnswer 
 * @param {*} correctIndex 
 */
function calculScore (indexUserAnswer, correctIndex) { 
//quand je clique sur une réponse sur un bouton je stocke l'index de la réponse trouver comment le stocker sur la page bouton ?
if (indexUserAnswer === correctIndex) {
    score +=1;
  }
}

//Fonction transformer le score en pourcentage. selon le nombre de questions
/**
 * 
 * @param {*} score 
 * @param {*} numberQuestions 
 */
function calculPourcentScore (score, numberQuestions) {
pourcentScore = (score / numberQuestions)*100;
}

// ===========================================================================
// ==============================  DISPLAY ==========================================
// ===========================================================================

//Fonction pour afficher le score :
/**
 * 
 * @param {*} score 
 */
function displayScore (score) {
let resultScore=document.getElementById("resultScore")
resultScore.innerText=`Ton score est de ${score} points`
}

//Fonction Afficher les message en fonction du score en pourcentage:
/**
 * 
 * @param {*} pourcentScore 
 */

function displayScoreMessage (pourcentScore) { 
  let scoreMessage= document.getElementById("scoreMessage")//récupérer l'emplacement du score
  if (pourcentScore===100) {
    scoreMessage.innerText= `Aucune erreur, c'est parfait 😎`; //Remplacer le message par le score à jour selon le score ou le pourcentage de réussite
    } else if (pourcentScore >=80 && pourcentScore<100) {
      scoreMessage.innerText= `C'est bien, tu as fait peu d'erreurs 😉`
    } else if (pourcentScore >=50 && pourcentScore<80 ) {
      scoreMessage.innerText= `C'est pas mal, mais tu peux encore t'améliorer 💪`
    } else if (pourcentScore<50) {
      scoreMessage.innerText=`Aïe, tu as beaucoup d'erreurs, tu devrais réessayer 😅`
    } else {scoreMessage.innerText= `Oups ! Tu n'as trouvé aucune bonne réponse 😱`};
}


//Fonction pour afficher le nombre de questions réussies:
/**
 * 
 * @param {*} score 
 * @param {*} numberQuestions 
 */

function displayTotalScore (score, numberQuestions) {
  const displayTotalScore = document.getElementById("totalScore")
  displayTotalScore.innerText=` Tu as trouvé la bonne réponse pour ${score} questions sur ${numberQuestions}`;
}
// ===========================================================================
// ==============================  FINISH ==========================================
// ===========================================================================


export function endScreen () {
  const endScreen = document.querySelector(".endScreen");
  endScreen.classList.remove("hidden"); //afficher l’écran de fin
  calculScore(indexUserAnswer, correctIndex);
  calculPourcentScore (score, numberQuestions);
  displayScore (score);
  displayScoreMessage (pourcentScore);
  displayTotalScore (score, numberQuestions);
}

