import { initQuizz, focusCurrentQuestion } from './quizz.js';
import './style.css';

document.querySelector('#app').innerHTML = `
        <header style="cursor:pointer;" aria-label="En-tête du quizz">
          <h1>My Quizz</h1>
          <p>Pour accéder à la page <a href="about/" style="text-decoration: none;" aria-label="Page À propos" class="accessible-link">Page À propos</a></p>
        </header>

        <div id="shortcut-message" aria-live="assertive" style="position: absolute; top: -9999px;">
          Cliquez sur espace pour aller directement au quizz.
        </div>

        <nav class="topnav" aria-label="Liens vers les réseaux sociaux">
          <a href="#" class="fa fa-facebook accessible-link" aria-label="Lien vers Facebook" title="Visitez notre page Facebook"></a>
          <a href="#" class="fa fa-twitter accessible-link" aria-label="Lien vers Twitter" title="Visitez notre page Twitter"></a>
          <a href="#" class="fa fa-google accessible-link" aria-label="Lien vers Google" title="Visitez notre page Google"></a>
          <a href="#" class="fa fa-linkedin accessible-link" aria-label="Lien vers LinkedIn" title="Visitez notre page LinkedIn"></a>
          <a href="#" class="fa fa-youtube accessible-link" aria-label="Lien vers YouTube" title="Visitez notre chaîne YouTube"></a>
          <a href="#" class="fa fa-instagram accessible-link" aria-label="Lien vers Instagram" title="Visitez notre page Instagram"></a>
          <a href="#" class="fa fa-pinterest accessible-link" aria-label="Lien vers Pinterest" title="Visitez notre page Pinterest"></a>
          <a href="#" class="fa fa-snapchat-ghost accessible-link" aria-label="Lien vers Snapchat" title="Ajoutez-nous sur Snapchat"></a>
          <a href="#" class="fa fa-skype accessible-link" aria-label="Lien vers Skype" title="Contactez-nous sur Skype"></a>
          <a href="#" class="fa fa-android accessible-link" aria-label="Lien vers Android" title="Téléchargez notre application Android"></a>
          <a href="#" class="fa fa-dribbble accessible-link" aria-label="Lien vers Dribbble" title="Visitez notre page Dribbble"></a>
          <a href="#" class="fa fa-vimeo accessible-link" aria-label="Lien vers Vimeo" title="Visitez notre page Vimeo"></a>
          <a href="#" class="fa fa-tumblr accessible-link" aria-label="Lien vers Tumblr" title="Visitez notre page Tumblr"></a>
          <a href="#" class="fa fa-vine accessible-link" aria-label="Lien vers Vine" title="Visitez notre page Vine"></a>
          <a href="#" class="fa fa-foursquare accessible-link" aria-label="Lien vers Foursquare" title="Visitez notre page Foursquare"></a>
          <a href="#" class="fa fa-stumbleupon accessible-link" aria-label="Lien vers StumbleUpon" title="Visitez notre page StumbleUpon"></a>
          <a href="#" class="fa fa-flickr accessible-link" aria-label="Lien vers Flickr" title="Visitez notre page Flickr"></a>
          <a href="#" class="fa fa-yahoo accessible-link" aria-label="Lien vers Yahoo" title="Visitez notre page Yahoo"></a>
          <a href="#" class="fa fa-reddit accessible-link" aria-label="Lien vers Reddit" title="Visitez notre page Reddit"></a>
          <a href="#" class="fa fa-rss accessible-link" aria-label="Lien vers flux RSS" title="Abonnez-vous à notre flux RSS"></a>
        </nav>

        <main class="row">
          <section class="leftcolumn">
            <article class="card" aria-label="Carte d'information de l'étudiant">
              <h1>Nom étudiant</h1>
              <h5>Description</h5>
              <section id="quiz" role="region" aria-labelledby="quiz-title" aria-live="assertive" tabindex="-1">
                <h2 id="quiz-title">A TOI DE JOUER</h2>
                <div id="question" aria-live="polite"></div>
                <div id="proposals" aria-live="polite" tabindex="-1"></div>
              </section>
            </article>
          </section>
          <aside class="rightcolumn">
            <div class="card">
              <img src="/question.png" width="500" height="600" alt="Point d'interrogation, illustration d'un quizz" aria-hidden="false">
            </div>
          </aside>
        </main>

        <footer role="contentinfo">
          <h2>@2024</h2>
        </footer>

        <script>
          // Ajout du raccourci clavier
          window.addEventListener('keydown', (event) => {
            if (event.code === 'Space' || event.key === ' ') {
              event.preventDefault();
              focusCurrentQuestion();
            }
          });
        </script>
`;

initQuizz();
