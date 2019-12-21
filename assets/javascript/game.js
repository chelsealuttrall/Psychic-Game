//Score Board     

let wins = 0;
let losses = 0;
let guessesLeft = 10;
let letter = makeRandomLetter()
console.log(letter)


//Random Letter Generator

function makeRandomLetter() {
    var chars = "abcdefghiklmnopqrstuvwxyz";
    //pick random # between 0&25
    let randomIndex = Math.floor(Math.random() * chars.length);
    return chars.charAt(randomIndex);
}

//Writing In Guesses Left    
let guessesLeftJS = document.getElementById("h4#guessesLeftHTML");
guessesLeft.innerText = guessesLeft;
console.log(guessesLeft);


document.onkeyup = function(event) {
    console.log("You pressed ", event.key);

    if (event.key === letter) {
        correctGuess();
    } else if (event.key !== letter && guessesLeft >= 1) {
        wrongGuess();
    } else if (event.key !== letter && guessesLeft < 1) {
        accrueLoss();
        resetLetterAndGuesses();

    }
}


function wrongGuess() {
    console.log("Nope");
    guessesLeft = guessesLeft - 1;
    document.getElementById("guessesLeftHTML").innerHTML = guessesLeft;
}

function correctGuess() {
    console.log("You Win!");
    wins = wins + 1;
    console.log(wins);
    document.getElementById("winTallyHTML").innerHTML = wins;
    //?continue.makeRandomLetter();
}

function accrueLoss() {
    losses = losses + 1;
    document.getElementById("lossSpan").innerHTML = losses;
}

function resetLetterAndGuesses() {
    guessesLeft = 10;
    letter = "";
}