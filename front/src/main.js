import { initQuizz } from './quizz.js';
import './style.css';

document.querySelector('#app').innerHTML = `
        <header class="header" style="cursor:pointer;" role="banner">
          <h1>My Quizz</h1>
          Pour accéder a la page  <a href="about/">/about</a>
        </header>

        <main class="row">
          <div class="leftcolumn">
            <div class="card">
              <h1>Nom étudiant</h1>
              <h2>description</h5>
              <div id="quiz" aria-labelledby="quiz-title">
                <h2 id="quiz-title">À TOI DE JOUER</h2>
                <div id="question"></div>
                <div id="proposals"></div>
              </div>
            </div>
          </div>
          <div class="rightcolumn">
            <div class="card">
              <img src="/question.png" alt="txt" width="500" height="600">
            </div>
        </main>

                <nav class="topnav">
          <a href="#" aria-label="Facebook" class="fa fa-facebook"></a>
          <a href="#" aria-label="Twitter" class="fa fa-twitter"></a>
          <a href="#" aria-label="Google" class="fa fa-google"></a>
          <a href="#" aria-label="LinkedIn" class="fa fa-linkedin"></a>
          <a href="#" aria-label="Youtube" class="fa fa-youtube"></a>
          <a href="#" aria-label="Instagram" class="fa fa-instagram"></a>
          <a href="#" aria-label="Pinterest" class="fa fa-pinterest"></a>
          <a href="#" aria-label="Snap" class="fa fa-snapchat-ghost"></a>
          <a href="#" aria-label="Skype" class="fa fa-skype"></a>
          <a href="#" aria-label="Android" class="fa fa-android"></a>
          <a href="#" aria-label="Dribble" class="fa fa-dribbble"></a>
          <a href="#" aria-label="Vimeo" class="fa fa-vimeo"></a>
          <a href="#" aria-label="Tumblr" class="fa fa-tumblr"></a>
          <a href="#" aria-label="Vine" class="fa fa-vine"></a>
          <a href="#" aria-label="Foursquare" class="fa fa-foursquare"></a>
          <a href="#" aria-label="stumbleupon" class="fa fa-stumbleupon"></a>
          <a href="#" aria-label="Flickr" class="fa fa-flickr"></a>
          <a href="#" aria-label="Yahoo" class="fa fa-yahoo"></a>
          <a href="#" aria-label="Reddit" class="fa fa-reddit"></a>
          <a href="#" aria-label="RSS" class="fa fa-rss"></a>
        </nav>

        <footer class="footer" role="contentinfo">
          <h2>@2024</h2>
        </footer>
`

initQuizz();