// Start Quiz Button

// Function to start the quiz
function quizStart() {
    const welcome = document.getElementById("welcome")
    const quiz = document.getElementById("quizapp");
    welcome.classList.add("hide");
    quiz.classList.remove("hide");
    confettiDrop();
}

// Add event listener to the Start button
document.getElementById("start-quiz").addEventListener("click", quizStart);

// These are the questions for the Quiz
const questions = [
  {
    question: "In which capital city can the Trevi Fountain be located?",
    answers: [
      {text: "Berlin", correct: false},
      {text: "London", correct: false},
      {text: "Rome", correct: true},
      {text: "Tokyo", correct: false},

    ]
  },
  {
    question: "What is the fastest land animal in the world?",
    answers: [
      {text: "Ostrich", correct: false},
      {text: "Chicken", correct: false},
      {text: "Mouse", correct: false},
      {text: "Cheetah", correct: true},

    ]
  },
  {
  question: "What is the symbol for the element Gold on the Periodic Table of Elements?",
  answers: [
    {text: "Ag", correct: false},
    {text: "He", correct: false},
    {text: "Au", correct: true},
    {text: "Na", correct: false},

  ]
},
{
  question: "Who was the ancient Greek God of the Sun?",
  answers: [
    {text: "Mars", correct: false},
    {text: "Zeus", correct: false},
    {text: "Apollo", correct: true},
    {text: "Aphrodite", correct: false},

  ]
},
{
  question: "How many faces does a Dodecahedron have?",
  answers: [
    {text: "6", correct: false},
    {text: "12", correct: true},
    {text: "18", correct: false},
    {text: "36", correct: false},

  ]
},
{
  question: "What game studio makes the Red Dead Redemption series?",
  answers: [
    {text: "Rockstar Games", correct: true},
    {text: "Blizzard", correct: false},
    {text: "Unreal Engine", correct: false},
    {text: "EA Sports", correct: false},

  ]
},
{
  question: "What sports car company manufactures the 911?",
  answers: [
    {text: "Ferrari", correct: false},
    {text: "Lamborghini", correct: false},
    {text: "Mercedes", correct: false},
    {text: "Porsche", correct: true},

  ]
},
{
  question: "How many bones do we have in the human ear?",
  answers: [
    {text: "6", correct: false},
    {text: "4", correct: false},
    {text: "5", correct: false},
    {text: "3", correct: true},

  ]
},
{
  question: "Which grammy award winning American rapper died in April of 2021?",
  answers: [
    {text: "Jay-Z", correct: false},
    {text: "LL Cool J", correct: false},
    {text: "Big L", correct: false},
    {text: "DMX", correct: true},

  ]
},
{
  question: "What is the world's fastest bird?",
  answers: [
    {text: "The Peregrine Falcon", correct: true},
    {text: "Vulture", correct: false},
    {text: "The Bald Eagle", correct: false},
    {text: "Osprey", correct: false},

  ]
},
{
  question: "What car manufacturer had the highest revenue in 2020?",
  answers: [
    {text: "Ford", correct: false},
    {text: "BMW", correct: false},
    {text: "Volkswagen", correct: true},
    {text: "KIA", correct: false},

  ]
},
{
  question: "What country has won the most FIFA World Cups?",
  answers: [
    {text: "Germany", correct: false},
    {text: "France", correct: false},
    {text: "Italy", correct: false},
    {text: "Brazil", correct: true},

  ]
},
{
  question: "What is the largest Spanish-speaking country in the world?",
  answers: [
    {text: "Mexico City", correct: true},
    {text: "Madrid", correct: false},
    {text: "Buenos Aires", correct: false},
    {text: "Lima", correct: false},

  ]
},
{
  question: "What company was initially known as Blue Ribbon Sports?",
  answers: [
    {text: "Reebok", correct: false},
    {text: "Asics", correct: false},
    {text: "Adidas", correct: false},
    {text: "Nike", correct: true},

  ]
},
{
  question: "What is the fourth letter of the Greek Alphabet?",
  answers: [
    {text: "Sigma", correct: false},
    {text: "Alpha", correct: false},
    {text: "Delta", correct: true},
    {text: "Beta", correct: false},

  ]
},
{
  question: "In what country is the Chernobyl nuclear plant located?",
  answers: [
    {text: "Russia", correct: false},
    {text: "Finland", correct: false},
    {text: "Ukraine", correct: true},
    {text: "Poland", correct: false},

  ]
},
{
  question: "What Colombian city is referred to as la ciudad de la eterna primavera?",
  answers: [
    {text: "Medellin", correct: true},
    {text: "Cartagena", correct: false},
    {text: "Baranquilla", correct: false},
    {text: "Quibdo", correct: false},

  ]
},
{
  question: "Who discovered that the Earth relvoves around the Sun?",
  answers: [
    {text: "Sir Isaac Newton", correct: false},
    {text: "Sir Francis Drake", correct: false},
    {text: "Galileo", correct: false},
    {text: "Nicolaus Copernicus", correct: true},

  ]
},
{
  question: "What is the most common surname in the United States?",
  answers: [
    {text: "Davis", correct: false},
    {text: "Smith", correct: true},
    {text: "Jones", correct: false},
    {text: "Rogers", correct: false},

  ]
},
{
  question: "What country has the highest life expectancy?",
  answers: [
    {text: "Hong Kong", correct: true},
    {text: "Germany", correct: false},
    {text: "India", correct: false},
    {text: "Saudi Arabia", correct: false},

  ]
},

];
/* Whenever you start the quiz and give an answer the score will change*/
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
score = 0;
/*When you restart the quiz this function resets the current question index back to 0 
and the score back to zero, it also allows the next button to appear once avery question
is answered correctly or incorrectly*/
function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
  
}
/*Displays the questions in the sequence that they are meant to be*/
function showQuestion(){
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;
/*Displays the answers to the current question*/
  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);

  });
}

function resetState(){
  nextButton.style.display = "none";
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
  }
}
/*Targets CSS Classes for correct and incorrect states and changes answer
 blocks colours accordingly*/
function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct  === "true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
  }else{
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled = "true";
  });

  nextButton.style.display = "block";
  
}

// Celebratory Function from tsparticles.js
function confettiDrop() {
  const duration = 15 * 1000,
  animationEnd = Date.now() + duration,
  defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}
const interval = setInterval(function() {
  const timeLeft = animationEnd - Date.now();
  if (timeLeft <= 0) {
    return clearInterval(interval);
  }
  const particleCount = 50 * (timeLeft / duration);
  // since particles fall down, start a bit higher than random
  confetti(
    Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    })
  );
  confetti(
    Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    })
  );
}, 250);
}

function showScore(){
  resetState();
  confettiDrop();
  questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Quiz Again";
  nextButton.style.display = "block";
}

function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  }else{
    showScore();
  }
}

nextButton.addEventListener("click", () =>{
  if(currentQuestionIndex < questions.length){
    handleNextButton();  
  }else{
    startQuiz();
  }
})


startQuiz();
// Code to Display Answers//
