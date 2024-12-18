import { initQuizz } from './quizz.js';
import './style.css';

document.querySelector('#app').innerHTML = `
        <header style="cursor:pointer;">
          <h1>My Quizz</h1>
          Pour accéder a la page /about <a href="about/" style="text-decoration: none;">click ici</a>
        </header>


        <nav class="topnav">
          <a href="#" class="fa fa-facebook"></a>
          <a href="#" class="fa fa-twitter"></a>
          <a href="#" class="fa fa-google"></a>
          <a href="#" class="fa fa-linkedin"></a>
          <a href="#" class="fa fa-youtube"></a>
          <a href="#" class="fa fa-instagram"></a>
          <a href="#" class="fa fa-pinterest"></a>
          <a href="#" class="fa fa-snapchat-ghost"></a>
          <a href="#" class="fa fa-skype"></a>
          <a href="#" class="fa fa-android"></a>
          <a href="#" class="fa fa-dribbble"></a>
          <a href="#" class="fa fa-vimeo"></a>
          <a href="#" class="fa fa-tumblr"></a>
          <a href="#" class="fa fa-vine"></a>
          <a href="#" class="fa fa-foursquare"></a>
          <a href="#" class="fa fa-stumbleupon"></a>
          <a href="#" class="fa fa-flickr"></a>
          <a href="#" class="fa fa-yahoo"></a>
          <a href="#" class="fa fa-reddit"></a>
          <a href="#" class="fa fa-rss"></a>
        </nav>

        <main class="row">
          <section class="leftcolumn">
            <article class="card">
              <h2>Nom étudiant</h2>
              <h3>description</h3>
              <div id="quiz">
                <h2>A TOI DE JOUER</h2>
                <div id="question"></div>
                <div id="proposals"></div>
              </div>
            </article>
          </section>

          <asid class="rightcolumn">
            <article class="card">
              <img src="/question.png"alt="Image de point d'interrogation" width="500" height="600">
            </article>
        </asid>
        </main>


        <footer class="footer">
          <h2>@2024</h2>
        </footer>
`

initQuizz();