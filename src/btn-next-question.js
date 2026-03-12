/* JS Page questions :

- Le bouton « Question suivante » doit être caché par défaut et s’afficher lorsqu’on clique sur une réponse
- Lorsqu’on clique sur ce bouton, il doit afficher la question suivante
- La dernière question il doit afficher l’écran de fin.

*/

// récupérer le bouton "question suivante"

const btnNextQuestion = document.getElementById("nextQuestion");
// console.log(btnNextQuestion);

// cacher le bouton par défaut

btnNextQuestion.style.display = "none"; //? ajouter une classe pour cacher les éléments ?
