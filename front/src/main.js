import { initQuizz } from './quizz.js';
import './style.css';

document.querySelector('#app').innerHTML = `
  <header>
    <h1>My Quizz</h1>
    <p>Pour accéder à la page <a href="about/" aria-label="Aller à la page À propos">À propos</a></p>
  </header>

  <nav>
    <ul>
      <li><a href="#" aria-label="Page Facebook"><span class="fa fa-facebook"></span> Facebook</a></li>
      <li><a href="#" aria-label="Page Twitter"><span class="fa fa-twitter"></span> Twitter</a></li>
      <li><a href="#" aria-label="Page Google"><span class="fa fa-google"></span> Google</a></li>
      <li><a href="#" aria-label="Page LinkedIn"><span class="fa fa-linkedin"></span> LinkedIn</a></li>
      <li><a href="#" aria-label="Page YouTube"><span class="fa fa-youtube"></span> YouTube</a></li>
      <li><a href="#" aria-label="Page Instagram"><span class="fa fa-instagram"></span> Instagram</a></li>
      <li><a href="#" aria-label="Page Pinterest"><span class="fa fa-pinterest"></span> Pinterest</a></li>
      <li><a href="#" aria-label="Page Snapchat"><span class="fa fa-snapchat-ghost"></span> Snapchat</a></li>
      <li><a href="#" aria-label="Page Skype"><span class="fa fa-skype"></span> Skype</a></li>
      <li><a href="#" aria-label="Page Android"><span class="fa fa-android"></span> Android</a></li>
      <li><a href="#" aria-label="Page Dribbble"><span class="fa fa-dribbble"></span> Dribbble</a></li>
      <li><a href="#" aria-label="Page Vimeo"><span class="fa fa-vimeo"></span> Vimeo</a></li>
      <li><a href="#" aria-label="Page Tumblr"><span class="fa fa-tumblr"></span> Tumblr</a></li>
      <li><a href="#" aria-label="Page Vine"><span class="fa fa-vine"></span> Vine</a></li>
      <li><a href="#" aria-label="Page Foursquare"><span class="fa fa-foursquare"></span> Foursquare</a></li>
      <li><a href="#" aria-label="Page StumbleUpon"><span class="fa fa-stumbleupon"></span> StumbleUpon</a></li>
      <li><a href="#" aria-label="Page Flickr"><span class="fa fa-flickr"></span> Flickr</a></li>
      <li><a href="#" aria-label="Page Yahoo"><span class="fa fa-yahoo"></span> Yahoo</a></li>
      <li><a href="#" aria-label="Page Reddit"><span class="fa fa-reddit"></span> Reddit</a></li>
      <li><a href="#" aria-label="Flux RSS"><span class="fa fa-rss"></span> RSS</a></li>
    </ul>
  </nav>

  <main>
    <section>
      <article>
        <h2>Nom étudiant</h2>
        <p>description</p>

        <section id="quiz" aria-live="assertive">
          <h3>A TOI DE JOUER</h3>
          <div id="question"></div>
          <div id="proposals">
            <button data-choice="1">Réponse A</button>
            <button data-choice="2">Réponse B</button>
            <button data-choice="3">Réponse C</button>
            <button data-choice="4">Réponse D</button>
          </div>
        </section>
      </article>
    </section>

    <aside>
      <img src="/question.png" width="500" height="600" alt="Point d'interrogation">
    </aside>
  </main>

  <footer>
    <p>@2024</p>
  </footer>
`;



initQuizz();

document.addEventListener('keydown', (e) => {
  if (['1','2','3','4'].includes(e.key)) {
    const proposal = document.querySelector(`#proposals button[data-choice="${e.key}"]`);
    if (proposal) {
      proposal.click();
    }
  }
});