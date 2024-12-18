import { initQuizz } from './quizz.js';
import './style.css';

document.querySelector('#app').innerHTML = `
        <div class="header" style="cursor:pointer;">
          <h1>My Quizz</h1>
          Pour accéder a la page /about <a alt="Button pour accéder à la page d'accueil" href="about/" style="text-decoration: none;">click ici</a>
        </div>


        <div class="topnav" role="navigation">
          <a href="#" aria-label="Accéder à notre page Facebook" class="fa fa-facebook" role="link"></a>
          <a href="#" aria-label="Accéder à notre page Twitter" class="fa fa-twitter" role="link"></a>
          <a href="#" aria-label="Accéder à notre page Google Plus" class="fa fa-google" role="link"></a>
          <a href="#" aria-label="Accéder à notre page LinkedIn" class="fa fa-linkedin" role="link"></a>
          <a href="#" aria-label="Accéder à notre chaîne YouTube" class="fa fa-youtube" role="link"></a>
          <a href="#" aria-label="Accéder à notre compte Instagram" class="fa fa-instagram" role="link"></a>
          <a href="#" aria-label="Accéder à notre page Pinterest" class="fa fa-pinterest" role="link"></a>
          <a href="#" aria-label="Accéder à notre compte Snapchat" class="fa fa-snapchat-ghost" role="link"></a>
          <a href="#" aria-label="Nous contacter sur Skype" class="fa fa-skype" role="link"></a>
          <a href="#" aria-label="Télécharger notre application Android" class="fa fa-android" role="link"></a>
          <a href="#" aria-label="Voir nos designs sur Dribbble" class="fa fa-dribbble" role="link"></a>
          <a href="#" aria-label="Regarder nos vidéos sur Vimeo" class="fa fa-vimeo" role="link"></a>
        </div>

        <div class="row">
          <div class="leftcolumn">
            <div class="card">
              <h2>Nom étudiant</h2>
              <h3>description</h3>
              <div id="quiz">
                <h3 alt="A toi de jouer" >A TOI DE JOUER</h3>
                <div id="question"></div>
                <div id="proposals"></div>
              </div>
            </div>
          </div>
          <div class="rightcolumn">
            <div class="card">
              <img alt="Image de point d'intérogation" src="/question.png" width="500" height="600">
            </div>
        </div>

        <div class="footer">
          <h3>@2024</h3>
        </div>
`

initQuizz();