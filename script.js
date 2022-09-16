const box = document.querySelectorAll(".box");
const statusText = document.querySelector("#winnerMessage");
const reStart = document.querySelector("#restart");
const strike = document.getElementById("strike");
const winnerBox = document.getElementById("winnerBox");
console.log(statusText)
// const lines = {
// [0, 1, 2]:"strike1Row",
// [3, 4, 5]: "strike2Row",
//    [6, 7, 8]: "strike3Row",
//    [0, 3, 6] : "strike1Column",
//   [1, 4, 7] : "strike2Column",
//   [2, 5, 8] : "strike3Column",
//   [0, 4, 8]: "strike1Diagonal",
//   [2, 4, 6] : "strike2Diagonal",
// };

const winParameters1 = [
     [0, 1, 2], 
     [3, 4, 5], 
     [6, 7, 8], 
     [0, 3, 6], 
     [1, 4, 7],
     [2, 5, 8], 
     [0, 4, 8], 
     [2, 4, 6], 
  ];

console.log(winParameters1[0,0,0])

let options = ["", "", "", "", "", "", "", "", ""];
let player = "X";
let running = false;

//This functions initialize the game

restartGame()
gameStart();

function gameStart() {
  box.forEach((box) => box.addEventListener("click", boxClicked));
  reStart.addEventListener("click", restartGame);
  winnerBox.textContent = `${player} is playing now`
  running = true;
}
//This function allow us to press the click in our board and then it calls the function which add content to the board
function boxClicked() {
  const boxIndex = this.getAttribute("data-index");
  if (options[boxIndex] != "" || !running) {
    return;
  }
  updateBox(this, boxIndex);
//   switchPlayer();
  checkWinner();
}

// //This function make it possible to put "Xs" or "Os" in our Tic Tac Toe Board
function updateBox(box, index) {
  options[index] = player;
  box.textContent = player;
}
//This function switch between Xs and Os
function switchPlayer() {
  if (player == "X") {
    player = "O";
  } else {
    player = "X";
  }
}

function checkWinner() {
  let roundWon = false;
  //revise tommorrow columns and diagonals are ot being reconized
  for (let i = 0; i < winParameters1.length; i++) {
    const condition = winParameters1[i];
    const boxA = options[condition[0]];
    const boxB = options[condition[1]];
    const boxC = options[condition[2]];
    
    if (boxA == "" || boxB == "" || boxC == "") {
      continue;
    }
    if (boxA == boxB && boxB == boxC) {
      roundWon = true;
    // strike.classList.add("strike1Row")
   
    }
  }

  if (roundWon) {
    winnerBox.textContent = `${player} won. Good Job!!!`
    statusText.className = "visible";
    running = false;
    //it is working 
  } else if (!options.includes("")) {
    winnerBox.textContent = `Draw :( You can restart the game`;
    statusText.className = "visible";
    running = false;
  } else {
    switchPlayer();
    winnerBox.textContent = `${player} is playing now`
  }
}

function restartGame() {
  player = "X";
  options = ["", "", "", "", "", "", "", "", ""];
  // statusText.className = "notShown";
  winnerBox.textContent = `Let's Play`;
  statusText.className = "visible";
  box.forEach((box) => (box.textContent = ""));
  running = true;
}


