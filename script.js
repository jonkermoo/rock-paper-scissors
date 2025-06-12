let humanChoice;
let cpuChoice;

/* humanChoice depends on what button clicked 
   also make the choice selected highlighted */
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");

rock.addEventListener("click", () => {
    humanChoice = "ROCK";
    rock.setAttribute("style", "border: 4px solid black;");
    paper.setAttribute("style", "border: 2px solid black;");
    scissor.setAttribute("style", "border: 2px solid black;");
});
paper.addEventListener("click", () => {
    humanChoice = "PAPER";
    paper.setAttribute("style", "border: 4px solid black;");
    rock.setAttribute("style", "border: 2px solid black;");
    scissor.setAttribute("style", "border: 2px solid black;");
});
scissor.addEventListener("click", () => {
    humanChoice = "SCISSOR";
    scissor.setAttribute("style", "border: 4px solid black;");
    paper.setAttribute("style", "border: 2px solid black;");
    rock.setAttribute("style", "border: 2px solid black;");
});
/* ========================================================= */

/* making the button gray with mouse down */
const click = document.querySelectorAll(".click");
click.forEach(button => {
    button.addEventListener("mousedown", () => {
        button.style.backgroundColor = "gray";
    });
});
click.forEach(button => {
    button.addEventListener("mouseup", () => {
        button.style.backgroundColor = "rgb(241, 241, 241)";
    });
});
click.forEach(button => {
    button.addEventListener("drag", () => {
        button.style.backgroundColor = "rgb(241, 241, 241)";
    });
});
/* ========================================================= */

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    const choices = ["ROCK", "PAPER", "SCISSOR"];
    return choices[choice];
}
/* this function is no longer necessary
function getHumanChoice() {
    let choice = prompt("Rock, paper, or scissor?");
    return choice;
} */

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