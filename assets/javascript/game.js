var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lettersGuessed = "";

var wins = 0;
var losses = 0;
var remainingGuesses = 10;

// Randomly chooses a choice from the letters array. This is the Computer's choice.
var compChoice = letters[Math.floor(Math.random() * letters.length)];

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userChoice = event.key;
    var userGuess = userChoice.toUpperCase (userChoice);

    console.log(compChoice);
    console.log(userGuess);
    console.log(remainingGuesses);
    console.log(wins);
    console.log(losses);

};
