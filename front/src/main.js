import { initQuizz } from './quizz.js';
import './style.css';

document.querySelector('#app').innerHTML = `
        <div class="header" style="cursor:pointer;">
          <h1>My Quizz</h1>
          Pour accéder a la page /about <a href="about/" style="text-decoration: none;">click ici</a>
        </div>


        <div class="topnav">
          <a href="#" aria-label="Lien vers Facebook" class="fa fa-facebook"></a>
          <a href="#" aria-label="Lien vers Twitter" class="fa fa-twitter"></a>
          <a href="#" aria-label="Lien vers Google" class="fa fa-google"></a>
          <a href="#" aria-label="Lien vers LinkedIn" class="fa fa-linkedin"></a>
          <a href="#" aria-label="Lien vers YouTube" class="fa fa-youtube"></a>
          <a href="#" aria-label="Lien vers Instagram" class="fa fa-instagram"></a>
          <a href="#" aria-label="Lien vers Pinterest" class="fa fa-pinterest"></a>
          <a href="#" aria-label="Lien vers Snapchat" class="fa fa-snapchat-ghost"></a>
          <a href="#" aria-label="Lien vers Skype" class="fa fa-skype"></a>
          <a href="#" aria-label="Lien vers Android" class="fa fa-android"></a>
          <a href="#" aria-label="Lien vers Dribbble" class="fa fa-dribbble"></a>
          <a href="#" aria-label="Lien vers Vimeo" class="fa fa-vimeo"></a>
          <a href="#" aria-label="Lien vers Tumblr" class="fa fa-tumblr"></a>
          <a href="#" aria-label="Lien vers Vine" class="fa fa-vine"></a>
          <a href="#" aria-label="Lien vers Foursquare" class="fa fa-foursquare"></a>
          <a href="#" aria-label="Lien vers StumbleUpon" class="fa fa-stumbleupon"></a>
          <a href="#" aria-label="Lien vers Flickr" class="fa fa-flickr"></a>
          <a href="#" aria-label="Lien vers Yahoo" class="fa fa-yahoo"></a>
          <a href="#" aria-label="Lien vers Reddit" class="fa fa-reddit"></a>
          <a href="#" aria-label="Lien RSS" class="fa fa-rss"></a>
        </div>

        <div class="row">
          <div class="leftcolumn">
            <div class="card">
              <h1>Nom étudiant</h1>
              <h5>description</h5>
              <div id="quiz">
                <h2>A TOI DE JOUER</h2>
                <div id="question"></div>
                <div id="proposals"></div>
              </div>
            </div>
          </div>
          <div class="rightcolumn">
            <div class="card">
              <img src="/question.png" width="500" height="600" alt="image descriptif">
            </div>
        </div>

        <div class="footer">
          <h2>@2024</h2>
        </div>
`

initQuizz();