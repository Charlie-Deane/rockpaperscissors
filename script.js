function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
function getComputerChoice()
{
    switch(getRandomInt(3))
    {
        case 0:
            return "ROCK";
            break;
        case 1:
            return "PAPER";
            break;
        case 2:
            return "SCISSORS";
            break;
        default:
            return "ERROR";
    }
}

function getHumanChoice(humanInput)
{
    humanInput = humanInput.trim(); //remove whitespace
    humanInput = humanInput.toUpperCase(); // make input all caps for continuity
    switch(humanInput)
    {
        case "ROCK":
            return humanInput;
            break;
        case "PAPER":
            return humanInput;
            break;
        case "SCISSORS":
            return humanInput;
            break;
        default:
            return "ERROR"
    }
}

function playRound(computerChoice, humanChoice)
{
    let winner = null; // value to return

    //for tie game or error winner will return null
    //for human victory winner will return "HUMAN"
    //for computer victory winner will return "COMPUTER"

    switch(true)
    {
        case (computerChoice == "ROCK" && humanChoice == "ROCK"):
            alert("Rock ties rock!");
            break;
        case (computerChoice == "ROCK" && humanChoice == "PAPER"):
            winner = "HUMAN";
            alert("You win! Paper beats rock!");
            break;
        case (computerChoice == "ROCK" && humanChoice == "SCISSORS"):
            winner = "COMPUTER";
            alert("Computer wins! Rock beats scissors!");
            break;
        case (computerChoice == "PAPER" && humanChoice == "ROCK"):
            winner = "COMPUTER";
            alert("Computer wins! Paper beats rock!");
            break;
        case (computerChoice == "PAPER" && humanChoice == "PAPER"):
            alert("Paper ties paper!");
            break;
        case (computerChoice == "PAPER" && humanChoice == "SCISSORS"):
            winner = "HUMAN";
            alert("You win! Scissors beat paper!");
            break;
        case (computerChoice == "SCISSORS" && humanChoice == "ROCK"):
            winner = "HUMAN";
            alert("You win! Rock beats scissors!");
            break;
        case (computerChoice == "SCISSORS" && humanChoice == "PAPER"):
            winner = "COMPUTER";
            alert("Computer wins! Scissors beat paper!")
            break;
        case (computerChoice == "SCISSORS" && humanChoice == "SCISSORS"):
            alert("Scissors ties scissors!")
            break;
        case (computerChoice == "ERROR"):
            alert("Computer has chosen an invalid input!");
            break;
        case (humanChoice == "ERROR"):
            alert("We gave you choices! Why didnt you pick any?!?!");
            break;
        default:
            alert("something has gone terribly wrong!");
    }

    return winner;
}

let humanScore = 0;
let computerScore = 0;
let humanInput;
let computerChoice;
let humanChoice;
let winner;

while (humanScore < 6 && computerScore < 6)
{
    humanInput = window.prompt("Choose your weapon! Rock, Paper, or Scissors?");
    computerChoice = getComputerChoice(); // select computer choice
    humanChoice = getHumanChoice(humanInput); // truncuate humanInput for use
    winner = playRound(computerChoice, humanChoice);
    if (winner == "HUMAN")
    {
        humanScore++;
    }
    if(winner == "COMPUTER")
    {
        computerScore++;
    }
    alert(`You have won ${humanScore} and the computer has won ${computerScore}`);
}