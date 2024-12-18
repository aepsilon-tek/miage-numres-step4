import { initQuizz } from './quizz.js';
import './style.css';

document.querySelector('#app').innerHTML = `
  <!-- En-tête de la page -->
  <header class="header" style="cursor:pointer;">
    <h1>My Quizz</h1>
    <p>Pour accéder à la page 
      <a 
        aria-label="Accéder à la page About" 
        href="about/" 
        class="link"
      >Page About</a>.
    </p>
  </header>

  <!-- Barre de navigation principale -->
  <nav class="topnav">
    <a aria-label="Lien vers Facebook" href="#" class="fa fa-facebook link"></a>
    <a aria-label="Lien vers Twitter" href="#" class="fa fa-twitter link"></a>
    <a aria-label="Lien vers Google" href="#" class="fa fa-google link"></a>
    <a aria-label="Lien vers LinkedIn" href="#" class="fa fa-linkedin link"></a>
    <a aria-label="Lien vers YouTube" href="#" class="fa fa-youtube link"></a>
    <a aria-label="Lien vers Instagram" href="#" class="fa fa-instagram link"></a>
    <a aria-label="Lien vers Pinterest" href="#" class="fa fa-pinterest link"></a>
    <a aria-label="Lien vers Snapchat" href="#" class="fa fa-snapchat-ghost link"></a>
    <a aria-label="Lien vers Skype" href="#" class="fa fa-skype link"></a>
    <a aria-label="Lien vers Android" href="#" class="fa fa-android link"></a>
    <a aria-label="Lien vers Dribbble" href="#" class="fa fa-dribbble link"></a>
    <a aria-label="Lien vers Vimeo" href="#" class="fa fa-vimeo link"></a>
    <a aria-label="Lien vers Tumblr" href="#" class="fa fa-tumblr link"></a>
    <a aria-label="Lien vers Vine" href="#" class="fa fa-vine link"></a>
    <a aria-label="Lien vers Foursquare" href="#" class="fa fa-foursquare link"></a>
    <a aria-label="Lien vers StumbleUpon" href="#" class="fa fa-stumbleupon link"></a>
    <a aria-label="Lien vers Flickr" href="#" class="fa fa-flickr link"></a>
    <a aria-label="Lien vers Yahoo" href="#" class="fa fa-yahoo link"></a>
    <a aria-label="Lien vers Reddit" href="#" class="fa fa-reddit link"></a>
    <a aria-label="Lien vers le flux RSS" href="#" class="fa fa-rss link"></a>
  </nav>

  <!-- Contenu principal de la page -->
  <main class="row">
    <!-- Colonne principale à gauche -->
    <section class="leftcolumn">
      <article class="card">
        <h1>Nom étudiant</h1>
        <h5>Description</h5>
        
        <!-- Section du quizz -->
        <section id="quiz">
          <h2>A TOI DE JOUER</h2>
          <div id="question"></div>
          <div id="proposals"></div>
        </section>
      </article>
    </section>

    <!-- Colonne latérale à droite -->
    <aside class="rightcolumn">
      <div class="card">
        <img alt="Image d'un point d'interrogation" src="/question.png" width="500" height="600">
      </div>
    </aside>
  </main>

  <!-- Pied de page -->
  <footer class="footer">
    <h2>@2024</h2>
    <p>Pour revenir à la <a aria-label="Retourner à la page d'accueil" href="/" class="link">page d'accueil</a>.</p>
  </footer>
`

initQuizz();