// Quiz data
const quizData = [
  {
      question: "1. Which is India's largest city by population?",
      options: ["Mumbai", "Delhi", "Chennai", "Pune"],
      correct: 0
  },
  {
      question: "2. What is the number of State and Union Territories in India?",
      options: ["27 States and 8 Union Territories", "27 States and 7 Union Territories", "28 States and 8 Union Territories", "23 States and 10 Union Territories"],
      correct: 2
  },
  {
      question: "3. Which team won the ICC Cricket World Cup in 2011?",
      options: ["England", "Australia", "West Indies", "India"],
      correct: 3
  },
  {
      question: "4. Who designed the Indian Parliament in New Delhi?",
      options: ["Gustave Eiffel", "Edwin Landseer Lutyens", "Le Corbusier", "Bonanno Pisano"],
      correct: 1
  },
  {
      question: "5. Hindi Divas is Celebrate in India on?",
      options: ["12th April", "10th April", "14th September", "14th December"],
      correct: 2
  },
  {
      question: "6. Which is the first Indian Company Listed in nssdaq stock exchange?",
      options: ["Wipro", "Infosys", "Tata", "Cognizant"],
      correct: 1
  },
  {
      question: "7. Which cricketer is known as “The Wall” for his solid batting technique?",
      options: ["Rahul Dravid", "Steve Smith", "Jacques Kallis", "Kumar Sangakkara"],
      correct: 0
  },
  {
      question: "8. In which year was the project tiger started?",
      options: ["1980", "1965", "1973", "2010"],
      correct: 2
  },
  {
      question: "9. RBI was set up on the recommendation of which commission?",
      options: ["Hilton Young", "Dr. B Ambedkar", "C Rangarajan", "None of the above"],
      correct: 0
  },
  {
      question: "10. India's first all women Post Office is located at?",
      options: ["Mumbai", "Delhi", "Patna", "Chennai"],
      correct: 1
  }
];

// Current question index
let currentQuestion = 0;

// Score
let score = 0;

// Get HTML elements
const questionText = document.getElementById("question-text");
const options = document.querySelectorAll(".option");
const resultText = document.getElementById("result-text");

// Display first question
displayQuestion();

// Function to display question
function displayQuestion() {
  const currentQuiz = quizData[currentQuestion];
  questionText.textContent = currentQuiz.question;
  options.forEach((option, index) => {
      option.textContent = currentQuiz.options[index];
  });
}

// Add event listeners to options
options.forEach((option) => {
  option.addEventListener("click", checkAnswer);
});

// Function to check answer
// Function to check answer
function checkAnswer(event) {
  const userAnswer = event.target.textContent;
  const correctAnswer = quizData[currentQuestion].options[quizData[currentQuestion].correct];
  if (userAnswer === correctAnswer) {
      score++;
  }
  currentQuestion++;
  if (currentQuestion < quizData.length) {
      displayQuestion();
  } else {
      displayResult();
  }
}

// Function to display result
// Function to display result
function displayResult() {
  const finalScore = `You scored ${score} out of ${quizData.length}!`;
  resultText.textContent = finalScore;
  resultText.style.fontSize = "36px";
  resultText.style.fontWeight = "bold";
  questionText.textContent = "";
  options.forEach((option) => {
      option.disabled = true;
      option.style.display = "none";
  });

  if (score >= 8) {
      document.body.style.backgroundImage = "url('FULL.png')";
  } else if (score <= 5) {
      document.body.style.backgroundImage = "url('8.png')";
  } else {
      document.body.style.backgroundImage = "url('FULL.png')";
  }

}
