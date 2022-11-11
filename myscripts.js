function getComputerChoice() {
    const pcChoice = ["Rock", "Paper", "Scissors"]; 
        return pcChoice[Math.floor(Math.random() * pcChoice.length)];
}

function playRound(playerSelection,computerSelection) {
    if (playerSelection === "<button>Rock</button>" && computerSelection === "Paper") {
        return "Computer chose Paper! You lost the round"
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return "Computer chose Rock! You lost the round"
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return "Computer chose Scissors! You lost the round"
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "Computer chose Scissors! You win the round!"
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "Computer chose Paper! You win the round!"
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "Computer chose Rock! You win the round!"
    } else {
        return "Draw!"
    }
}

function game() {
    let playerPoints = 0;
    let computerPoints = 0;

    const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

button.addEventListener('click', function (e)  {
    for (let i=0; i <5; i++) {
        const playerSelection = e.target;
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection,computerSelection);
            if(result.includes("You win") ) {
                playerPoints++;
            } else if (result.includes("next time") ) {
                computerPoints++;
            }
            console.log(computerSelection);
            console.log(playerSelection);
    }
 });
});


}

game();