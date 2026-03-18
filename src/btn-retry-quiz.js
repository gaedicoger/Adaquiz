// JS Page fin : Ecouter le bouton pour réinitialiser

// import { endScreen } from "./display-end-screen";
// import { startScreen } from "./start";
import { showQuestion } from "./quiz-display.js";
import { initBtnNext, answerButtons } from "./btn-next-question.js";
import "./calcul-score.js";
import { answerMessage } from "./quiz-display.js";

// récupérer les éléments

const btnRetry = document.getElementById("retryQuiz");

// déclaration fonction

// export function retryQuiz() {
//   // Quand l’utilisateur clique sur "Recommencer":
//   score = 0; // réinitialiser le score,
//   currentQuestionIndex = 0;
//   // vider le localStorage (bonus) pourquoi faire alors qu'on veut concerver justement un historique des score grâce au local storage
// }

// - écouter le bouton et déclencher la fonction
export function initRetryButton() {
  btnRetry.addEventListener("click", () => {
    const endScreen = document.querySelector(".endScreen");
    endScreen.classList.add("hidden"); //masquer l’écran de fin
    const displayQuizScreen = document.getElementById("questions-container");
    displayQuizScreen.classList.remove("hidden");
    answerButtons.forEach((button) => (button.disabled = false)); //Réactivé les boutons pour la question suivante
    answerMessage.innerHTML = ``;
    resetScore();
    // retryQuiz();
    showQuestion();
    initBtnNext();
  });
}
