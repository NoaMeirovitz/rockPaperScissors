const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultsDisplay = document.getElementById("result");
const userScoreDisplay = document.getElementById("user-score");
const computerScoreDisplay = document.getElementById("computer-score");
const userImageChoice = document.getElementById("userImage");
const computerImageChoice = document.getElementById("computerImage");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;
let userScore = 0;
let computerScore = 0;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getImageUser();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    computerChoice = "Rock";
  }
  if (randomNumber === 1) {
    computerChoice = "Paper";
  }
  if (randomNumber === 2) {
    computerChoice = "Scissors";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
  getResult();
  getImageComputer();
  getImageUser();
}

function getImageComputer() {
  if (computerChoice === "Rock") {
    computerImageChoice.innerHTML = '<img src="rock.png" alt=""></img>';
  }
  if (computerChoice === "Paper") {
    computerImageChoice.innerHTML = '<img src="paper.png" alt=""></img>';
    return;
  }
  if (computerChoice === "Scissors") {
    computerImageChoice.innerHTML = '<img src="scissors.png" alt=""></img>';
    return;
  }
}
function getImageUser() {
  if (userChoice === "Rock") {
    userImageChoice.innerHTML = '<img src="rock.png" alt=""></img>';
  }
  if (userChoice === "Paper") {
    userImageChoice.innerHTML = '<img src="paper.png" alt=""></img>';
    return;
  }
  if (userChoice === "Scissors") {
    userImageChoice.innerHTML = '<img src="scissors.png" alt=""></img>';
    return;
  }
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "It's a Draw!";
  }
  if (computerChoice === "Rock" && userChoice === "Paper") {
    result = "You Won!";
  }
  if (computerChoice === "Rock" && userChoice === "Scissors") {
    result = "Computer Won!";
  }
  if (computerChoice === "Scissors" && userChoice === "Paper") {
    result = "Computer Won!";
  }
  if (computerChoice === "Scissors" && userChoice === "Rock") {
    result = "You Won!";
  }
  if (computerChoice === "Paper" && userChoice === "Rock") {
    result = "Computer Won!";
  }
  if (computerChoice === "Paper" && userChoice === "Scissors") {
    result = "You Won!";
  }
  resultsDisplay.innerHTML = result;
  getUserScore();
  getComputerScore();
  /*   if (userScore === 3) {
    alert("User Won!");
  }
  if (computerScore === 3) {
    alert("User Won!");
  } */
}

function getUserScore() {
  if (result === "You Won!") {
    userScore++;
    userScoreDisplay.innerHTML = userScore;
  }
}
function getComputerScore() {
  if (result === "Computer Won!") {
    computerScore++;
    computerScoreDisplay.innerHTML = computerScore;
  }
}
