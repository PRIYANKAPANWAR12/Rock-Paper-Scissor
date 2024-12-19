// Get DOM elements
const playerChoiceDisplay = document.getElementById("player-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const resultMessage = document.getElementById("result-message");
const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");

let playerScore = 0;
let computerScore = 0;

// Function to generate the computer's choice randomly
function getComputerChoice() {
    const choices = ["Stone", "Paper", "Scissors"];
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}

// Function to determine the winner
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === "Stone" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Stone") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

// Update the score
function updateScore(winner) {
    if (winner === "You win!") {
        playerScore++; // Increment player score
        playerScoreDisplay.textContent = `Player Score: ${playerScore}`; // Display updated score
    } else if (winner === "You lose!") {
        computerScore++; // Increment computer score
        computerScoreDisplay.textContent = `Computer Score: ${computerScore}`; // Display updated score
    }
}

// Handle player's choice
function handleChoice(playerChoice) {
    const computerChoice = getComputerChoice();
    const winnerMessage = determineWinner(playerChoice, computerChoice);
    
    // Display the choices and result
    playerChoiceDisplay.textContent = `Your choice: ${playerChoice}`;
    computerChoiceDisplay.textContent = `Computer's choice: ${computerChoice}`;
    resultMessage.textContent = winnerMessage;

    // Update the score
    updateScore(winnerMessage);
}

// Event listeners for the buttons
document.getElementById("stone").addEventListener("click", () => handleChoice("Stone"));
document.getElementById("paper").addEventListener("click", () => handleChoice("Paper"));
document.getElementById("scissors").addEventListener("click", () => handleChoice("Scissors"));
