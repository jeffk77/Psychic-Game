var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guesses = 10;
var remainingGuesses = 10;
var guessedLetters = [];
var letterToGuess = null;

// Randomly chooses a choice from the letters array. This is the Computer's choice.
var compChoice = letters[Math.floor(Math.random() * letters.length)];

var updateGuessesLeft = function () {
    document.querySelector('#guessLeft').innerHTML = "Guesses Left: " + remainingGuesses;
}

var updateLetterToGuess = function () {
    this.letterToGuess = this.letters[Math.floor(Math.random() * this.letters.length)];
};

var updateGuessesSoFar = function () {
    document.querySelector('#lettersGuessed').innerHTML = "Letters You've Guessed: " + guessedLetters.join(', ');
};

var reset = function () {
    guesses = 10;
    remainingGuesses = 10;
    guessedLetters = [];

    updateLettertoGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
}

updateLetterToGuess();
updateGuessesLeft();

document.onkeyup = function (event) {
    guessesLeft--;
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    guessedLetters.push(userGuess)
    updateGuessesLeft();
    updateGuessesSoFar();

    if (guessesLeft > 0) {
        if (userGuess == letterToGuess) {
            wins++;
            document.querySelector("#wins").innerHTML = "Wins: " + wins;
            reset();
        }
    } else if (guessesLeft == 0) {
        losses++;
        document.querySelector('#losses').innerHTML = "Losses: " + losses;
        reset();
    };
};
