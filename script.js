const checkBox = document.querySelectorAll('.check-box');
const result = document.getElementById('result');
checkBox.forEach((el, i) => {
  if (i % 2 === 0) {
    el.style.backgroundColor = "#cbd5e1";
  }
})

let state = true;
let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

let row;
let col;
let targetEl;
document.getElementById('container').addEventListener('click', function (e) {
  targetEl = e.target;
  row = targetEl.dataset.rows;
  col = targetEl.dataset.columns;

  if (state) {
    targetEl.innerHTML = "X";
    arr[row][col] = "X"
  } else {
    targetEl.innerHTML = "O"
    arr[row][col] = "O"
  }

  winner();
  state = !state;
});

function winner() {

  let win = true;

  function checkWin(check) {
    if (check) {
      if (targetEl.innerHTML == "X") {
        result.textContent = "Player 1 is the Winner :)"
      } else {
        result.textContent = "Player 2 is the Winner :)"
      }
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
