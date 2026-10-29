function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  let choice = "";

  if (randomNumber == 0) {
    choice = "rock";
  } else if (randomNumber == 1) {
    choice = "paper";
  } else if (randomNumber == 2) {
    choice = "scissors";
  }
  return choice;
}


function getHumanChoice() {
  let humanChoice = prompt("Choose rock, paper, or scissors");

  if (humanChoice.toLowerCase() === "rock") {
    return "rock";
  } else if (humanChoice.toLowerCase() === "paper") {
    return "paper";
  } else if (humanChoice.toLowerCase() === "scissors") {
    return "scissors";
  }
}




function playGame() {
  let humanScore = 0;
  let computerScore  = 0;

  function playRound(humanChoice, computerChoice) {
    const human = humanChoice.toLowerCase();
    const computer = computerChoice.toLowerCase();

    if (human === computer) {
      console.log(`it's a tie!. Both choose ${human}`);
  } else if (
    (human === "rock" && computer == "scissors") ||
    (human === "paper" && computer == "rock") ||
    (human === "scissors" && computer == "paper")
  ) {
    console.log(`You win! ${human} beats ${computer}`); humanScore++;
  } else {
    console.log(`You lose! ${computer} beats ${human}`); computerScore++;
  }

  }

  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
}

playGame()