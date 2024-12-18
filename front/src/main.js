import { initQuizz } from './quizz.js';
import './style.css';

document.querySelector('#app').innerHTML = `
        <header style="cursor:pointer;">
          <h1>My Quizz</h1>
          <p>Pour accéder à la page <a href="about/" style="text-decoration: none;">/about, cliquez ici</a></p>
        </header>

        <div class="topnav">
          <a href="#" class="fa fa-facebook" aria-label="logo facebook"></a>
          <a href="#" class="fa fa-twitter" aria-label="logo twitter"></a>
          <a href="#" class="fa fa-google" aria-label="logo google"></a>
          <a href="#" class="fa fa-linkedin" aria-label="logo linkedin"></a>
          <a href="#" class="fa fa-youtube" aria-label="logo youtube"></a>
          <a href="#" class="fa fa-instagram" aria-label="logo instagram"></a>
          <a href="#" class="fa fa-pinterest" aria-label="logo pinterest"></a>
          <a href="#" class="fa fa-snapchat-ghost" aria-label="logo snapchat"></a>
          <a href="#" class="fa fa-skype" aria-label="logo skype"></a>
          <a href="#" class="fa fa-android" aria-label="logo android"></a>
          <a href="#" class="fa fa-dribbble" aria-label="logo dribbble"></a>
          <a href="#" class="fa fa-vimeo" aria-label="logo vimeo"></a>
          <a href="#" class="fa fa-tumblr" aria-label="logo tumblr"></a>
          <a href="#" class="fa fa-vine" aria-label="logo vine"></a>
          <a href="#" class="fa fa-foursquare" aria-label="logo foursquare"></a>
          <a href="#" class="fa fa-stumbleupon" aria-label="logo stumbleupon"></a>
          <a href="#" class="fa fa-flickr" aria-label="logo flickr"></a>
          <a href="#" class="fa fa-yahoo" aria-label="logo yahoo"></a>
          <a href="#" class="fa fa-reddit" aria-label="logo reddit"></a>
          <a href="#" class="fa fa-rss" aria-label="logo rss"></a>
        </div>

         <main class="row">
    <section class="leftcolumn">
      <article class="card">
        <h1>Nom étudiant</h1>
        <h2>Description</h2>
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