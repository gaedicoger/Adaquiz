// JS Page fin : Ecouter le bouton pour réinitialiser

import { endScreen } from "./display-end-screen";
import { startScreen } from "./start";

//todo code à introduire dans main.js :

// récupérer les éléments

const btnRetry = document.getElementById("retryQuiz");
const endScreen = document.querySelector(".endScreen");

// déclaration fonction

export function retryQuiz() {
  // Quand l’utilisateur clique sur "Recommencer":
  score = 0; // réinitialiser le score,
  // vider le localStorage (bonus) pourquoi faire alors qu'on veut concerver justement un historique des score grâce au local storage
  endScreen.classList.add("hidden"); //masquer l’écran de fin
  startScreen(); //Afficher l'écran start // cacher le bouton "Question suivante"
}
// - écouter le bouton et déclencher la fonction

btnRetry.addEventListener("click", () => {
  retryQuiz();
});
