// Progress Bar//
const progressBar = document.querySelector(".progress-bar"),
progressText = document.querySelector(".progress-text");

const progress = (value) => {
    const percentage = (value / time) * 100;
    progressBar.style.width = '${percentage}%';
    progressText.innerHTML = '${value}';
};

let questions = [],
time = 30,
score = 0,
currentQuestion,
timer;

const startBtn = document.querySelector(".start"),
  numQuestions = document.querySelector("#num-questions"),
category = document.querySelector("#category"),
difficulty = document.querySelector("#difficulty"),
timePerQuestion = document.querySelector("#time"),
quiz = document.querySelector(".quiz"),
startscreen = document.querySelector(".start-screen");

const startQuiz = () => {
    const num = numQuestions.value;
    cat = category.value;
    diff = difficulty.value;
    // Pulls questions from Open TDB Quiz App//
    const url = `https://opentdb.com/api.php?amount=${num}&category=${cat}&difficulty=${diff}&type=multiple`;

    fetch(url)
    .then((res) => res.json())
    .then((data) => {
      questions = data.results;
      startscreen.classList.add("hide");
      quiz.classList.remove("hide");
      currentQuestion = 1;
      showQuestion(questions[0]);
    });  


};

startBtn.addEventListener("click", startQuiz);

const submitBtn = document.querySelector(".submit"),
   nextBtn = document.querySelector(".next");

const showQuestion = (question) => {
    const questionText = document.querySelector(".question").
      answersWrapper = document.querySelector(".answer-wrapper").
      questionNumber = document.querySelector(".number").    

    questionText.innerHTML = question.question;

    //Correct and Incorrect Answers are Seperate this randomises them//
    const answers = [...question.incorrect_answers,
         question.correct_answer.toString(),
    ];
        //Correct answer will always be last
        // Shuffles the array//

    answers.sort(() => Math.random() - 0.5);
    answersWrapper.innerHTML="";
    answers.forEach((answer) => {
        answersWrapper.innerHTML += `
                  <div class="answer ">
            <span class="text">${answer}</span>
            <span class="checkbox">
              <i class="fas fa-check"></i>
            </span>
          </div>
        `;
  });
        
        
  questionNumber.innerHTML = ` Question <span class="current">${
    questions.indexOf(question) + 1
  }</span>
            <span class="total">/${questions.length}</span>`;
  //add event listener to each answer
  const answersDiv = document.querySelectorAll(".answer");
  answersDiv.forEach((answer) => {
    answer.addEventListener("click", () => {
        //if answer is not already submitted//
      if (!answer.classList.contains("checked")) {
        //Remove the check from other answers
        answersDiv.forEach((answer) => {
          answer.classList.remove("selected");
        });
        // add selected on currently clicked
        answer.classList.add("selected");
        //after any answer is selected enable the submit button 
        submitBtn.disabled = false;
      }
    });
  });
    
  //After Updating Question Start Timer;
  time = timePerQuestion.value;
  startTimer(time);

}
const startTimer =(time) => {
    timer = setInterval(() => {
    if(time > 0) {
        // if timer is more than 0 means there is tiem remaining
        //moves progress
        progress(time);
        time --;
    } else {
        // if time finishes means less than 0//
        checkAnswer();
    }
    }, 1000);
};

submitBtn.addEventListener("click" ,() => {
    checkAnswer();   
});

const checkAnswer = () => {
    // first clear interval when check answer triggered 
    clearInterval(timer);

    const selectedAnswer = document.querySelector(".answer.selected");
    // if any answer is selected
    if(selectedAnswer) {
        const answer = selectedAnswer.querySelector(".text");
        if (answer === questions[currentQuestion - 1].correct_answer) {
            //if answer matched with current question correct answer//
            //increase score//
            score++;
            //add correct class on selected//
            selectedAnswer.classList.add("correct");
        }else {
            // if wrong selected
            // add wrong class on selected but then also add correct class on correct answer//
            // correct added lets add wrong on selected
            selectedAnswer.classList.add("wrong");
            const correctAnswer = document.
            querySelectorAll(".answer")
            .forEach((answer) => {
                if 
                  (answer.querySelector(".text").innerHTML === questions[currentQuestion - 1].
                  correct_answer
                ) {
                    //only add correct class to correct answer 
                    answer.classList.add("correct");
                }
            });
        } 
       

    }
    //answer check will be also triggered when the timer reaches 0
    //if nothing is selected and time runs out 
    //just add the correct class on the correct answer 
    else {
        const correctAnswer = document.
            querySelectorAll(".answer")
            .forEach((answer) => {
                if 
                  (answer.querySelector(".text").innerHTML === questions[currentQuestion - 1].
                  correct_answer
                ) {
                    //only add correct class to correct answer 
                    answer.classList.add("correct");
                }
            });
    }

    //lets block user to select further answers//
    const answerDiv = document.querySelectorAll(".answer");
    answerDiv.forEach((answer) => {
    answer.classList.add("checked");
    // add checked class on all as we check for it when on click answer if its present to do nothing//
    // also when the answer is checked do not add a hover effect//
    });

    //after submitting and answer show the button to go to the next question//
    submitBtn.style.display = "none";
    nextBtn.style.display = "block";

};

// on next button click display the next question//

nextBtn.addEventListener("click", () => {
    nextQuestion();
    // also show submit button on next question and hide next button
    nextBtn.style.display = "none";
    submitBtn.style.display = "block";
});

const nextQuestion =()=> {
    //if there is remanining questions//
    if(currentQuestion < questions.length) {
        currentQuestion++;
        //show question//
        showQuestion(questions[currentQuestion - 1])
    }
    else {
        //if no more questions remain//
        showScore();
    }
};


const endScreen = document.querySelector(".end-screen"),
finalScore = document.querySelector(".final-score"),
totalScore = document.querySelector(".total-score");

const showScore = () => {
    endScreen.classList.remove("hide");
    quiz.classList.add("hide");
    finalScore.innerHTML = score;
    totalScore.innerHTML = `/ ${questions.length}`;

};

const restartBtn = document.querySelector(".restart");
restartBtn.addEventListener("click", () => {
    //reload page on click//
    window.location.reload();
})

