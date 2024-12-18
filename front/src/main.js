import { initQuizz } from './quizz.js';
import './style.css';

document.querySelector('#app').innerHTML = `
        <header style="cursor:pointer;">
          <h1>My Quizz</h1>
          <p>Pour accéder à la page <a href="about/" style="text-decoration: none;" aria-label="Accéder à la page À propos">À propos</a>.</p>
        </header>

        <nav class="topnav">
          <a href="#" class="fa fa-facebook" aria-label="Lien vers Facebook"></a>
          <a href="#" class="fa fa-twitter" aria-label="Lien vers Twitter"></a>
          <a href="#" class="fa fa-google" aria-label="Lien vers Google"></a>
          <a href="#" class="fa fa-linkedin" aria-label="Lien vers LinkedIn"></a>
          <a href="#" class="fa fa-youtube" aria-label="Lien vers YouTube"></a>
          <a href="#" class="fa fa-instagram" aria-label="Lien vers Instagram"></a>
          <a href="#" class="fa fa-pinterest" aria-label="Lien vers Pinterest"></a>
          <a href="#" class="fa fa-snapchat-ghost" aria-label="Lien vers Snapchat"></a>
          <a href="#" class="fa fa-skype" aria-label="Lien vers Skype"></a>
          <a href="#" class="fa fa-android" aria-label="Lien vers Android"></a>
          <a href="#" class="fa fa-dribbble" aria-label="Lien vers Dribbble"></a>
          <a href="#" class="fa fa-vimeo" aria-label="Lien vers Vimeo"></a>
          <a href="#" class="fa fa-tumblr" aria-label="Lien vers Tumblr"></a>
          <a href="#" class="fa fa-vine" aria-label="Lien vers Vine"></a>
          <a href="#" class="fa fa-foursquare" aria-label="Lien vers Foursquare"></a>
          <a href="#" class="fa fa-stumbleupon" aria-label="Lien vers StumbleUpon"></a>
          <a href="#" class="fa fa-flickr" aria-label="Lien vers Flickr"></a>
          <a href="#" class="fa fa-yahoo" aria-label="Lien vers Yahoo"></a>
          <a href="#" class="fa fa-reddit" aria-label="Lien vers Reddit"></a>
          <a href="#" class="fa fa-rss" aria-label="Lien vers RSS"></a>
        </nav>

        <main class="row">
          <section class="leftcolumn">
            <article class="card">
              <h2>Nom étudiant</h2>
              <h3>Description</h3>
              <div id="quiz">
                <h2>A TOI DE JOUER</h2>
                <div id="question"></div>
                <div id="proposals"></div>
              </div>
            </article>
          </section>

          <aside class="rightcolumn">
            <article class="card">
              <img src="/question.png" alt="Image de point d'interrogation" width="500" height="600">
            </article>
          </aside>
        </main>

        <footer class="footer">
          <h2>&copy; 2024</h2>
        </footer>
`;

initQuizz();
