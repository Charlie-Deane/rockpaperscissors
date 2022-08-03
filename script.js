function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
function getComputerChoice() //randomly selects for the computer
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

function getHumanChoice(humanInput) //check humanInput for input errors in evaluation syntax
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

function printHumanScore(id, score)
{
    const container = document.getElementById(id);
    container.textContent = `HUMAN: ${score}`;
}

function printComputerScore(id, score)
{
    const container = document.getElementById(id);
    container.textContent = `COMPUTER: ${score}`;
}

function removeBorders(e) //reset all selection borders to black
{
    e.forEach((button) => {
        button.setAttribute('style', 'border-color: black;');
        });
}

//intialize variables
let humanScore = 0;
let computerScore = 0;
let humanInput;
let computerChoice;
let humanTentative = "hello";
let humanChoice;
let winner;



//add event listener on selection elements
const selections = document.querySelectorAll('.selection');
selections.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        humanTentative = button.id;
        removeBorders(selections);
        button.setAttribute('style', 'border-color: yellow;');
    });
  });


//add event handler for lock in button -- start the process of the game onclick
const lockInButton = document.querySelector("#lockIn");
lockInButton.onclick = () => {

    //lock in choices for evaluation
    humanChoice = getHumanChoice(humanTentative);
    computerChoice = getComputerChoice();

    //tally scores
    winner = playRound(computerChoice, humanChoice);
    if (winner == "HUMAN")
    {
        humanScore++;
    }
    if(winner == "COMPUTER")
    {
        computerScore++;
    }

    //update gui
    printHumanScore('humanScore', humanScore);
    printComputerScore('computerScore', computerScore);
    removeBorders(selections);

    //reset for next round to prevent errors
    humanTentative = null;
    humanChoice = null;
    computerChoice = null;

    //check for set winners
    if (humanScore == 5)
    {
        printHumanScore('humanScore', humanScore);
        printComputerScore('computerScore', computerScore);
        alert("YOU WIN THE SET!")
        humanScore = 0;
        computerScore = 0;
        printHumanScore('humanScore', humanScore);
        printComputerScore('computerScore', computerScore);
    }
    if(computerScore == 5)
    {
        printHumanScore('humanScore', humanScore);
        printComputerScore('computerScore', computerScore);
        alert("THE COMPUTER WINS THIS SET! TRY AGAIN!")
        humanScore = 0;
        computerScore = 0;
        printHumanScore('humanScore', humanScore);
        printComputerScore('computerScore', computerScore);
    }
};