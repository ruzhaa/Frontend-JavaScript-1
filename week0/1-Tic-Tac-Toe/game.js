"use strict";
var prompt = require("sync-prompt").prompt;

function printBoard (board) {
  var
    i = 0,
    n = board.length;
  // keep in mind that this is poorly-written JavaScript code
  // we will learn not to use for loops in JavaScript
  for(i; i < n; i++) {
    console.log(board[i].join(""));
  }
}

function printPlayer (player) {
  console.log("This is " + player.name + " -> " + player.sign);
}

function checkPosition (position) {
  if ( position > 3 || position < 1) {
    console.log("This position is outside.");
    return true;
  } else if (isNaN(position)) {
    console.log("Entrer again number for position")
  }
  return false;
}

function checkPositionOfBoard (x, y, board, player) {
  console.log(player);
  if (board[x - 1][y - 1] != 'X' && board[x - 1][y - 1] != 'O') {
    board[x - 1][y - 1] = player.sign;
  } else {
    console.log("This place is occupied");
    return true;
  }
}

function checkWinPositionHorisontal (board, player1) {
  if (player1) {
    // Player 1 -> (X)

  } else {
    // Player 2 -> (O)
  }
}


// entry point for the game
function gameLoop() {
  var
    board = [ ["*", "*", "*"],
              ["*", "*", "*"],
              ["*", "*", "*"] ],
    xTurn = true,
    player = true;

    var nicknameFirstPlayer = { name: prompt('Enter your nickname: '), sign: 'X' },
        nicknameSecondPlayer = { name: prompt('Enter your nickname: '), sign: 'O' };

  while(true) {

    if(xTurn) {

      if (player) {
        printPlayer(nicknameFirstPlayer);
      } else {
        printPlayer(nicknameSecondPlayer);
      }

      console.log("This is the current state of the board:");
      printBoard(board);

      var x = prompt("Enter x> ");
      while (checkPosition(x)) {
        x = prompt("Enter x> ");
      }
    } else {
      var y = prompt("Enter y> ");
      while (checkPosition(y)) {
        y = prompt("Enter y> ");
      }
    }

    // ако не се въвежда х => 
    // се е въвело у и ще правя проверка за въведената позиция и после ще сменя xTurn
    if (!xTurn) {
      // change player
      player = !player;
    } else {
      if (player) {
        checkPositionOfBoard(x, y, board, nicknameFirstPlayer);
      } else {
        checkPositionOfBoard(x, y, board, nicknameSecondPlayer);
      }
    }
    xTurn = !xTurn;

  }
}

gameLoop();
