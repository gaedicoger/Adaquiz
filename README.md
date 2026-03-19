# 🧠 AdaQuiz

AdaQuiz est une application web de quiz interactif développée en JavaScript vanilla.
Les questions sont chargées depuis un fichier JSON et l'utilisateur répond aux questions une par une avant d'obtenir son score final.

Ce projet a été réalisé dans le cadre d'un exercice pour pratiquer la manipulation du DOM, la gestion des événements et l'organisation du code JavaScript.

---

# 🎯 Objectifs du projet

- Charger des données depuis un fichier JSON
- Manipuler le DOM avec JavaScript
- Gérer des événements utilisateurs (clics)
- Créer une logique de quiz (score, progression)
- Structurer un projet JavaScript avec plusieurs fichiers
- Travailler en équipe avec Git

---

# 🕹️ Fonctionnement du quiz

1. **Écran d'accueil**
   - Affiche le titre du quiz
   - Bouton _Démarrer_

2. **Écran des questions**
   - Affiche la question
   - Propose 4 réponses possibles
   - Affiche un message après la réponse
   - Permet de passer à la question suivante

3. **Écran de fin**
   - Affiche le score final
   - Affiche un message personnalisé selon le score
   - Permet de recommencer le quiz

---

# 🛠️ Technologies utilisées

- HTML
- CSS
- JavaScript (Vanilla)
- Vite
- Git / GitHub

---

# 📦 Installation du projet

### 1️⃣ Cloner le dépôt

```bash
git clone https://github.com/gaedicoger/Adaquiz.git
```

### 2️⃣ Entrer dans le dossier du projet

```bash
cd Adaquiz
```

### 3️⃣ Initialiser le projet avec Vite

Si le projet n’a pas encore été créé avec Vite, tu peux le créer depuis ton dossier de travail (par exemple `~/ada`) :

```bash
pnpm create vite
```

Puis choisis :

- **Project name** : `adaquiz`
- **Framework** : `Vanilla`
- **Variant** : `JavaScript`
- **Use rollup-vite (Experimental)** : `No`
- **Install dependencies now** : `No` (tu pourras le faire ensuite)

> Ensuite, ouvre le projet dans VS Code :
>
> ```bash
> code adaquiz
> ```

### 4️⃣ Installer les dépendances

```bash
pnpm install
```

### 5️⃣ Lancer le serveur de développement

```bash
pnpm dev
```

> Une adresse locale s’affiche dans le terminal, généralement `http://localhost:5173`.
> Ouvre-la dans ton navigateur pour voir le quiz fonctionner.
> 💡 Pour arrêter le serveur : `Ctrl + C` dans le terminal.

### 6️⃣ Nettoyer le projet

Certains fichiers créés automatiquement par Vite ne sont pas nécessaires pour ton quiz :

- `src/counter.js`
- `src/javascript.svg`
- `public/vite.svg`

Tu peux les supprimer sans problème.

### 7️⃣ Ajouter le fichier JSON pour le quiz

Crée un fichier `quiz-femmes-scientifiques.json` dans `src/` avec les questions fournies dans l’énoncé.

### 8️⃣ Préparer `main.js`

Dans `src/main.js`, tu peux commencer avec :

```javascript
import "./style.css";
import quiz from "./quiz-femmes-scientifiques.json";

document.querySelector("#app > h1").innerText = quiz.title;
```

> ⚠️ Assure-toi d’avoir un `<h1>` dans `#app` dans ton `index.html`.

---

# 📂 Structure du projet

```
src
│
├── main.js
├── style.css
├── quiz-femmes-scientifiques.json
│
├── showStartScreen.js
├── questionScreen.js
├── endScreen.js
├── buttons.js
└── quizState.js
```

### Description des fichiers

| Fichier            | Rôle                                                 |
| ------------------ | ---------------------------------------------------- |
| main.js            | Point d'entrée de l'application                      |
| showStartScreen.js | Gestion de l'écran d'accueil                         |
| questionScreen.js  | Affichage des questions                              |
| endScreen.js       | Affichage de l'écran final                           |
| buttons.js         | Gestion des événements des boutons                   |
| quizState.js       | Gestion de l'état du quiz (score, question actuelle) |

---

# 📊 Gestion du state

L'état du quiz est centralisé dans un objet `state` :

```javascript
export const state = {
  currentQuestion: 0,
  score: 0,
  answered: false,
};
```

Cela permet de partager les données du quiz entre les différents fichiers JavaScript.

---

# 🚀 Améliorations possibles

- Barre de progression
- Animations
- Sons lors des réponses
- Confettis lors d'une bonne réponse
- Mélange aléatoire des questions
- Mode sombre
- Sauvegarde du score dans le localStorage

---

# 👥 Travail en équipe

Projet réalisé en groupe avec utilisation de Git :

- gestion des branches
- commits réguliers
- collaboration sur différentes parties du projet

---

# 📜 Licence

Projet pédagogique réalisé dans le cadre de la formation Ada Tech School.
