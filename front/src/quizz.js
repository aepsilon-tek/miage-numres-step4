import { evaluate, getAnswers, getProposalApi, getQuestionsApi, saveAnswer } from './store.js';
import './style.css';

export let quizzData;
export let currentQuestion;
export let score;
let questionElement;
let proposalsElement;

export async function initQuizz() {
  quizzData = [];
  localStorage.clear();

  questionElement = document.getElementById("question");
  proposalsElement = document.getElementById("proposals");
  
  currentQuestion = 0;
  score = 0;

  // Récupérer les questions et leurs propositions
  quizzData = await getQuestionsApi();
  for (let i = 0; i < quizzData.length; i++) {
    let proposals = await getProposalApi(quizzData[i].id);
    quizzData[i].proposals = proposals;
  }

  showQuestion();
}

async function showQuestion() {
  const question = quizzData[currentQuestion];

  // Affiche la question avec un rôle ARIA
  questionElement.innerText = question.label;
  questionElement.setAttribute("aria-live", "polite");
  
  // Efface les anciennes propositions et ajoute les nouvelles
  proposalsElement.innerHTML = "";
  proposalsElement.setAttribute("role", "list");

  question.proposals.forEach((proposal, index) => {
    const button = document.createElement("button");
    button.innerText = proposal.label;

    // Ajouter des propriétés ARIA pour chaque proposition
    button.setAttribute("role", "listitem");
    button.setAttribute("aria-label", `Proposition ${index + 1}: ${proposal.label}`);

    proposalsElement.appendChild(button);

    // Gestionnaire d'événement pour la sélection
    button.addEventListener("click", selectAnswer);
  });
}

async function selectAnswer(e) {
  const selectedButton = e.target;
  const proposals = quizzData[currentQuestion].proposals;

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
  const newAnswers = answers.map(({ label, ...id }) => id);

  score = await evaluate(newAnswers);

  const quiz = document.getElementById("quiz");
  quiz.setAttribute("role", "alert"); // Déclare le score comme un message important

  quiz.innerHTML = `
    <h1>Quizz Terminé!</h1>
    <p>Ton score : ${score}/${quizzData.length}</p>
  `;
}
