///////////////////////////////
// selecting id and classes from html file
const checkBox = document.querySelectorAll('.check-box');
const id = (id) => document.getElementById(id);
const result = id('result');
const gameOver = id('gameover');
const container = id('container');
const newGame = id('newgame');

/////////////////////////////
// For giving chess like pattern
checkBox.forEach((el, i) => {
  if (i % 2 === 0) {
    el.style.backgroundColor = "#cbd5e1";
  }
})

//////////////////////////////
// Declaring variables 
let state = true;
let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
let row;
let col;
let targetEl;

//////////////////////////////
// adding event listener on container box
container.addEventListener('click', function (e) {
  targetEl = e.target;
  row = targetEl.dataset.rows;
  col = targetEl.dataset.columns;

  if (state) {
    targetEl.innerHTML = "X";
    arr[row][col] = "X";
  } else {
    targetEl.innerHTML = "O";
    arr[row][col] = "O";
  }

  state = !state;
  winner();
});

///////////////////////////////
// Onclicking new game button
newGame.addEventListener('click', function () {
  location.reload();
})

///////////////////////////////
// Function for finding the winner of the game
function winner() {

  let win = true;

  function checkWin(check) {
    if (check) {
      if (targetEl.innerHTML == "X") {
        result.textContent = "Player 1 is the Winner 😎🏆"
      } else {
        result.textContent = "Player 2 is the Winner 😎🏆"
      }
      gameOver.style.display = "block";
      checkBox.forEach((el) => {
        el.style.filter = "blur(8px)";
      })

    } else {
      win = true;
    }
  }

  // Column Scan
  for (let j = 1; j <= 2; j++) {
    if (arr[row][j - 1] != arr[row][j]) {
      win = false;
      break;
    }
  }
  checkWin(win);

  // Row Scan
  for (let i = 1; i <= 2; i++) {
    if (arr[i - 1][col] != arr[i][col]) {
      win = false;
      break;
    }
  }
  checkWin(win);

  // Left Diagonal check
  let y = 1;
  for (let x = 1; x <= 2; x++) {
    if (arr[x - 1][y - 1] != arr[x][y]) {
      win = false;
      break;
    }
    y++;
  }
  checkWin(win);

  y = 1;
  for (let x = 1; x <= 2; x++) {
    if (arr[x - 1][y + 1] != arr[x][y]) {
      win = false;
      break;
    }
    y--;
  }
  checkWin(win);
}
