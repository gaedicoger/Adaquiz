import quiz from "./quiz-femmes-scientifiques.json";
// affiche d'une barre de progression en fonction du score

const totalQuestions = quiz.questions.length; //! prendre la longueur du tableau JSON pour que ce soit adaptable
let currentQuestion = 0; //! idem ici

export function updateProgressBar() {
  const barre = document.getElementById("display-progress");
  const pourcentage = (currentQuestion / totalQuestions) * 100;
  barre.style.width = `${pourcentage}%`;
  if (currentQuestion <= totalQuestions) {
    currentQuestion++;
  }
}
