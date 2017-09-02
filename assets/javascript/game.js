// Created an array that lists all of the options to win the game
var alphabet = ["a, b, c, d, e, f, g, h, i , j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z"];

// Created variables to hold wins, losses, guesses left, and guesses so far
var wins = 0;

var winsNow = function () {
document.querySelector('wins').innerHTML = "Wins: " + wins;
};

var losses = 0;

var lossesNow = function () {
document.querySelector('losses').innerHTML = "Losses: " + losses;
};

var guessesLeft = 9;

var updateLeft = function () {
document.querySelector('guessesLeft').innerHTML = "Guesses Left: " + guessesLeft;
};

var soFar = [];

// Picks a choice from the array 
	var compGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

// Run the key 
document.onekeyup = function(event) {
	// Determining the key user presses
	var soFar = event.key;

	// Determines the game's outcome
	if (soFar === compGuess) {
		wins++;
	} else if (soFar !== compGuess) {
		losses++;	
	}	
};

// Code is not working (not surprising)
