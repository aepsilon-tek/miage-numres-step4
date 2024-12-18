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
  
async function showQuestion() {
  const question = quizzData[currentQuestion];
  questionElement.innerText = question.label;
  questionElement.setAttribute("aria-live", "polite"); // Notifie les lecteurs d'écran du changement de question
  
  proposalsElement.innerHTML = "";
  
  // Création des boutons de réponse
  question.proposals.forEach(proposal => {
    const button = document.createElement("button");
    button.innerText = proposal.label;
    button.setAttribute("aria-pressed", "false"); // Définit l'état non pressé
    button.setAttribute("role", "button"); // Ajoute le rôle de bouton
    button.addEventListener("click", selectAnswer);
    button.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        selectAnswer({ target: button });
      }
    });
    proposalsElement.appendChild(button);
  });
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
