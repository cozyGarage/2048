const scoreElement = document.querySelector('.score');

const board = document.querySelector(".game_board");
  const size = 4; // Size of the board
  let cells = []; // Array to hold the board cells

  // Initialize the board
  function initializeBoard() {
    for (let i = 0; i < size; i++) {
      cells[i] = [];
      for (let j = 0; j < size; j++) {
        cells[i][j] = 0;
      }
    }
  }