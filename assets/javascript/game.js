var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guesses = 10;
var remainingGuesses = 10;
var guessedLetters = [];

// Randomly chooses a choice from the letters array. This is the Computer's choice.
var compChoice = letters[Math.floor(Math.random() * letters.length)];

console.log(compChoice);

var updateGuessesLeft = function () {
    document.querySelector('#guessLeft').innerHTML = remainingGuesses;
}

var updateLetterToGuess = function () {
    this.compChoice = this.letters[Math.floor(Math.random() * this.letters.length)];
};

var updateGuessesSoFar = function () {
    document.querySelector('#lettersGuessed').innerHTML = "Letters You've Guessed: " + guessedLetters.join(', ');
};

var reset = function () {
    guesses = 10;
    remainingGuesses = 10;
    guessedLetters = [];
}

document.onkeyup = function (event) {
    remainingGuesses--;
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    console.log(userGuess);

    guessedLetters.push(userGuess)
    updateGuessesLeft();
    updateGuessesSoFar();

    if (remainingGuesses > 0) {
        if (userGuess == compChoice) {
            wins++;
            alert("Congrats! You're psychic!!");
            document.querySelector("#wins").innerHTML = "Wins: " + wins;
            reset();
        }
    } else if (remainingGuesses == 0) {
        losses++;
        alert("I'm sorry... turns out you're not psychic!");
        document.querySelector('#losses').innerHTML = "Losses: " + losses;
        reset();
    };
};
