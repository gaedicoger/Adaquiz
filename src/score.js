//Récupérer les réponses aux questions: combien de bonnes réponses?
//import ? score from "./es-questions.js"
//import ? Récupérer le nombre de questions en tout.
//Import ?Récupérer le nombre de question réussies.
import startScreen from "./start.js";

//Afficher le score:
function displayScoreMessage () { 
let scoreMessage= document.getElementById("scoreMessage")//récupérer l'emplacement du score
if (score===100) {scoreMessage.innerText= `Aucune erreur, c'est parfait 😎`; //Remplacer le message par le score à jour selon le score ou le pourcentage de réussite
} if else (score >=80 && score<100) {scoreMessage.innerText= `C'est bien, tu as fait peu d'erreurs 😉`}
if else (score >=50 && score<80 ) {scoreMessage.innerText= `C'est pas mal, mais tu peux encore t'améliorer 💪`}
if else (score<50) {scoreMessage.innerText=`Aïe, tu as beaucoup d'erreurs, tu devrais réessayer 😅`}
else {scoreMessage.innerText= `Oups ! Tu n'as trouvé aucune bonne réponse 😱`};
}

//Fonction pour afficher le score :
function displayScore () {
let resultScore=document.getElementById("resultScore")
resultScore.innerText=`Ton score est de ${score} points`
}
//Fonction pour afficher le nombre de questions réussies:
function displayTotalScore () {

}

let retryQuiz = document.getElementById("retryQuiz")//Récupérer le bouton recommencer
retryQuiz.addEventListener("click", (startScreen))//Ecouter le bouton récommencer pour réinitialiser le questionnaire an appelant la fonction StartScreen
}


