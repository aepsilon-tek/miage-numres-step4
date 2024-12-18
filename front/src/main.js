import { initQuizz } from './quizz.js';
import './style.css';

document.querySelector('#app').innerHTML = `
    <header>
        <!-- Lien pour accéder directement au quiz -->
        <a href="#quiz" class="skip-to-quiz">Accéder au quizz</a>
        <h1>My Quizz</h1>
        <p>Pour accéder à la page à propos, <a href="about/" style="text-decoration: none;">cliquez ici</a>.</p>
    </header>

    <nav class="topnav">
        <a href="#" class="fa fa-facebook" aria-label="Lien vers Facebook"></a>
        <a href="#" class="fa fa-twitter" aria-label="Lien vers Twitter"></a>
        <a href="#" class="fa fa-google" aria-label="Lien vers Google"></a>
        <a href="#" class="fa fa-linkedin" aria-label="Lien vers LinkedIn"></a>
        <a href="#" class="fa fa-youtube" aria-label="Lien vers YouTube"></a>
        <a href="#" class="fa fa-instagram" aria-label="Lien vers Instagram"></a>
        <a href="#" class="fa fa-pinterest" aria-label="Lien vers Pinterest"></a>
        <a href="#" class="fa fa-snapchat-ghost" aria-label="Lien vers Snapchat"></a>
        <a href="#" class="fa fa-skype" aria-label="Lien vers Skype"></a>
        <a href="#" class="fa fa-android" aria-label="Lien vers Android"></a>
        <a href="#" class="fa fa-dribbble" aria-label="Lien vers Dribbble"></a>
        <a href="#" class="fa fa-vimeo" aria-label="Lien vers Vimeo"></a>
        <a href="#" class="fa fa-tumblr" aria-label="Lien vers Tumblr"></a>
        <a href="#" class="fa fa-vine" aria-label="Lien vers Vine"></a>
        <a href="#" class="fa fa-foursquare" aria-label="Lien vers Foursquare"></a>
        <a href="#" class="fa fa-stumbleupon" aria-label="Lien vers StumbleUpon"></a>
        <a href="#" class="fa fa-flickr" aria-label="Lien vers Flickr"></a>
        <a href="#" class="fa fa-yahoo" aria-label="Lien vers Yahoo"></a>
        <a href="#" class="fa fa-reddit" aria-label="Lien vers Reddit"></a>
        <a href="#" class="fa fa-rss" aria-label="Lien vers le flux RSS"></a>
    </nav>

    <main>
        <section class="row">
            <article class="leftcolumn">
                <div class="card">
                    <h1>Nom de l'étudiant</h1>
                    <h5>Description</h5>
                    <div id="quiz">
                        <h2>À TOI DE JOUER</h2>
                        <div id="question" aria-live="polite"></div>
                        <div id="proposals"></div>
                    </div>
                </div>
            </article>
            <aside class="rightcolumn">
                <div class="card">
                    <img src="/question.png" width="500" height="600" alt="Image illustrative du quiz">
                </div>
            </aside>
        </section>
    </main>

    <footer>
        <h2>@2024</h2>
    </footer>
`;

const skipToQuizLink = document.querySelector('.skip-to-quiz');

skipToQuizLink.addEventListener('click', (e) => {
    e.preventDefault(); 
    initQuizz();
    narrateText('Le quiz commence. Préparez-vous pour la première question.'); // Annonce vocale de démarrage
});

function narrateText(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'fr-FR';
    speechSynthesis.speak(utterance);
}
