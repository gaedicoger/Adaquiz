# 🤓 AdaQuiz

Quiz interactif sur les femmes scientifiques célèbres, développé en JavaScript vanilla avec Vite.

---

## 🚀 Lancer le projet

```bash
pnpm install
pnpm dev
```

## 📁 Structure

```
src/
├── main.js                        # point d'entrée
├── style.css
├── quiz-femmes-scientifiques.json
├── start.js                       # écran d'accueil
├── quiz-display.js                # affichage des questions
├── btn-next-question.js           # navigation entre questions
├── btn-retry-quiz.js              # recommencer le quiz
├── calcul-score.js                # gestion du score
├── display-end-screen.js          # écran de fin
├── progression.js                 # barre de progression
├── local-storage.js               # meilleur score persisté
└── systeme-de-vie.js              # système de vies
```

## ✨ Fonctionnalités

- Questions chargées depuis un fichier JSON
- Feedback immédiat après chaque réponse (bonne/mauvaise)
- Barre de progression au fil des questions
- Système de **5 vies** — quiz relancé automatiquement à 0 vie
- Score final avec message selon le pourcentage de réussite
- **Meilleur score** sauvegardé en localStorage

## 🛠️ Stack

- JavaScript ES6 (modules)
- CSS3 (Flexbox, dark mode)
- Vite

## 👥 Équipe

Projet réalisé dans le cadre de la formation Ada Tech School promotion Gisèle Halimi Nantes
Apprenant(e)s : Gaédic, Mathis, Elodie.
