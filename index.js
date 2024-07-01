

let humanScore = 0;
let computerScore = 0;

function play(humanChoice) {

    if (humanScore == "5") {
        console.log('You Win! You beat the computer!')
    } else if (computerScore == "5") {
        console.log('You lose! The computer beat you!');
    } else {
        let choose = prompt("Choose Rock, Paper or Scissors");

        humanChoice = choose.toLocaleLowerCase();

        function computerPrompt() {
            let choice = Math.floor(Math.random() * (4 - 1) + 1);
            if (choice == 1) {
                return "rock";
            } else if (choice == 2) {
                return "paper";
            }
            else {
                return "scissors";
            }
        }

        let computerChoice = computerPrompt();

        if (computerChoice == humanChoice) {
            console.log(" It's a tie!");
        } else if (computerChoice == "rock" && humanChoice == 'scissors') {
            console.log('you lose! the computer chose rock.');
            ++computerScore;
        } else if (computerChoice == "paper" && humanChoice == 'rock') {
            console.log('you lose! the computer chose paper.');
            ++computerScore;
        } else if (computerChoice == "scissors" && humanChoice == 'paper') {
            console.log('you lose! the computer chose scissors.');
            ++computerScore;
        } else {
            console.log(`you win! The computer chose ${computerChoice}`)
            ++humanScore;
        }

        if (humanScore == "5") {
            console.log('You Win! You beat the computer!')
        } else if (computerScore == "5") {
            console.log('You lose! The computer beat you!');
        }

        console.log(`Your score is ${humanScore}, and the computer score is ${computerScore}`)
    }


}
// compare the choice
// decide winner