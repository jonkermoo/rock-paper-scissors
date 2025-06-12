let humanChoice;
let cpuChoice;

/* humanChoice depends on what button clicked 
   also make the choice selected highlighted */
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");

rock.addEventListener("mousedown", () => {
    humanChoice = "ROCK";
    rock.setAttribute("style", "border: 4px solid black;");
    paper.setAttribute("style", "border: 2px solid black;");
    scissor.setAttribute("style", "border: 2px solid black;");
});
paper.addEventListener("mousedown", () => {
    humanChoice = "PAPER";
    paper.setAttribute("style", "border: 4px solid black;");
    rock.setAttribute("style", "border: 2px solid black;");
    scissor.setAttribute("style", "border: 2px solid black;");
});
scissor.addEventListener("mousedown", () => {
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

/*  logic for choosing the winner
    although not necessary, can be used for "go" button */
function playGame() {
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
/* ========================================================= */

/* go button to lock in selection */
const go = document.querySelector(".go");
go.addEventListener("click", () => {
    playGame();
    rock.setAttribute("style", "border: 2px solid black;");
    paper.setAttribute("style", "border: 2px solid black;");
    scissor.setAttribute("style", "border: 2px solid black;");
})
/* ========================================================= */
