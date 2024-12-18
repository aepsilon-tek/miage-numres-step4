import { evaluate, getAnswers, getProposalApi, getQuestionsApi, saveAnswer } from './store.js';
import './style.css';

export let quizzData;
export let currentQuestion;
export let score;
let questionElement;
let proposalsElement;
let resultElement;

export async function initQuizz(questions) {
  quizzData = [];
  localStorage.clear();
  
  questionElement = document.getElementById("question");
  proposalsElement = document.getElementById("proposals");
  resultElement = document.getElementById("quiz");
  
  currentQuestion = 0;
  score = 0;

  // Récupération des questions
  quizzData = await getQuestionsApi();
    
  for (let i = 0; i < quizzData.length; i++) {
    let proposals = await getProposalApi(quizzData[i].id);
    quizzData[i].proposals = proposals;
  }

  // Afficher la première question
  showQuestion();
}
function focusFirstProposal() {
  const firstProposal = document.querySelector("#proposals button");
  if (firstProposal) {
    firstProposal.focus();
  }
}


async function showQuestion() {
  const question = quizzData[currentQuestion];

  // Vider les réponses pour éviter leur lecture prématurée
  proposalsElement.innerHTML = "";
  proposalsElement.setAttribute("aria-hidden", "true");

  // Réinitialiser et forcer la mise à jour de la question
  questionElement.setAttribute("aria-live", "polite");
  questionElement.innerText = ""; // Supprime le contenu temporairement
  setTimeout(() => {
    questionElement.innerText = question.label; // Réinsère la question après un délai
  }, 50);

  // Afficher les réponses après avoir annoncé la question
  setTimeout(() => {
    question.proposals.forEach(proposal => {
      const button = document.createElement("button");
      button.innerText = proposal.label;
      button.setAttribute("aria-pressed", "false");
      button.setAttribute("role", "button");
      button.addEventListener("click", selectAnswer);
      proposalsElement.appendChild(button);
    });

    proposalsElement.removeAttribute("aria-hidden"); // Rendre les réponses visibles aux lecteurs d'écran
    focusFirstProposal(); // Focus automatique sur la première proposition
  }, 150); // Délai pour garantir que la question est lue avant les réponses
}




  
async function selectAnswer(e) {
  const selectedButton = e.target;

  // Met à jour aria-pressed pour indiquer que le bouton a été sélectionné
  Array.from(proposalsElement.children).forEach(button => {
    button.setAttribute("aria-pressed", "false");
  });
  selectedButton.setAttribute("aria-pressed", "true");

  let proposals = quizzData[currentQuestion].proposals;

  for (let i = 0; i < proposals.length; i++) {
    if (selectedButton.innerText === proposals[i].label) {
      saveAnswer(proposals[i]);
    }
  }

  currentQuestion++;
  if (currentQuestion < quizzData.length) {
    showQuestion();
  } else {
    showResult();
  }
}
  
async function showResult() {
  let answers = getAnswers();
  const newAnswers = answers.map(({label, ...id}) => id);

  score = await evaluate(newAnswers);

  resultElement.innerHTML = `
    <h1>Quizz Terminé!</h1>
    <p role="status" aria-live="polite">Ton score : ${score}/${quizzData.length}</p>
  `; // Annonce le score aux lecteurs d'écran
}
