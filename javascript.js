// Global scope
let humanScore = 0;
let computerScore = 0;
// playGame();

// Rules.
const gameRules = document.createElement("p");
gameRules.style.cssText += 'font-size: min(5vh, 4rem)'
gameRules.textContent = "The first to 5 wins!";
document.body.appendChild(gameRules);

// Adding ui.

const buttonDiv = document.createElement("div");
buttonDiv.style.cssText += 'display: flex; align-items: center; justify-content: center; margin-top: 25vh;'
document.body.appendChild(buttonDiv);


const paperbtn = document.createElement("button");
paperbtn.style.cssText += 'width: min(40vw, 20rem); height: min(20vh, 8rem); font-size: min(5vh, 4rem'
paperbtn.setAttribute('id','paper');
paperbtn.textContent = "paper";

const rockbtn = document.createElement("button");
rockbtn.style.cssText += 'width: min(40vw, 20rem); height: min(20vh, 8rem); font-size: min(5vh, 4rem'
rockbtn.setAttribute('id','rock');
rockbtn.textContent = "rock";

const scissorsbtn = document.createElement("button");
scissorsbtn.style.cssText += 'width: min(40vw, 20rem); height: min(20vh, 8rem); font-size: min(5vh, 4rem'
scissorsbtn.setAttribute('id','scissors');
scissorsbtn.textContent = "scissors";

buttonDiv.appendChild(paperbtn);
buttonDiv.appendChild(rockbtn);
buttonDiv.appendChild(scissorsbtn);

document.body.addEventListener('click',(event) => {
    let target = event.target;
    let computerSelection = getComputerChoice();
    switch (target.id) {
        case 'paper':
            playRound('paper', computerSelection);
            break;
        case 'rock':
            playRound('rock', computerSelection);
            break;
        case 'scissors':
            playRound('scissors', computerSelection);
            break;
    };
});

// Div for display.
const container = document.createElement("div");
const resultsDisplay = document.createElement("p");
resultsDisplay.style.cssText += 'font-size: min(5vh, 4rem)'

const computerChoiceDisplay = document.createElement("p");
computerChoiceDisplay.style.cssText += 'font-size: min(5vh, 4rem)'
const runningscoreDisplay = document.createElement("p");
runningscoreDisplay.style.cssText += 'font-size:min(5vh, 4rem)'
const winnerDisplay = document.createElement("p");
winnerDisplay.style.cssText += 'font-size: min(5vh, 4rem)'

document.body.appendChild(container);
container.appendChild(computerChoiceDisplay);
container.appendChild(resultsDisplay);
container.appendChild(runningscoreDisplay);
container.appendChild(winnerDisplay);

// function playGame() {

// // Implement game 5 rounds
// // For loop over playRound function 5 times;
// let i;

// for(i=0; i<=4; i++) {
// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();
// console.log(playRound(humanSelection, computerSelection))
//         console.log ('You\'re score: ', humanScore, ' and the computer\'s score:', computerScore)
//     }

// }

function playRound (humanChoice, computerChoice){
    let res;
    let incrementer = 0;
    // Show computers choice.
    computerChoiceDisplay.textContent = `The computer chose: ${computerChoice}`;
    // Set the winner display to an empty string.
    winnerDisplay.textContent = '';
    //If choices are equivalent: tie.
    if (humanChoice === computerChoice) {
        res = 'It\'s a tie!';
    }
    //If choices are scissors and rock, then the rock wins.
    else if ((computerChoice === 'scissors' || humanChoice === 'scissors') && (computerChoice === 'rock' || humanChoice === 'rock')) {
        switch (computerChoice) {
            case 'rock':
                res = "You lose! Rock beats scissors."
                incrementer = 'computer'
                break;
            case 'scissors':
                res = "You win! Rock beats scissors."
                incrementer = 'human'
                break;
        }
    }
    //If choices are paper and scissors, then scissors win.
    else if ((computerChoice === 'scissors' || humanChoice === 'scissors') && (computerChoice === 'paper' || humanChoice === 'paper')) {
        switch (computerChoice) {
            case 'scissors':
                res = "You lose! Scissors beats paper."
                incrementer = 'computer'
                break;
            case 'paper':
                res = "You win! Scissors beats paper."
                incrementer = 'human'
                break;
        }
    }
    //If choices are rock and paper, paper wins.
    else if ((computerChoice === 'rock' || humanChoice === 'rock') && (computerChoice === 'paper' || humanChoice === 'paper')) {
        switch (computerChoice) {
            case 'paper':
                res = "You lose! Paper beats rock."
                incrementer = 'computer'
                break;
            case 'rock':
                res = "You win! Paper beats rock."
                incrementer = 'human'
                break;
        }
    }
    //console log results and increment counter accordingly
    resultsDisplay.textContent = `Results: ${res}`;
    // switch statement for incrementing whoever won.
    switch (incrementer) {
        case 'human':
            humanScore++;
            break;
        case 'computer':
            computerScore++;
            break;
        case 0:
            break;
    }
    incrementer = 0;
    runningscoreDisplay.textContent = (
    `You\'re score: ${humanScore} and the computer\'s score: ${computerScore}`)
    if ( humanScore >= 5) {
        winnerDisplay.textContent = 'You won!';
    } else if (computerScore >= 5) {
        winnerDisplay.textContent = 'The computer won';
     }
    if ( humanScore === 5 || computerScore === 5) {
        humanScore = 0;
        computerScore = 0;
    }
}



function getComputerChoice() {

    let tmp;
    let res;
    // Call random method. Assign resulting value.
    tmp = Math.random();
    // If statements to divide result into three possibilities.
    // If greater than or equal to 0 and less than .33 then paper.
    if ( 0 <= tmp && tmp <.33) {
        res = 'paper';
    }
    // If greater than or equal to .33 and less than .66 then rock.
    else if ( .33 <= tmp && tmp <.66) {
        res = 'rock';
    }

    // If greater than or equal to .66 and less than 1 then scissors.
    if ( .66 <= tmp && tmp < 1) {
        res = 'scissors';
    }

    // Return result
    return res;

}

function getHumanChoice() {
    let userChoice;
    let counter = 0;
    do {
        if (counter === 0) {
    userChoice = prompt("Choose: rock, paper, or scissors");
        } else { 
    userChoice = prompt("Answer was invalid choose: rock, paper, or scissors");
        }

    userChoice = userChoice.toLowerCase();
        
        ++counter;
    }
    while ( userChoice !== 'rock' && userChoice !== 'paper'&& userChoice !== 'scissors');
    return userChoice;

}


