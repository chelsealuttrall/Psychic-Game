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
//let guessesLeftJS = document.getElementById("h4#guessesLeftHTML");
//guessesLeft.innerText = guessesLeft;
//console.log(guessesLeft);


document.onkeyup = function(event) {
    console.log("You pressed ", event.key);

    if (event.key === letter) {
        correctGuess();
        resetLetterAndGuesses();
    } else if (event.key !== letter && guessesLeft >= 2) {
        wrongGuess();
    } else if (event.key !== letter && guessesLeft < 2) {
        accrueLoss();
        resetLetterAndGuesses();

    }
}

function wrongGuess() {
    console.log("Nope");
    guessesLeft = guessesLeft - 1;
    document.getElementById("guessesLeftHTML").innerText = guessesLeft;
    console.log(guessesLeft);
}

function correctGuess() {
    console.log("You Win!");
    wins = wins + 1;
    console.log(wins);
    document.getElementById("winTallyHTML").innerHTML = wins;
    //?continue.makeRandomLetter();
}

function accrueLoss() {
    guessesLeft = guessesLeft - 1;
    losses = losses + 1;
    document.getElementById("lossSpan").innerHTML = losses;
    guessesLeft = 10;
    document.getElementById("guessesLeftHTML").innerText = guessesLeft;
}

function resetLetterAndGuesses() {
    guessesLeft = 10;
    makeRandomLetter();

    // resetLetter();
    //clear guessedHTML }
};