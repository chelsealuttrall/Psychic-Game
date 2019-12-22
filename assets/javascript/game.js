//Score Board     

let wins = 0;
let losses = 0;
let guessesLeft = 10;
let letter = makeRandomLetter()
console.log(letter)
    //wrongLetters()

function makeRandomLetter() {
    var chars = "abcdefghiklmnopqrstuvwxyz";
    let randomIndex = Math.floor(Math.random() * chars.length);
    return chars.charAt(randomIndex);
}

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
    document.getElementById("guessedHTML").innerHTML = [event.key];
}

function correctGuess() {
    console.log("You Win!");
    wins = wins + 1;
    console.log(wins);
    document.getElementById("winTallyHTML").innerHTML = wins;
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
    letter = makeRandomLetter();
    console.log(letter);
}