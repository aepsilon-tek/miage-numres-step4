import { evaluate, getAnswers, getProposalApi, getQuestionsApi, saveAnswer } from './store.js';
import './style.css';

export let quizzData;
export let currentQuestion;
export let score;
let questionElement;
let proposalsElement;

function narrateText(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'fr-FR';
    speechSynthesis.speak(utterance);
}

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
  narrateText(`Question ${currentQuestion + 1} : ${question.label}`);
  
  proposalsElement.innerHTML = "";
  question.proposals.forEach((proposal, index) => {
    const button = document.createElement("button");
    button.innerText = proposal.label;
    button.setAttribute("aria-label", `Réponse ${index + 1} : ${proposal.label}`);
    proposalsElement.appendChild(button);

    button.addEventListener("click", selectAnswer);
    narrateText(`Réponse ${index + 1} : ${proposal.label}`);
  });
}

async function selectAnswer(e) {
  const selectedButton = e.target;
  let proposals = quizzData[currentQuestion].proposals;

  for (let i = 0; i < proposals.length; i++) {
    if (selectedButton.innerText === proposals[i].label) {
      saveAnswer(proposals[i]);
      narrateText(`Vous avez choisi la réponse ${i + 1} : ${proposals[i].label}`);
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

  quiz.innerHTML = `
    <h1>Quizz Finis!</h1>
    <p>Ton score: ${score}/${quizzData.length}</p>
  `;

  narrateText(`Le quiz est terminé. Votre score est de ${score} sur ${quizzData.length}.`);
}
