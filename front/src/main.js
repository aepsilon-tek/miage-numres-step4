import { initQuizz } from './quizz.js';
import './style.css';

document.querySelector('#app').innerHTML = `
  <header style="cursor:pointer;">
    <h1>My Quizz</h1>
    <p>
  Pour accéder à la page /about, 
  <a href="about/" style="text-decoration: underline; color: #FFD700; font-weight: bold;">
    Accédez à la page À propos
  </a>
</p>
  </header>

  

  <main>
    <section class="row">
      <section class="leftcolumn">
        <article class="card">
          <h2>Nom étudiant</h2>
          <p>Description</p>
          <section id="quiz">
            <h2>A TOI DE JOUER</h2>
            <div id="question"  aria-live="assertive"></div>
            <div id="proposals"></div>
          </section>
        </article>
      </section>

      <aside class="rightcolumn">
        <div class="card">
          <img src="/question.png" width="500" height="600" alt="Symbole de question">
        </div>
      </aside>
    </section>
  </main>

  <footer>
    <h2>@2024</h2>
    <nav class="topnav">
    <a href="#" class="fa fa-facebook" aria-label="Facebook"></a>
    <a href="#" class="fa fa-twitter" aria-label="Twitter"></a>
    <a href="#" class="fa fa-google" aria-label="Google"></a>
    <a href="#" class="fa fa-linkedin" aria-label="LinkedIn"></a>
    <a href="#" class="fa fa-youtube" aria-label="YouTube"></a>
    <a href="#" class="fa fa-instagram" aria-label="Instagram"></a>
    <a href="#" class="fa fa-pinterest" aria-label="Pinterest"></a>
    <a href="#" class="fa fa-snapchat-ghost" aria-label="Snapchat"></a>
    <a href="#" class="fa fa-skype" aria-label="Skype"></a>
    <a href="#" class="fa fa-android" aria-label="Android"></a>
    <a href="#" class="fa fa-dribbble" aria-label="Dribbble"></a>
    <a href="#" class="fa fa-vimeo" aria-label="Vimeo"></a>
    <a href="#" class="fa fa-tumblr" aria-label="Tumblr"></a>
    <a href="#" class="fa fa-vine" aria-label="Vine"></a>
    <a href="#" class="fa fa-foursquare" aria-label="Foursquare"></a>
    <a href="#" class="fa fa-stumbleupon" aria-label="StumbleUpon"></a>
    <a href="#" class="fa fa-flickr" aria-label="Flickr"></a>
    <a href="#" class="fa fa-yahoo" aria-label="Yahoo"></a>
    <a href="#" class="fa fa-reddit" aria-label="Reddit"></a>
    <a href="#" class="fa fa-rss" aria-label="RSS"></a>
  </nav>
  </footer>
`;

initQuizz();
