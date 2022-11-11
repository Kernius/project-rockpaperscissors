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
        
            if(result.includes("You win") ) {
                playerPoints++;
            } else if (result.includes("You lost") ) {
                computerPoints++;
            }
        const userscore = document.querySelector('#userscore');
        const computerscore = document.querySelector('#computerscore');


            console.log("Your score:" + playerPoints);
            console.log("Computers score:" + computerPoints);
            console.log(playRound(playerSelection,computerSelection))

            if (playerPoints === 3) {
                console.log("You have won the match!");
                for (const button of buttons) {
                    button.disabled = true;
                }
                
            } else if (computerPoints === 3) {
                console.log("You have lost the match!");
                for (const button of buttons) {
                    button.disabled = true;
                }
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