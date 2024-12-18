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
  
  questionElement = document.getElementById("question"); // Assign to global variable
  questionElement.setAttribute("aria-live", "assertive");
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
  
  // Now questionElement is accessible here
  questionElement.innerText = question.label;
  
  // Clear and rebuild proposals
  proposalsElement.innerHTML = "";
  question.proposals.forEach(proposal => {
    const button = document.createElement("button"); 
    button.innerText = proposal.label;
    button.setAttribute("aria-label", proposal.label);
    proposalsElement.appendChild(button);
    button.addEventListener("click", selectAnswer);
  });
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
  const newAnswers = answers.map(({label, ...id}) => id)

  score = await evaluate(newAnswers);

  quiz.setAttribute("aria-live", "assertive");
  quiz.innerHTML = `
    <h1>Quizz Finis!</h1>
    <p role="status" aria-label="Votre score final est ${score} sur ${quizzData.length}">
      Ton score: ${score}/${quizzData.length}
    </p>
  `;
}