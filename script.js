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
    {text: "18", correct: true},
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

];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0
score = 0