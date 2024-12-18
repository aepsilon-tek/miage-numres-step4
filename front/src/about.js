import './style.css';

document.querySelector('#app').innerHTML = `
	<h1>Page About</h1>
	<p>Pour revenir à la 
	  <a 
	    aria-label="Retourner à la page d'accueil" 
	    href="/" 
	    class="link"
	  >Page d'accueil</a>.
	</p>
`