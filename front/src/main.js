import { initQuizz } from './quizz.js';
import './style.css';

document.querySelector('#app').innerHTML = `
        <header class="header" style="cursor:pointer;" role="banner" aria-label="Site header">
          <h1>My Quizz</h1>
          Pour accéder a la page /about <a href="about/" style="text-decoration: none;">click ici</a>
        </header>

        <nav class="topnav" role="navigation" aria-label="Social media links">
          <a href="https://facebook.com" class="fa fa-facebook"  aria-label="Facebook"></a>
          <a href="https://twitter.com" class="fa fa-twitter" aria-label="Twitter"></a>
          <a href="" class="fa fa-google" aria-label="Google"></a>
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

        <main class="row" role="main">
          <section class="leftcolumn">
            <article class="card">
              <h2>Nom étudiant</h2>
              <p class="description">description</p>
              <section id="quiz" aria-label="Quiz section">
                <h3>A TOI DE JOUER</h3>
                <div id="question" role="heading" aria-level="4"></div>
                <div id="proposals" role="group" aria-label="Quiz answers"></div>
              </section>
            </article>
          </section>
          <section class="rightcolumn">
            <article class="card">
              <img src="/question.png" width="500" height="600" alt="Question illustration">
            </article>
          </section>
        </main>

        <footer class="footer" role="contentinfo">
          <p>@2024</p>
        </footer>
`

initQuizz();