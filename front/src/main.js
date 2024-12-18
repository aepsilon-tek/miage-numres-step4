import { initQuizz } from './quizz.js';
import './style.css';

document.querySelector('#app').innerHTML = `
        <header style="cursor:pointer;">
          <h1>My Quizz</h1>
          <p>Pour accéder à la page /about, <a href="about/" style="text-decoration: underline;" aria-label="Accéder à la page À propos">cliquez ici pour en savoir plus</a>.</p>
        </header>

        <nav class="topnav">
          <a href="#" class="fa fa-facebook" aria-label="Visiter notre page Facebook" style="text-decoration: underline;">Facebook</a>
          <a href="#" class="fa fa-twitter" aria-label="Visiter notre page Twitter" style="text-decoration: underline;">Twitter</a>
          <a href="#" class="fa fa-google" aria-label="Visiter notre page Google" style="text-decoration: underline;">Google</a>
          <a href="#" class="fa fa-linkedin" aria-label="Visiter notre page LinkedIn" style="text-decoration: underline;">LinkedIn</a>
          <a href="#" class="fa fa-youtube" aria-label="Visiter notre chaîne YouTube" style="text-decoration: underline;">YouTube</a>
          <a href="#" class="fa fa-instagram" aria-label="Visiter notre page Instagram" style="text-decoration: underline;">Instagram</a>
          <a href="#" class="fa fa-pinterest" aria-label="Visiter notre page Pinterest" style="text-decoration: underline;">Pinterest</a>
          <a href="#" class="fa fa-snapchat-ghost" aria-label="Visiter notre page Snapchat" style="text-decoration: underline;">Snapchat</a>
          <a href="#" class="fa fa-skype" aria-label="Visiter notre profil Skype" style="text-decoration: underline;">Skype</a>
          <a href="#" class="fa fa-android" aria-label="Visiter notre page Android" style="text-decoration: underline;">Android</a>
          <a href="#" class="fa fa-dribbble" aria-label="Visiter notre page Dribbble" style="text-decoration: underline;">Dribbble</a>
          <a href="#" class="fa fa-vimeo" aria-label="Visiter notre chaîne Vimeo" style="text-decoration: underline;">Vimeo</a>
          <a href="#" class="fa fa-tumblr" aria-label="Visiter notre page Tumblr" style="text-decoration: underline;">Tumblr</a>
          <a href="#" class="fa fa-vine" aria-label="Visiter notre page Vine" style="text-decoration: underline;">Vine</a>
          <a href="#" class="fa fa-foursquare" aria-label="Visiter notre page Foursquare" style="text-decoration: underline;">Foursquare</a>
          <a href="#" class="fa fa-stumbleupon" aria-label="Visiter notre page StumbleUpon" style="text-decoration: underline;">StumbleUpon</a>
          <a href="#" class="fa fa-flickr" aria-label="Visiter notre page Flickr" style="text-decoration: underline;">Flickr</a>
          <a href="#" class="fa fa-yahoo" aria-label="Visiter notre page Yahoo" style="text-decoration: underline;">Yahoo</a>
          <a href="#" class="fa fa-reddit" aria-label="Visiter notre page Reddit" style="text-decoration: underline;">Reddit</a>
          <a href="#" class="fa fa-rss" aria-label="S’abonner à notre flux RSS" style="text-decoration: underline;">RSS</a>
        </nav>

        <main class="row">
          <section class="leftcolumn">
            <article class="card">
              <h1>Nom étudiant</h1>
              <p>description</p>
              <section id="quiz">
                <h2>A TOI DE JOUER</h2>
                <div id="question"></div>
                <div id="proposals"></div>
              </section>
            </article>
          </section>
          <aside class="rightcolumn">
            <div class="card">
              <img src="/question.png" width="500" height="600" alt="Illustration de quiz">
            </div>
          </aside>
        </main>

        <footer class="footer">
          <h2>@2024</h2>
        </footer>
`;

initQuizz();
