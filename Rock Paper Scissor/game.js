let userScore = 0;
let AIscore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const score = document.querySelector("#userScore");
const Cscore = document.querySelector("#compScore");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
});

const drawGame = (userChoice, compchoice) => {
    msg.innerText = `It's a draw! AI also chose ${compchoice}`;
    msg.className = "draw";
};

const showWinner = (userwin, userChoice, compchoice) => {
    if (userwin) {
        userScore++;
        score.innerText = userScore;
        msg.innerText = `You win! ${userChoice} beats ${compchoice}`;
        msg.className = "win";
    } else {
        AIscore++;
        Cscore.innerText = AIscore;
        msg.innerText = `AI wins! ${compchoice} beats ${userChoice}`;
        msg.className = "lose";
    }
};

const playgame = (userChoice) => {
    console.log(`User Choice: ${userChoice}`);
    let compchoice = genCompChoice();
    console.log(`Computer Choice: ${compchoice}`);
    let userwin = true;

    if (userChoice === compchoice) {
        drawGame(userChoice, compchoice);
    } else {
        if (
            (userChoice === "rock" && compchoice === "paper") ||
            (userChoice === "paper" && compchoice === "scissor") ||
            (userChoice === "scissor" && compchoice === "rock")
        ) {
            userwin = false;
        }

        showWinner(userwin, userChoice, compchoice);
    }
};

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randomIndx = Math.floor(Math.random() * 3);
    return options[randomIndx];
};
