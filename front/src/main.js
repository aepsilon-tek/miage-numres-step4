import { initQuizz } from './quizz.js';
import './style.css';

document.querySelector('#app').innerHTML = `
  <header class="header" style="cursor:pointer;">
    <h1>My Quizz</h1>
    <p>
      Pour accéder à la page 
      <a href="about/" style="text-decoration: none;">cliquez ici</a>
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
      <article class="card">
        <h2>Nom étudiant</h2>
        <p>Description</p>
        <section id="quiz">
          <h3 id="quiz-title">À TOI DE JOUER</h3>
          <div id="question" aria-live="polite" tabindex="0"></div>
          <div id="proposals" aria-live="polite" tabindex="0"></div>
        </section>
        <button id="submit-btn" class="accessible-btn">
          Soumettre
        </button>
      </article>
    </section>
    <aside class="rightcolumn">
      <div class="card">
        <img src="/question.png" width="500" height="600" alt="Point d'interrogation, illustration d'un quizz">
      </div>
    </aside>
  </main>

  <footer class="footer">
    <p>@2024</p>
  </footer>
`;

initQuizz();
