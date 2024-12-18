import { initQuizz } from './quizz.js';
import './style.css';

document.querySelector('#app').innerHTML = `
  <div class="header" style="cursor:pointer;" aria-label="En-tête du quizz">
    <h1>My Quizz</h1>
    <p>
      Pour accéder à la page 
      <a href="about/" style="text-decoration: none;" aria-label="Accéder à la page À propos">cliquez ici</a>
    </p>
  </div>

  <div class="topnav" role="navigation" aria-label="Liens vers les réseaux sociaux">
    <a href="#" class="fa fa-facebook" aria-label="Lien vers Facebook"></a>
    <a href="#" class="fa fa-twitter" aria-label="Lien vers Twitter"></a>
    <a href="#" class="fa fa-google" aria-label="Lien vers Google"></a>
    <a href="#" class="fa fa-linkedin" aria-label="Lien vers LinkedIn"></a>
    <a href="#" class="fa fa-youtube" aria-label="Lien vers YouTube"></a>
    <a href="#" class="fa fa-instagram" aria-label="Lien vers Instagram"></a>
    <!-- Réduisez la liste pour la pertinence, en gardant les réseaux sociaux principaux -->
  </div>

  <div class="row">
    <div class="leftcolumn">
      <div class="card" aria-label="Carte d'information de l'étudiant">
        <h1>Nom étudiant</h1>
        <h5>Description</h5>
        <div id="quiz" role="region" aria-labelledby="quiz-title">
          <h2 id="quiz-title">À TOI DE JOUER</h2>
          <div id="question" aria-live="polite" tabindex="0"></div>
          <div id="proposals" aria-live="polite" tabindex="0"></div>
        </div>
        <button id="submit-btn" aria-label="Soumettre votre réponse" class="accessible-btn">
          Soumettre
        </button>
      </div>
    </div>
    <div class="rightcolumn">
      <div class="card">
        <img src="/question.png" width="500" height="600" alt="Point d'interrogation, illustration d'un quizz" aria-hidden="false">
      </div>
    </div>
  </div>

  <div class="footer" role="contentinfo">
    <h2>@2024</h2>
  </div>
`;

// Fonctionnalités supplémentaires pour augmenter l'accessibilité
document.querySelectorAll('a, button, input, select, textarea').forEach((el) => {
  el.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      el.click();
    }
  });
});

// Focus visible pour les utilisateurs naviguant au clavier
const style = document.createElement('style');
style.textContent = `
  a, button {
    outline: none;
    transition: outline 0.3s ease;
  }
  a:focus, button:focus {
    outline: 3px solid #007BFF;
  }
`;
document.head.appendChild(style);

initQuizz();
