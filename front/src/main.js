import { initQuizz } from './quizz.js';
import './style.css';

document.querySelector('#app').innerHTML = `
        <header style="cursor:pointer;">
          <h1>My Quizz</h1>
          <p>Pour accéder à la page <a href="about/" style="text-decoration: none;">/about, cliquez ici</a></p>
        </header>

        <div class="topnav">
          <a href="#" alt="logo facebook" class="fa fa-facebook"></a>
          <a href="#" alt="logo twitter" class="fa fa-twitter"></a>
          <a href="#" alt="logo google" class="fa fa-google"></a>
          <a href="#" alt="logo linkedin" class="fa fa-linkedin"></a>
          <a href="#" alt="logo youtube" class="fa fa-youtube"></a>
          <a href="#" alt="logo instagram" class="fa fa-instagram"></a>
          <a href="#" alt="logo pinterest" class="fa fa-pinterest"></a>
          <a href="#" alt="logo snapshat" class="fa fa-snapchat-ghost"></a>
          <a href="#" alt="logo skype" class="fa fa-skype"></a>
          <a href="#" alt="logo android" class="fa fa-android"></a>
          <a href="#" alt="logo dribbble" class="fa fa-dribbble"></a>
          <a href="#" alt="logo vimeo" class="fa fa-vimeo"></a>
          <a href="#" alt="logo tumblr" class="fa fa-tumblr"></a>
          <a href="#" alt="logo vine" class="fa fa-vine"></a>
          <a href="#" alt="logo foursquare" class="fa fa-foursquare"></a>
          <a href="#" alt="logo stumbleupon" class="fa fa-stumbleupon"></a>
          <a href="#" alt="logo flickr" class="fa fa-flickr"></a>
          <a href="#" alt="logo yahoo" class="fa fa-yahoo"></a>
          <a href="#" alt="logo reddit" class="fa fa-reddit"></a>
          <a href="#" alt="logo rss" class="fa fa-rss"></a>
        </div>

         <main class="row">
    <section class="leftcolumn">
      <article class="card">
        <h1>Nom étudiant</h1>
        <h5>Description</h5>
        <div id="quiz">
          <h2>A TOI DE JOUER</h2>
          <div id="question"></div>
          <div id="proposals"></div>
        </div>
      </article>
    </section>

    <aside class="rightcolumn">
      <div class="card">
        <img alt="Image de point d'interrogation" src="/question.png" width="500" height="600">
      </div>
    </aside>
  </main>

  <footer>
    <h2>@2024</h2>
  </footer>
`

initQuizz();