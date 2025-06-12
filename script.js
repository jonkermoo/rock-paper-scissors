let humanChoice = "";
let cpuChoice;
const winSFX = new Audio("audio/yay.mp3");
const loseSFX = new Audio("audio/trombone.mp3");
const tieSFX = new Audio("audio/silly.mp3");

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

    if (humanChoice == cpuChoice) {
        handleEndGame("tie");
        tieSFX.play();
        humanChoice = "";
    } else {
        if (humanChoice == "ROCK") {
            if (cpuChoice == "PAPER") {
                handleEndGame("lose");
                loseSFX.play();
                humanChoice = "";
            } else {
                handleEndGame("win");
                winSFX.play();
                humanChoice = "";
            }
        } else if (humanChoice == "PAPER") {
            if (cpuChoice == "SCISSOR") {
                handleEndGame("lose");
                loseSFX.play();
                humanChoice = "";
            } else {
                handleEndGame("win");
                winSFX.play();
                humanChoice = "";
            }
        } else if (humanChoice == "SCISSOR") {
            if (cpuChoice == "ROCK") {
                handleEndGame("lose")
                loseSFX.play();
                humanChoice = "";
            } else {
                handleEndGame("win");
                winSFX.play();
                humanChoice = "";
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

/* overlay upon end of game */
const winScreen = document.getElementById("win-screen");
const gif = document.getElementById("result-dance");

function handleEndGame(outcome) {
    const resultText = document.querySelector("#result-text");
    if (outcome === "win") {
        resultText.textContent = "You Win!";
        gif.src = "images/windance.gif";
    } else if (outcome === "lose") {
        resultText.textContent = "You Lose!";
        gif.src = "images/lossdance.gif";
    } else {
        resultText.textContent = "You Tied!";
        gif.src = "images/tiedance.gif";
    }
    winScreen.classList.remove("hidden");
}

document.getElementById("play-again").addEventListener("click", () => {
    tieSFX.pause()
    tieSFX.currentTime = 0;
    winSFX.pause()
    winSFX.currentTime = 0;
    loseSFX.pause()
    loseSFX.currentTime = 0;
    winScreen.classList.add("hidden");
});
/* ========================================================= */
