// onload, have the instruction modal open 
//Listen event for the start button and call the funciton init to begin the game
//init function should include any empty board, start with player 1, have winner set to false, and message saying that is is the first persons turn
//function that represents everything that happens in one turn: event lisener, deterimine if the spot if available then place the token, check board against the winning combo array, and, change player, change message to who's turn it is
//for loop function that runs between the board & winning array
//function for messages based on who wins then calls on the footer modal, tie, whos' turn
//addlistener for play again button with callback to the init function

// VARIABLES --------------------------------------------------------
let board;
let player;
let winner;

// CONSTANTS --------------------------------------------------------
const winningCombos = ''
const LOOKUP = {
    player1: 1,
    player2: -1
}

// CATCHED ELEMENTS -------------------------------------------------
const playButtonEl = document.getElementById('play-game')
const boardInterfaceEl = document.querySelectorAll('.slot')
const restartButtonEl = document.getElementById("restart")
// all catched correctly

// EVENT LISTENERS --------------------------------------------------





// FUNCTIONS ---------------------------------------------------------
function init () {
}


function determWinner() {

}


function playerTurn() {

}

function message() { //can we merge this one with determWinner

}

function restart() {

}