import { initQuizz } from './quizz.js';
import './style.css';

document.querySelector('#app').innerHTML = `
<main id="main-content">

  <header>
    <h1>My Quizz</h1>
    <p>
      Pour accéder à la page About,
      <a href="about/"
        aria-label="Accéder à la page À propos du site">
        Consulter la page À propos
      </a>
    </p>
  </header>

  <section class="row">

    <section class="leftcolumn">
      <article class="card">
        <h2>Nom étudiant</h2>
        <p>Description</p>

    <section id="quiz">
      <h3>A TOI DE JOUER</h3>
      <div id="question" aria-live="assertive" tabindex="-1"></div>
      <div id="proposals"></div>
      <div id="result" aria-live="assertive" tabindex="-1"></div>
    </section>

      </article>
    </section>

    <aside class="rightcolumn">
      <div class="card">
        <img 
          src="/question.png"
          alt="Illustration représentant un point d'interrogation"
          width="500"
          height="600"
        >
      </div>
    </aside>

  </section>

  <footer>
    <p>@2024</p>

    <nav class="topnav" aria-label="Liens vers nos réseaux sociaux">
      <a href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visiter notre page Facebook (ouvre dans un nouvel onglet)">
        <i class="fa fa-facebook" aria-hidden="true"></i>
      </a>

      <a href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visiter notre page Twitter (ouvre dans un nouvel onglet)">
        <i class="fa fa-twitter" aria-hidden="true"></i>
      </a>

      <a href="https://google.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visiter Google (ouvre dans un nouvel onglet)">
        <i class="fa fa-google" aria-hidden="true"></i>
      </a>

      <a href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visiter notre page LinkedIn (ouvre dans un nouvel onglet)">
        <i class="fa fa-linkedin" aria-hidden="true"></i>
      </a>

      <a href="https://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visiter notre chaîne YouTube (ouvre dans un nouvel onglet)">
        <i class="fa fa-youtube" aria-hidden="true"></i>
      </a>

      <a href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visiter notre page Instagram (ouvre dans un nouvel onglet)">
        <i class="fa fa-instagram" aria-hidden="true"></i>
      </a>

      <a href="https://pinterest.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visiter notre page Pinterest (ouvre dans un nouvel onglet)">
        <i class="fa fa-pinterest" aria-hidden="true"></i>
      </a>

      <a href="https://snapchat.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visiter notre page Snapchat (ouvre dans un nouvel onglet)">
        <i class="fa fa-snapchat-ghost" aria-hidden="true"></i>
      </a>

      <a href="https://skype.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visiter Skype (ouvre dans un nouvel onglet)">
        <i class="fa fa-skype" aria-hidden="true"></i>
      </a>

      <a href="https://android.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visiter Android (ouvre dans un nouvel onglet)">
        <i class="fa fa-android" aria-hidden="true"></i>
      </a>

      <a href="https://dribbble.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visiter notre page Dribbble (ouvre dans un nouvel onglet)">
        <i class="fa fa-dribbble" aria-hidden="true"></i>
      </a>

      <a href="https://vimeo.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visiter notre page Vimeo (ouvre dans un nouvel onglet)">
        <i class="fa fa-vimeo" aria-hidden="true"></i>
      </a>

      <a href="https://tumblr.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visiter notre page Tumblr (ouvre dans un nouvel onglet)">
        <i class="fa fa-tumblr" aria-hidden="true"></i>
      </a>

      <a href="https://vine.co"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visiter Vine (ouvre dans un nouvel onglet)">
        <i class="fa fa-vine" aria-hidden="true"></i>
      </a>

      <a href="https://foursquare.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visiter notre page Foursquare (ouvre dans un nouvel onglet)">
        <i class="fa fa-foursquare" aria-hidden="true"></i>
      </a>

      <a href="https://stumbleupon.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visiter StumbleUpon (ouvre dans un nouvel onglet)">
        <i class="fa fa-stumbleupon" aria-hidden="true"></i>
      </a>

      <a href="https://flickr.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visiter notre page Flickr (ouvre dans un nouvel onglet)">
        <i class="fa fa-flickr" aria-hidden="true"></i>
      </a>

      <a href="https://yahoo.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visiter Yahoo (ouvre dans un nouvel onglet)">
        <i class="fa fa-yahoo" aria-hidden="true"></i>
      </a>

      <a href="https://reddit.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visiter notre page Reddit (ouvre dans un nouvel onglet)">
        <i class="fa fa-reddit" aria-hidden="true"></i>
      </a>

      <a href="https://rss.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Consulter notre flux RSS (ouvre dans un nouvel onglet)">
        <i class="fa fa-rss" aria-hidden="true"></i>
      </a>

    </nav>
  </footer>

</main>
`;

initQuizz();
