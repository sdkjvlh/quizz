const quizData = [
  {
      question: "What is the closest planet to the sun?",
      a: "mars",
      b: "venus",
      c: "mercury",
      d: "earth",
      correct: "c",
  },
  {
      question: "What is the name of the galaxy we live in?",
      a: "andromeda",
      b: "milky way",
      c: "whirlpool",
      d: "somberero",
      correct: "b",
  },
  {
      question: "Which planet is known as the red planet?",
      a: "jupiter",
      b: "venus",
      c: "mars",
      d: "saturn",
      correct: "c",
  },
  {
      question: "what is the main source of energy for earth",
      a: "moon",
      b: "sun",
      c: "stars",
      d: "jupiter",
      correct: "b",
  },
  {
    question: "what is one of the main challenges of living on mars",
    a: "lack of sunlight",
    b: "high level of oxygen in the atmosphere",
    c: "extremely low temparatures and lack of breathable air",
    d: "constant earthquake",
    correct: "b",
},
{
  question: "what is the main features of black hole",
  a: "extremely high temparature",
  b: "a gravitational pull so strong that non even light can escape",
  c: "infinite size",
  d: "its bright light visible from earth",
  correct: "b",
},
{
  question: "what is the james webb space telescope promarily designed to study",
  a: "weathe pattern on earth",
  b: "the surface of mars",
  c: "the early universe and distant galaxies",
  d: "the asteroid belt",
  correct: "c",
},
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
  deselectAnswers()
  const currentQuizData = quizData[currentQuiz]
  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
  answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
  let answer
  answerEls.forEach(answerEl => {
      if(answerEl.checked) {
          answer = answerEl.id
      }
  })
  return answer
}
submitBtn.addEventListener('click', () => {
  const answer = getSelected()
  if(answer) {
     if(answer === quizData[currentQuiz].correct) {
         score++
     }
     currentQuiz++
     if(currentQuiz < quizData.length) {
         loadQuiz()
     } else {
         quiz.innerHTML = `
         <h2>You answered ${score}/${quizData.length} questions correctly</h2>
         <button onclick="location.reload()">Reload</button>
         `
     }
  }
})