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
    return "rock"
  } else if (humanChoice.toLowerCase() === "paper") {
    return "paper"
  } else if (humanChoice.toLowerCase() === "scissors") {
    return "scissors"
  }
}

console.log(getHumanChoice())

