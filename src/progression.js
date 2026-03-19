import quiz from "./quiz-femmes-scientifiques.json";

const totalQuestions = quiz.questions.length;
let currentQuestion = 0;

export function updateProgressBar() {
  const barre = document.getElementById("display-progress");

  if (!barre) return;

  currentQuestion++;

  const pourcentage = (currentQuestion / totalQuestions) * 100;
  barre.style.width = `${pourcentage}%`;
}
