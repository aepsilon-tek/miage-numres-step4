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
    console.log(quizzData);
  for (let i = 0; i < quizzData.length; i++) {
    let proposals = await getProposalApi(quizzData[i].id);
    quizzData[i].proposals = proposals;
  }

  showQuestion();
}
  
async function showQuestion() {
  const question = quizzData[currentQuestion];

  // Ajouter le rôle document pour isoler la zone active
  questionElement.setAttribute("role", "main");
  questionElement.setAttribute("aria-live", "assertive"); // Lecture prioritaire
  questionElement.setAttribute("tabindex", "-1"); 
  questionElement.innerText = question.label;

  // Focus automatique sur la question
  setTimeout(() => {
    questionElement.focus({ focusVisible: true }); // Placer le focus discrètement
  }, 100); // Délai court pour assurer que la question est visible avant le focus

  // Réinitialiser les propositions
  proposalsElement.innerHTML = "";
  question.proposals.forEach((proposal) => {
    const button = document.createElement("button");
    button.innerText = proposal.label;
    button.setAttribute("tabindex", "0"); 
    button.addEventListener("click", selectAnswer);
    proposalsElement.appendChild(button);
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

  quiz.innerHTML = `
    <h1>Quizz Finis!</h1>
    <p>Ton score: ${score}/${quizzData.length}</p>
  `;
}