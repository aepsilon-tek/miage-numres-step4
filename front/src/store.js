export const baseUrl = "https://8080-ismailhiko-miagenumress-z5sj2dnkflk.ws-eu117.gitpod.io";

export function getQuestions() {
  let questions;
  if(localStorage.getItem('questions') === null){
    questions = [];
  }else {
    questions = JSON.parse(localStorage.getItem('questions'));
  }
  return questions;
}

export function setQuestions(questions) {
  localStorage.setItem('answers', JSON.stringify(questions));
}

export function getAnswers() {
  let answers;
  if(localStorage.getItem('answers') === null){
    answers = [];
  }else {
    answers = JSON.parse(localStorage.getItem('answers'));
  }
  return answers;
}


export function saveAnswer(data) {
  const answers = getAnswers();
  answers.push(data);
  localStorage.setItem('answers', JSON.stringify(answers));
}


export async function getQuestionsApi() {
  const url = `${baseUrl}/quizz/questions`;

  const response = await fetch(url);

  try {
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error.message);
  }
}


export async function getProposalApi(idQuestion) {
  const url = `${baseUrl}/quizz/questions/${idQuestion}/proposals`;

  const response = await fetch(url);

  try {
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error.message);
  }
}

export async function evaluate(proposals) {
  const url = `${baseUrl}/quizz/proposals/evaluate`;

  try {
    const reponse = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(proposals),
    });

    const resultat = await reponse.json();
    return resultat;
  } catch (erreur) {
    console.error("Erreur :", erreur);
  }
}