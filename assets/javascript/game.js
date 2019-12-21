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
        makeRandomLetter();
        console.log(makeRandomLetter);
    } else if (event.key !== letter && guessesLeft >= 1) {
        wrongGuess();
    } else if (event.key !== letter && guessesLeft < 1) {
        resetGame();
    }
}


function wrongGuess() {
    console.log === ("Nope");
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


function resetGame() {
    console.log === ("Terrible! You lose!");
    wins = 0;
    losses = 0;
    guessesLeft = 10;
}