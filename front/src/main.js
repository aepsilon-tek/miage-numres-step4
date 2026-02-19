import { initQuizz } from './quizz.js';
import './style.css';

document.querySelector('#app').innerHTML = `
        <header class="header" style="cursor:pointer;">
          <h1>My Quizz</h1>
            Pour en savoir plus sur notre équipe, consultez la page 
              <a href="/about" style="text-decoration: underline;" aria-label="Vers la page À propos de nous">
                À propos de nous
              </a>
        </header>

        <section class="row">
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
              <img src="/question.png" width="500" height="600">
            </div>
        </section>

                <section class="topnav">
          <a href="#" class="fa fa-facebook" aria-label="Suivez-nous sur Facebook" target="_blank" rel="noopener"></a>
          <a href="#" class="fa fa-twitter" aria-label="Suivez-nous sur Twitter" target="_blank" rel="noopener"></a>
          <a href="#" class="fa fa-google" aria-label="Suivez-nous sur Google" target="_blank" rel="noopener"></a>
          <a href="#" class="fa fa-linkedin" aria-label="Suivez-nous sur LinkedIn" target="_blank" rel="noopener"></a>
          <a href="#" class="fa fa-youtube" aria-label="Suivez-nous sur YouTube" target="_blank" rel="noopener"></a>
          <a href="#" class="fa fa-instagram" aria-label="Suivez-nous sur Instagram" target="_blank" rel="noopener"></a>
          <a href="#" class="fa fa-pinterest" aria-label="Suivez-nous sur Pinterest" target="_blank" rel="noopener"></a>
          <a href="#" class="fa fa-snapchat-ghost" aria-label="Suivez-nous sur Snapchat" target="_blank" rel="noopener"></a>
          <a href="#" class="fa fa-skype" aria-label="Contactez-nous sur Skype" target="_blank" rel="noopener"></a>
          <a href="#" class="fa fa-android" aria-label="Télécharger notre application Android" target="_blank" rel="noopener"></a>
          <a href="#" class="fa fa-dribbble" aria-label="Voir notre portfolio Dribbble" target="_blank" rel="noopener"></a>
          <a href="#" class="fa fa-vimeo" aria-label="Voir nos vidéos sur Vimeo" target="_blank" rel="noopener"></a>
          <a href="#" class="fa fa-tumblr" aria-label="Suivez notre blog Tumblr" target="_blank" rel="noopener"></a>
          <a href="#" class="fa fa-vine" aria-label="Voir nos vidéos Vine" target="_blank" rel="noopener"></a>
          <a href="#" class="fa fa-foursquare" aria-label="Retrouvez-nous sur Foursquare" target="_blank" rel="noopener"></a>
          <a href="#" class="fa fa-stumbleupon" aria-label="Suivez-nous sur StumbleUpon" target="_blank" rel="noopener"></a>
          <a href="#" class="fa fa-flickr" aria-label="Voir nos photos sur Flickr" target="_blank" rel="noopener"></a>
          <a href="#" class="fa fa-yahoo" aria-label="Suivez-nous sur Yahoo" target="_blank" rel="noopener"></a>
          <a href="#" class="fa fa-reddit" aria-label="Rejoignez-nous sur Reddit" target="_blank" rel="noopener"></a>
          <a href="#" class="fa fa-rss" aria-label="S'abonner au flux RSS" target="_blank" rel="noopener"></a>
        </section>


        <footer class="footer">
          <h2>@2024</h2>
        </footer>
`

initQuizz();