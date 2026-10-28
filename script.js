console.log("Hello World")

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  let choice = "";
  if (randomNumber == 0) {
    choice = "rock";
  }
  if (randomNumber == 1) {
    choice = "paper";
  }
  if (randomNumber == 2) {
    choice = "scissors";
  }
  return choice;
}

console.log(getComputerChoice())



