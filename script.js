console.log("Hello World")

function getComputerChoice() {
    const random = Math.random()

    if (random < 1 / 3) {
    return "rock";
  } else if (random < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
} 

console.log(getComputerChoice());


function getHumanChoice() {
    const choice = prompt("Enter rock, paper, or scissors");
    return choice;
}   

console.log(getHumanChoice());



