function getComputerChoice() {
    const pcChoice = ["Rock", "Paper", "Scissors"]; 
        return pcChoice[Math.floor(Math.random() * pcChoice.length)];
}

/* Conditions for outcomes of the game*/

function playRound(playerSelection,computerSelection) {
    if (playerSelection === document.getElementById("Rock") && computerSelection === "Paper") {
        return "Computer chose Paper! You lost the round"
    } else if (playerSelection === document.getElementById("Scissors") && computerSelection === "Rock") {
        return "Computer chose Rock! You lost the round"
    } else if (playerSelection === document.getElementById("Paper") && computerSelection === "Scissors") {
        return "Computer chose Scissors! You lost the round"
    } else if (playerSelection === document.getElementById("Rock") && computerSelection === "Scissors") {
        return "Computer chose Scissors! You win the round!"
    } else if (playerSelection === document.getElementById("Scissors") && computerSelection === "Paper") {
        return "Computer chose Paper! You win the round!"
    } else if (playerSelection === document.getElementById("Paper") && computerSelection === "Rock") {
        return "Computer chose Rock! You win the round!"
    } else {
        return "Draw!"
    }
}

/*Actual game function*/

function game() {
    let playerPoints = 0;
    let computerPoints = 0;

    const buttons = document.querySelectorAll('.btn');

buttons.forEach((button) => {

button.addEventListener('click', function (e)  {
        
        const playerSelection = e.target;
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection,computerSelection);
        if (playerPoints === 3 || computerPoints === 3) {    
            return;
        }
        
        if(result.includes("You win") ) {
            playerPoints++;
        } else if (result.includes("You lost") ) {
            computerPoints++;
        }
        
        const userscore = document.querySelector('#userscore');
        const computerscore = document.querySelector('#computerscore'); 
        const roundoutcome = document.querySelector('#roundoutcome');
        const matchoutcome = document.querySelector('#matchoutcome');

        userscore.textContent = "Your score :" + playerPoints;
        computerscore.textContent = "Computers score :" + computerPoints;
        roundoutcome.textContent = playRound(playerSelection,computerSelection);
        
        if (playerPoints === 3) {
            matchoutcome.textContent = "You have won the match!";
        } else if (computerPoints === 3) {
            matchoutcome.textContent = "You have lost the match!";
        }
 });
});

/* Restart the game button(reloads the page) */

const restart = document.querySelector('#Restart');
        restart.addEventListener('click', () => {
            window.location.reload();
        });


}

game();