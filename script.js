function game(){
    let playerScore = 0;
    let computerScore = 0;
    let matches = 1;
    let gameStatus = "string";
    

    for (matches;matches<Infinity;matches++) {
        

        
        gameStatus = playerSelection();
            
            if (gameStatus == "win") {
                playerScore = playerScore + 1;
            }
            else if (gameStatus == "tied") {
                
            }
            else {
                computerScore = computerScore + 1;
            }

            if (playerScore == 3) {
                alert ("YOU WIN");
                return;
            }
            else if (computerScore == 3) {
                alert ("YOU LOSE");
                return;
            }

            console.log ("player" + playerScore);
            console.log ("computer" + computerScore);
            console.log ("matches" + matches);
            console.log (gameStatus);
            
            


    }
}

function computerPlay() {
    const rps = ["rock","paper","scissors"];
    return rps[Math.floor(Math.random() * 3)];
}


function playerSelection () {
    let playerChoice = prompt("Rock Paper or Scissors?").toLowerCase();
    let computerSelection = computerPlay();
    console.log (computerSelection);

    if (playerChoice == "rock") {
        if (computerSelection == "rock"){
            alert ("Try Again");
            return "tied";        
        } 
        else if (computerSelection == "paper"){
            alert ("You Lose! Paper beats Rock");
            return "lose";
        }
        else {
            alert ("You Win! Rock beats Scissors");
            return "win";
        } 
    }
    else if (playerChoice == "paper") {
        if (computerSelection == "rock"){
            alert ("You Win! Paper beats Rock");
            return "win";      
        } 
        else if (computerSelection == "paper"){
            alert ("Try Again");
            return "tied";
        }
        else {
            alert ("You Lose! Scissors beats Paper");
            return "lose";
        } 
    }
    else if (playerChoice == "scissors") {
        if (computerSelection == "rock"){
            alert ("You Lose! Rock beats Scissors");
            return "lose";        
        } 
        else if (computerSelection == "paper"){
            alert ("You Win! Scissors beats Paper");
            return "win";
        }
        else {
            alert ("Try Again");
            return "tied";
        } 
    }
    else if (playerChoice == null || playerChoice == "") {
        alert("Canceled");
    }
    else {
        playerSelection();
    }
}


game();



