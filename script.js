
let playerScore = 0;
let gameStatus = "string";
const boxes = Array.from(document.querySelectorAll('.box'));
const aiInput = document.querySelector('.ai-input');
const playerBar = document.querySelector("#player-bar");
const results = document.querySelector("#results");
const clash = document.querySelector("#clash");
const clashBeam = document.querySelector("#clash-beam");
const container = document.querySelector("#container");
const body = document.querySelector("#body");
const defeated = document.querySelector("#defeated");
const winner = document.querySelector("#winner");
const mainHeader = document.querySelector("#main-header");
const goku = document.querySelector("#goku");
const kamehameha = document.querySelector("#kamehameha");
const start = document.querySelector('#start');
const goku2 = document.querySelector("#goku-p2");
let currentWidth = 40;



start.addEventListener('click',() => {
    start.style.display = "none";
    goku.style.display = "none";
    flash();
    goku2.style.display = "block";
    goku2.style.animation = "slideIn 2s ease-out 1";
});
goku2.addEventListener('animationend',() => {
    goku2.style.display = "none";
    flash();
    container.style.display = "block";
});


boxes.forEach(box => box.addEventListener('click',playerSelection));

function computerPlay() {
    const rps = ["rock","paper","scissors"];
    return rps[Math.floor(Math.random() * 3)];
}




function playerSelection (e) {
    
    
    let playerChoice = e.target.className;
    // console.log (playerChoice);

    
    let computerSelection = computerPlay();
    aiInput.setAttribute('class',computerSelection);
    
    // console.log (computerSelection);

    if (playerChoice == "rock") {
        if (computerSelection == "rock"){
            results.textContent = "Try Again";
            gameStatus = "tied";        
        } 
        else if (computerSelection == "paper"){
            results.textContent = "You Lose! Paper beats Rock";
            gameStatus = "lose";
        }
        else {
            results.textContent = "You Win! Rock beats Scissors";
            gameStatus = "win";
        } 
    }
    else if (playerChoice == "paper") {
        if (computerSelection == "rock"){
            results.textContent = "You Win! Paper beats Rock";
            gameStatus = "win";      
        } 
        else if (computerSelection == "paper"){
            results.textContent = "Try Again";
            gameStatus = "tied";
        }
        else {
            results.textContent ="You Lose! Scissors beats Paper";
            gameStatus = "lose";
        } 
    }
    else if (playerChoice == "scissors") {
        if (computerSelection == "rock"){
            results.textContent ="You Lose! Rock beats Scissors";
            gameStatus = "lose";        
        } 
        else if (computerSelection == "paper"){
            results.textContent = "You Win! Scissors beats Paper";
            gameStatus = "win";
        }
        else {
            results.textContent = "Try Again";
            gameStatus = "tied";
        } 

    }

            
    if (gameStatus == "win") {
        playerScore = playerScore + 1;
        currentWidth += 13;
        playerBar.style.width = `${currentWidth}%`;
        
    }
    else if (gameStatus == "tied") {
        
    }
    else {
        playerScore = playerScore - 1;
        currentWidth -= 13;
        playerBar.style.width = `${currentWidth}%`;
        
    }

    if (playerScore == 3) {
        boxes.forEach(box => box.removeEventListener('click',playerSelection));
        playerBar.style.width = `81.2%`;
        win();
        mainHeader.textContent = "YOU WIN!";
        return;
    }
    else if (playerScore == -3) {
        playerBar.style.width = `0%`;
        boxes.forEach(box => box.removeEventListener('click',playerSelection));
        lose();
        mainHeader.textContent = "YOU LOSE!";
        return;
    }

    console.log (gameStatus);
}


function lose() {
    container.style.display = "none";
    flash();
    defeated.style.display = "block";
    
}

function win() {
    container.style.display = "none";
    flash();
    winner.style.display = "block";
    
}
    

function removeFlash() {
    body.removeChild(flash);
}

function flash() {
    let flash = document.createElement("div");
    flash.setAttribute('id', 'flash')
    body.appendChild(flash);
    setTimeout(removeFlash, 2000); 
}