import { initQuizz } from './quizz.js';
import './style.css';

document.querySelector('#app').innerHTML = `
        <a href="#quiz" id="skip-to-quiz" class="visually-hidden" aria-label="Aller directement au quizz en appuyant sur fleche de droite">Accéder au quizz</a>
        <header class="header" style="cursor:pointer;" aria-label="En-tête du quizz">
          <h1>My Quizz</h1>
          <p>Pour accéder à la page <a href="about/" style="text-decoration: none;" aria-label="Page À propos">cliquez ici</a></p>
        </header>

        <nav class="topnav" role="navigation" aria-label="Liens vers les réseaux sociaux">
          <a href="#" class="fa fa-facebook" aria-label="Facebook"></a>
          <a href="#" class="fa fa-twitter" aria-label="Twitter"></a>
          <a href="#" class="fa fa-google" aria-label="Google"></a>
          <a href="#" class="fa fa-linkedin" aria-label="LinkedIn"></a>
          <a href="#" class="fa fa-youtube" aria-label="YouTube"></a>
          <a href="#" class="fa fa-instagram" aria-label="Instagram"></a>
          <a href="#" class="fa fa-pinterest" aria-label="Pinterest"></a>
          <a href="#" class="fa fa-snapchat-ghost" aria-label="Snapchat"></a>
          <a href="#" class="fa fa-skype" aria-label="Skype"></a>
          <a href="#" class="fa fa-android" aria-label="Android"></a>
          <a href="#" class="fa fa-dribbble" aria-label="Dribbble"></a>
          <a href="#" class="fa fa-vimeo" aria-label="Vimeo"></a>
          <a href="#" class="fa fa-tumblr" aria-label="Tumblr"></a>
          <a href="#" class="fa fa-vine" aria-label="Vine"></a>
          <a href="#" class="fa fa-foursquare" aria-label="Foursquare"></a>
          <a href="#" class="fa fa-stumbleupon" aria-label="StumbleUpon"></a>
          <a href="#" class="fa fa-flickr" aria-label="Flickr"></a>
          <a href="#" class="fa fa-yahoo" aria-label="Yahoo"></a>
          <a href="#" class="fa fa-reddit" aria-label="Reddit"></a>
          <a href="#" class="fa fa-rss" aria-label="RSS"></a>
        </nav>

        <main class="row">
          <section class="leftcolumn">
            <article class="card" aria-label="Carte d'information de l'étudiant">
              <h1>Nom étudiant</h1>
              <h2>Description</h2>
              <div id="quiz" role="region" aria-labelledby="quiz-title">
                <h2 id="quiz-title">A TOI DE JOUER</h2>
                <div id="question" aria-live="polite"></div>
                <div id="proposals" aria-live="polite"></div>
              </div>
            </article>
          </section>
          <section class="rightcolumn">
            <div class="card">
              <img src="/question.png" width="500" height="600" alt="Point d'interrogation, illustration d'un quizz" aria-hidden="false">
            </div>
          </section>
        </main>

        <footer class="footer" role="contentinfo">
          <h2>@2024</h2>
        </footer>
`;

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') {
    const quiz = document.getElementById('quiz');
    quiz.focus({ focusVisible: true });
  }
});
initQuizz();
