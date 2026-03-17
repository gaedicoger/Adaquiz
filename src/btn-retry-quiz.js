// JS Page fin : Ecouter le bouton pour réinitialiser

// import { endScreen } from "./display-end-screen";
// import { startScreen } from "./start";
import { showQuestion } from "./quiz-display.js";
import { initBtnNext } from "./btn-next-question.js";

// récupérer les éléments

const btnRetry = document.getElementById("retryQuiz");

// déclaration fonction

export function retryQuiz() {
  // Quand l’utilisateur clique sur "Recommencer":
  score = 0; // réinitialiser le score,
  // vider le localStorage (bonus) pourquoi faire alors qu'on veut concerver justement un historique des score grâce au local storage
}

// - écouter le bouton et déclencher la fonction

btnRetry.addEventListener("click", () => {
  const endScreen = document.querySelector(".endScreen");
  endScreen.classList.add("hidden"); //masquer l’écran de fin
  retryQuiz();
  showQuestion();
  initBtnNext();
});
