import { initQuizz } from './quizz.js';
import './style.css';

document.querySelector('#app').innerHTML = `
        <div class="header" style="cursor:pointer;">
          <h1 id="main-title">My Quizz</h1>
          <h2>Pour accéder à la page /about, <a href="about/" style="text-decoration: none;" aria-label="Accéder à la page À propos">cliquez ici</a></h2>
        </div>

        <nav class="topnav" aria-label="Réseaux sociaux">
          <a alt="facebook" href="#" class="fa fa-facebook" aria-label="Facebook"></a>
          <a alt="twitter" href="#" class="fa fa-twitter" aria-label="Twitter"></a>
          <a alt="google" href="#" class="fa fa-google" aria-label="Google"></a>
          <a alt="linkedin" href="#" class="fa fa-linkedin" aria-label="LinkedIn"></a>
          <a alt="youtube" href="#" class="fa fa-youtube" aria-label="YouTube"></a>
          <a alt="instagram" href="#" class="fa fa-instagram" aria-label="Instagram"></a>
          <a alt="pinterest" href="#" class="fa fa-pinterest" aria-label="Pinterest"></a>
          <a alt="snapchat" href="#" class="fa fa-snapchat-ghost" aria-label="Snapchat"></a>
          <a alt="skype" href="#" class="fa fa-skype" aria-label="Skype"></a>
          <a alt="android" href="#" class="fa fa-android" aria-label="Android"></a>
          <a alt="dribbble" href="#" class="fa fa-dribbble" aria-label="Dribbble"></a>
          <a alt="vimeo" href="#" class="fa fa-vimeo" aria-label="Vimeo"></a>
          <a alt="tumblr" href="#" class="fa fa-tumblr" aria-label="Tumblr"></a>
          <a alt="vine" href="#" class="fa fa-vine" aria-label="Vine"></a>
          <a alt="foursquare" href="#" class="fa fa-foursquare" aria-label="Foursquare"></a>
          <a alt="stumbleupon" href="#" class="fa fa-stumbleupon" aria-label="StumbleUpon"></a>
          <a alt="flickr" href="#" class="fa fa-flickr" aria-label="Flickr"></a>
          <a alt="yahoo" href="#" class="fa fa-yahoo" aria-label="Yahoo"></a>
          <a alt="reddit" href="#" class="fa fa-reddit" aria-label="Reddit"></a>
          <a alt="rss" href="#" class="fa fa-rss" aria-label="RSS"></a>
        </nav>

         <main>
    <section class="row">
      <article class="leftcolumn">
        <div class="card">
          <h2>Nom étudiant</h2>
          <p>Description</p>
          <section id="quiz" aria-live="polite">
            <h2>A TOI DE JOUER</h2>
            <div id="question"></div>
            <div id="proposals"></div>
          </section>
          <!-- Zone pour notification des mises à jour de questions -->
          <div id="live-region-question" aria-live="assertive" style="position: absolute; left: -9999px;"></div>
          <!-- Zone pour confirmation des réponses -->
          <div id="live-region-answer" aria-live="polite" style="position: absolute; left: -9999px;"></div>
          <!-- Zone pour notifier la fin du quiz -->
          <div id="live-region-end" aria-live="assertive" style="position: absolute; left: -9999px;"></div>
          <!-- Bouton de redémarrage -->
          <button id="restart-button" style="display: none;">Redémarrer</button>
        </div>
      </article>
      <aside class="rightcolumn">
        <div class="card" aria-hidden="true">
          <img src="/question.png" alt="Illustration de point d'interrogation" width="500" height="600">
        </div>
      </aside>
    </section>
  </main>

  <footer>
    <h2>&copy; 2024</h2>
  </footer>
`; 

initQuizz();

// Simuler la mise à jour d'une question
function updateQuestion(newQuestion) {
  const questionElement = document.getElementById('question');
  const liveRegion = document.getElementById('live-region-question');
  questionElement.innerText = newQuestion;
  liveRegion.innerText = newQuestion; // Notifie le lecteur d'écran
}

// Simuler la sélection d'une réponse
function selectAnswer(answer) {
  const liveRegion = document.getElementById('live-region-answer');
  liveRegion.innerText = `Vous avez sélectionné : ${answer}`; // Notifie le lecteur d'écran
}



// Exemple de flux du quiz
setTimeout(() => {
  updateQuestion('Quelle est la capitale de la France ?');
}, 1000);

setTimeout(() => {
  selectAnswer('Paris');
}, 3000);

setTimeout(() => {
  endQuiz();
}, 5000);