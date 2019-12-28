//Score Board     

let wins = 0;
let losses = 0;
let guessesLeft = 10;
let letter = makeRandomLetter();
console.log(letter);
let wrongLetters = [];
let gameOver = false;

function makeRandomLetter() {
    var chars = "abcdefghiklmnopqrstuvwxyz";
    let randomIndex = Math.floor(Math.random() * chars.length);
    return chars.charAt(randomIndex);
}

document.onkeyup = function(event) {
    console.log("You pressed ", event.key);
    // if game over, then reset letters and guesses
    if (gameOver) {
        resetLetterAndGuesses();
    } else {
        // else this stuff
        if (event.key === letter) {
            correctGuess();
            gameOver = true;
            // resetLetterAndGuesses();
        } else {
            wrongGuess();
            if (guessesLeft == 0) {
                accrueLoss();
                gameOver = true;
                // resetLetterAndGuesses();
            }
        }
    }
}

function wrongGuess() {
    console.log("Nope");
    guessesLeft = guessesLeft - 1;
    document.getElementById("guessesLeftHTML").innerText = guessesLeft;
    console.log(guessesLeft);
    wrongLetters.push(event.key);
    document.getElementById("guessedHTML").innerHTML = wrongLetters;
}

function correctGuess() {
    console.log("You Win!");
    wins = wins + 1;
    console.log(wins);
    document.getElementById("winTallyHTML").innerHTML = wins;
    document.getElementById("gameMsg").innerHTML = "You Won! You may be psychic! Click any key to restart!"
}

function accrueLoss() {
    guessesLeft = guessesLeft - 1;
    losses = losses + 1;
    document.getElementById("lossSpan").innerHTML = losses;
    document.getElementById("gameMsg").innerHTML = "Boo! You lost hard! I'm thinking you're not psychic. Click any key to restart"

}

function resetLetterAndGuesses() {
    wrongLetters = [];
    guessesLeft = 10;
    letter = makeRandomLetter();
    console.log(letter);
    gameOver = false;
    document.getElementById("guessedHTML").innerHTML = wrongLetters;
    document.getElementById("guessesLeftHTML").innerText = guessesLeft;
    document.getElementById("gameMsg").innerHTML = "Guess which letter I am thinking of."

}