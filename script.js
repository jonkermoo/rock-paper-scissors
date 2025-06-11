let humanChoice;
let cpuChoice;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    const choices = ["ROCK", "PAPER", "SCISSOR"];
    return choices[choice];
}

function getHumanChoice() {
    let choice = prompt("Rock, paper, or scissor?");
    return choice;
}

function playGame() {
    humanChoice = getHumanChoice().toUpperCase();
    while (humanChoice != "ROCK" &&
        humanChoice != "PAPER" &&
        humanChoice != "SCISSOR") {
        alert("Enter valid input");
        humanChoice = getHumanChoice().toUpperCase();
    }
    cpuChoice = getComputerChoice();

    console.log("You chose " + humanChoice);
    console.log("CPU chose " + cpuChoice);

    if (humanChoice === cpuChoice) {
        alert("Tie");
    } else {
        if (humanChoice == "ROCK") {
            if (cpuChoice == "PAPER") {
                alert("You lose");
            } else {
                alert("You win");
            }
        } else if (humanChoice == "PAPER") {
            if (cpuChoice == "SCISSOR") {
                alert("You lose");
            } else {
                alert("You win");
            }
        } else if (humanChoice == "SCISSOR") {
            if (cpuChoice == "ROCK") {
                alert("You lose");
            } else {
                    alert("You win");
            }
        }
    }
}

playGame();