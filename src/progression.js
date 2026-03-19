import quiz from "./quiz-femmes-scientifiques.json";

const totalQuestions = quiz.questions.length;
export let currentQuestion = 0;

export function updateProgressBar() {
  const barre = document.getElementById("display-progress");

  if (!barre) return;

  currentQuestion++;

  const pourcentage = (currentQuestion / totalQuestions) * 100;
  barre.style.width = `${pourcentage}%`;
}

export function resetProgressBar() {
  currentQuestion = 0;
  const barre = document.getElementById("display-progress");
  if (!barre) return;
  barre.style.width = "0%";
}
