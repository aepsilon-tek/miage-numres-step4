import { initQuizz } from './quizz.js';
import './style.css';

document.querySelector('#app').innerHTML = `
        <div class="header" style="cursor:pointer;">
          <h1>My Quizz</h1>
          Pour accéder a la page /about <a href="about/" style="text-decoration: none;">click ici</a>
        </div>


        <div class="topnav">
          <a href="#" class="fa fa-facebook" alt="fb"></a>
          <a href="#" class="fa fa-twitter" alt="fb"></a>
          <a href="#" class="fa fa-google" alt="fb"></a>
          <a href="#" class="fa fa-linkedin" alt="fb"></a>
          <a href="#" class="fa fa-youtube" alt="fb"></a>
          <a href="#" class="fa fa-instagram" alt="fb"></a>
          <a href="#" class="fa fa-pinterest" alt="fb"></a>
          <a href="#" class="fa fa-snapchat-ghost" alt="fb"></a>
          <a href="#" class="fa fa-skype" alt="fb"></a>
          <a href="#" class="fa fa-android" alt="fb"></a>
          <a href="#" class="fa fa-dribbble" alt="fb"></a>
          <a href="#" class="fa fa-vimeo" alt="fb"></a>
          <a href="#" class="fa fa-tumblr" alt="fb"></a>
          <a href="#" class="fa fa-vine" alt="fb"></a>
          <a href="#" class="fa fa-foursquare" alt="fb"></a>
          <a href="#" class="fa fa-stumbleupon" alt="fb"></a>
          <a href="#" class="fa fa-flickr" alt="fb"></a>
          <a href="#" class="fa fa-yahoo" alt="fb"></a>
          <a href="#" class="fa fa-reddit" alt="fb"></a>
          <a href="#" class="fa fa-rss" alt="fb"></a>
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
              <img src="/question.png" width="500" height="600" alt="fb">
            </div>
        </div>

        <div class="footer">
          <h2>@2024</h2>
        </div>
`

initQuizz();