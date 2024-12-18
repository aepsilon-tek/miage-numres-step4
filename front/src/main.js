import { initQuizz } from './quizz.js';
import './style.css';

document.querySelector('#app').innerHTML = `
  <header class="header" style="cursor:pointer;" aria-label="En-tête du quizz">
    <h1>My Quizz</h1>
    <p>
      Pour accéder à la page 
      <a href="about/" style="text-decoration: none;" aria-label="Accéder à la page À propos">cliquez ici</a>
    </p>
  </header>

  <nav class="topnav" aria-label="Liens vers les réseaux sociaux">
    <a href="#" class="fa fa-facebook" aria-label="Lien vers Facebook"></a>
    <a href="#" class="fa fa-twitter" aria-label="Lien vers Twitter"></a>
    <a href="#" class="fa fa-google" aria-label="Lien vers Google"></a>
    <a href="#" class="fa fa-linkedin" aria-label="Lien vers LinkedIn"></a>
    <a href="#" class="fa fa-youtube" aria-label="Lien vers YouTube"></a>
    <a href="#" class="fa fa-instagram" aria-label="Lien vers Instagram"></a>
  </nav>

  <main class="row">
    <section class="leftcolumn">
      <article class="card" aria-label="Carte d'information de l'étudiant">
        <h2>Nom étudiant</h2>
        <p>Description</p>
        <section id="quiz" role="region" aria-labelledby="quiz-title">
          <h3 id="quiz-title">À TOI DE JOUER</h3>
          <div id="question" aria-live="polite" tabindex="0"></div>
          <div id="proposals" aria-live="polite" tabindex="0"></div>
        </section>
        <button id="submit-btn" aria-label="Soumettre votre réponse" class="accessible-btn">
          Soumettre
        </button>
      </article>
    </section>
    <aside class="rightcolumn">
      <section class="card">
        <img src="/question.png" width="500" height="600" alt="Point d'interrogation, illustration d'un quizz">
      </section>
    </aside>
  </main>

  <footer class="footer" role="contentinfo">
    <p>@2024</p>
  </footer>
`;

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
