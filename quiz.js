const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const endScreen = document.getElementById('end-screen');
const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const timerElement = document.getElementById('timer');
const resetButton = document.getElementById('reset-button');
const finalScoreElement = document.getElementById('final-score');


let currentQuestionIndex = 0;
let countdown;
let timeLeft;
let questions = [];
let score = 0; // Variable to store the score

// Fetch questions from Open Trivia API
async function fetchQuestions() {
  const url = 'https://opentdb.com/api.php?amount=10&type=multiple';

  try {
    const response = await fetch(url);
    const data = await response.json();
    questions = data.results.map((questionData) => {
      return {
        question: decodeHTML(questionData.question),
        choices: shuffleArray([
          ...questionData.incorrect_answers,
          questionData.correct_answer,
        ]),
        answer: questionData.correct_answer,
      };
    });

    return questions;
  } catch (error) {
    console.error('Error fetching trivia questions:', error);
    return [];
  }
}

// Decode HTML entities in API responses
function decodeHTML(html) {
  const txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
}

// Shuffle the answer choices
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Start Quiz
document.getElementById('start-button').addEventListener('click', async function () {
  const fetchedQuestions = await fetchQuestions();

  if (fetchedQuestions.length) {
    questions = fetchedQuestions;
    startQuiz();
  } else {
    alert('Could not load questions, try again later');
  }
});

function startQuiz() {
  // Hide the start screen
  startScreen.style.display = 'none';

  // Show the quiz screen
  quizScreen.style.display = 'block';

  currentQuestionIndex = 0; // Reset the question index
  score = 0; // Reset the score
  loadQuestion();
}

// Load a question
function loadQuestion() {
  if (currentQuestionIndex < questions.length) {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    choicesElement.innerHTML = '';

    currentQuestion.choices.forEach((choice) => {
      const button = document.createElement('button');
      button.textContent = choice;

      button.addEventListener('click', () => checkAnswer(choice, button));

      choicesElement.appendChild(button);
    });

    startTimer();
  } else {
    endQuiz();
  }
}

// Start the countdown timer for each question
function startTimer() {
  timeLeft = 10;
  timerElement.textContent = timeLeft;
  countdown = setInterval(() => {
    timeLeft--;
    timerElement.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(countdown);
      nextQuestion();
    }
  }, 1000);
}

// Check to see if the answer given is correct
function checkAnswer(selectedAnswer, selectedButton) {
  clearInterval(countdown);
  const correctAnswer = questions[currentQuestionIndex].answer;

// Disable all buttons after a choice

Array.from(choicesElement.children).forEach((button) => {
  button.disable = true;

  // Highlight correct answer
  if (button.textContent === correctAnswer) {
    button.style.backgroundColor = 'green'; // Inline style applied for correct answer
    button.style.color = 'white';
  }

  //Highlight wrong answer if it was selected
  if (button === selectedButton && selectedAnswer !== correctAnswer) {
    button.style.backgroundColor = 'red'; // Inline style applied for incorrect answer
    button.style.color = 'white';
  }
});

 //Update score if the correct answer was selected
 
 if (selectedAnswer === correctAnswer) {
    score++; // Increment score for the correct answer
  }
  setTimeout(nextQuestion, 1500); // Move to the next question after 1.5 seconds 
}

// Load the next question
function nextQuestion() {
  currentQuestionIndex++;
  loadQuestion();
}

// End the quiz and display the score 
function endQuiz() {
  quizScreen.style.display = 'none';
  endScreen.style.display = 'block';

  // Display the final score on the end screen
  finalScoreElement.textContent = `${score} out of ${questions.length}`;

  triggerConfetti(); //Trigger confetti after showing the score
}

//Trigger confetti using Party.js
function triggerConfetti() {
  party.confetti(endScreen, {
    count: 200,
    spread: 100,
    speed: 500,
    size: 1.5,
    lifetime: 5,
    gravity: 0.5
  });
}

// Reset the quiz
resetButton.addEventListener('click', resetQuiz);

function resetQuiz() {
  // Hide the end screen and show the start screen
  endScreen.style.display = 'none';
  startScreen.style.display = 'block';

  // Reset quiz state
  score = 0;
  currentQuestionIndex = 0;
}