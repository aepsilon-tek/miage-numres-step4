import { initQuizz } from './quizz.js';
import './style.css';

document.querySelector('#app').innerHTML = `
        <div class="header" style="cursor:pointer;">
          <h1 id="main-title">My Quizz</h1>
          <p>Pour accéder à la page /about, <a href="about/" style="text-decoration: none;" aria-label="Accéder à la page À propos">cliquez ici</a></p>
        </div>

        <nav class="topnav" aria-label="Réseaux sociaux">
          <a alt="facebook" href="#" class="fa fa-facebook" aria-label="Facebook"></a>
          <a alt="twitter" href="#" class="fa fa-twitter" aria-label="Twitter"></a>
          <a alt="google" href="#" class="fa fa-google" aria-label="Google"></a>
          <a alt="linkedin" href="#" class="fa fa-linkedin" aria-label="LinkedIn"></a>
          <a alt="youtube" href="#" class="fa fa-youtube" aria-label="YouTube"></a>
          <a alt="instagram" href="#" class="fa fa-instagram" aria-label="Instagram"></a>
          <a alt="pinterest" href="#" class="fa fa-pinterest" aria-label="Pinterest"></a>
          <a alt="snapchat" href="#" class="fa fa-snapchat-ghost" aria-label="Snapchat"></a>
          <a alt="skype" href="#" class="fa fa-skype" aria-label="Skype"></a>
          <a alt="android" href="#" class="fa fa-android" aria-label="Android"></a>
          <a alt="dribbble" href="#" class="fa fa-dribbble" aria-label="Dribbble"></a>
          <a alt="vimeo" href="#" class="fa fa-vimeo" aria-label="Vimeo"></a>
          <a alt="tumblr" href="#" class="fa fa-tumblr" aria-label="Tumblr"></a>
          <a alt="vine" href="#" class="fa fa-vine" aria-label="Vine"></a>
          <a alt="foursquare" href="#" class="fa fa-foursquare" aria-label="Foursquare"></a>
          <a alt="stumbleupon" href="#" class="fa fa-stumbleupon" aria-label="StumbleUpon"></a>
          <a alt="flickr" href="#" class="fa fa-flickr" aria-label="Flickr"></a>
          <a alt="yahoo" href="#" class="fa fa-yahoo" aria-label="Yahoo"></a>
          <a alt="reddit" href="#" class="fa fa-reddit" aria-label="Reddit"></a>
          <a alt="rss" href="#" class="fa fa-rss" aria-label="RSS"></a>
        </nav>

        <div class="row" role="main">
          <div class="leftcolumn" aria-labelledby="main-title">
            <div class="card">
              <h1 id="student-name">Nom étudiant</h1>
              <h5 id="student-description">description</h5>
              <div id="quiz" aria-live="polite" role="region" aria-labelledby="quiz-title">
                <h2 id="quiz-title">A TOI DE JOUER</h2>
                <div id="question" aria-live="assertive"></div>
                <div id="proposals"></div>
              </div>
            </div>
          </div>
          <div class="rightcolumn">
            <div class="card" aria-hidden="true">
              <img alt="point d'interrogation" src="/question.png" width="500" height="600">
            </div>
          </div>
        </div>

        <footer class="footer" role="contentinfo">
          <h2>@2024</h2>
        </footer>
`;

initQuizz();
