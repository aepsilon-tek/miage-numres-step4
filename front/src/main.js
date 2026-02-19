import { initQuizz } from './quizz.js';
import './style.css';

document.querySelector('#app').innerHTML = `
        <div class="header" style="cursor:pointer;">
          <h1>My Quizz</h1>
        </div>

        <div class="row">
          <div class="leftcolumn">
            <div class="card">
              <h1>Nom étudiant</h1>
              <h5>description</h5>
              <div id="quiz" role="main">
                <h2>A TOI DE JOUER</h2>
                <div id="question" aria-live="assertive"></div>
                <div id="proposals"></div>
              </div>
            </div>
          </div>
          <div class="rightcolumn">
            <div class="card">
              <img src="/question.png" width="500" height="600" alt="Illustration d'une question de quiz">
            </div>
        </div>

        <div class="footer" role="contentinfo">
          <h2>@2024</h2>
          <div style="margin-top: 20px;">
            <button onclick="window.location.href='about/'" style="margin-bottom: 15px;">More About Us</button>
          </div>
          <div class="topnav" role="navigation" aria-label="Liens réseaux sociaux">
            <a href="https://facebook.com" class="fa fa-facebook" aria-label="Suivez-nous sur Facebook"></a>
            <a href="https://twitter.com" class="fa fa-twitter" aria-label="Suivez-nous sur Twitter"></a>
            <a href="https://google.com" class="fa fa-google" aria-label="Visitez notre page Google"></a>
            <a href="https://linkedin.com" class="fa fa-linkedin" aria-label="Suivez-nous sur LinkedIn"></a>
            <a href="https://youtube.com" class="fa fa-youtube" aria-label="Abonnez-vous à notre chaîne YouTube"></a>
            <a href="https://instagram.com" class="fa fa-instagram" aria-label="Suivez-nous sur Instagram"></a>
            <a href="https://pinterest.com" class="fa fa-pinterest" aria-label="Suivez-nous sur Pinterest" tabindex="-1"></a>
            <a href="https://snapchat.com" class="fa fa-snapchat-ghost" aria-label="Suivez-nous sur Snapchat" tabindex="-1"></a>
            <a href="https://skype.com" class="fa fa-skype" aria-label="Contactez-nous sur Skype" tabindex="-1"></a>
            <a href="https://android.com" class="fa fa-android" aria-label="Découvrez notre application Android" tabindex="-1"></a>
            <a href="https://dribbble.com" class="fa fa-dribbble" aria-label="Découvrez nos créations sur Dribbble" tabindex="-1"></a>
            <a href="https://vimeo.com" class="fa fa-vimeo" aria-label="Regardez nos vidéos sur Vimeo" tabindex="-1"></a>
            <a href="https://tumblr.com" class="fa fa-tumblr" aria-label="Suivez-nous sur Tumblr" tabindex="-1"></a>
            <a href="https://vine.co" class="fa fa-vine" aria-label="Découvrez nos vidéos sur Vine" tabindex="-1"></a>
            <a href="https://foursquare.com" class="fa fa-foursquare" aria-label="Retrouvez-nous sur Foursquare" tabindex="-1"></a>
            <a href="https://stumbleupon.com" class="fa fa-stumbleupon" aria-label="Découvrez-nous sur StumbleUpon" tabindex="-1"></a>
            <a href="https://flickr.com" class="fa fa-flickr" aria-label="Découvrez nos photos sur Flickr" tabindex="-1"></a>
            <a href="https://yahoo.com" class="fa fa-yahoo" aria-label="Visitez notre page Yahoo" tabindex="-1"></a>
            <a href="https://reddit.com" class="fa fa-reddit" aria-label="Rejoignez-nous sur Reddit" tabindex="-1"></a>
            <a href="https://rss.com" class="fa fa-rss" aria-label="Abonnez-vous à notre flux RSS" tabindex="-1"></a>
          </div>
        </div>
`

initQuizz();