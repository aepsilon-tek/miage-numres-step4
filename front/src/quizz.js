import { evaluate, getAnswers, getProposalApi, getQuestionsApi, saveAnswer } from './store.js';
import './style.css';

export let quizzData;
export let currentQuestion;
export let score;
let questionElement;
let proposalsElement;

export async function initQuizz(questions) {
  quizzData = [];
  localStorage.clear();
  
  questionElement = document.getElementById("question");
  proposalsElement = document.getElementById("proposals");
    
  currentQuestion = 0;
  score = 0;

  
  quizzData = await getQuestionsApi();
    
  for (let i = 0; i < quizzData.length; i++) {
    let proposals = await getProposalApi(quizzData[i].id);
    quizzData[i].proposals = proposals;
  }

  showQuestion();
}
  
async function showQuestion() {
  const question = quizzData[currentQuestion];
  
  questionElement.innerText = question.label;
  questionElement.setAttribute("tabindex", "1");
  questionElement.focus();
  
  const externalLinks = document.querySelectorAll('a');
  externalLinks.forEach(link => link.setAttribute("tabindex", "-1"));

  proposalsElement.innerHTML = "";
  question.proposals.forEach((proposal, index) => {
    const button = document.createElement("button");
    button.innerText = proposal.label;
    button.setAttribute("aria-pressed", "false");
    button.setAttribute("tabindex", `${index + 2}`);
    proposalsElement.appendChild(button);

    button.addEventListener("click", (e) => {
      button.setAttribute("aria-pressed", "true");
      selectAnswer(e);
    });
  });

  const firstButton = proposalsElement.querySelector("button");
  if (firstButton) {
    firstButton.focus();
  }
}
  
async function selectAnswer(e) {
  const selectedButton = e.target;
  let proposals = quizzData[currentQuestion].proposals;

  for (let i = 0; i < proposals.length; i++) {
    if (selectedButton.innerText === proposals[i].label) {
      saveAnswer(proposals[i])
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

  quiz.innerHTML = `
    <h1 id="result-heading" aria-live="assertive">Quizz Finis!</h1>
    <p>Ton score: ${score}/${quizzData.length}</p>
  `;

  const externalLinks = document.querySelectorAll('a');
  externalLinks.forEach(link => link.setAttribute("tabindex", "0"));

  document.getElementById("result-heading").focus();
}