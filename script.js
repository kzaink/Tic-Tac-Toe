let boxes = document.querySelectorAll(".box");
let newGameBtn = document.querySelector("#new-game");
let resetBtn = document.querySelector("#reset");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");

let turnO = true;
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      if (box.innerText === "O") {
        box.style.color = "#fff";
      }
      turnO = false;
    } else if (turnO === false) {
      box.innerText = "X";
      if (box.innerText === "X") {
        box.style.color = "black";
      }
      turnO = true;
    }
    box.disabled = true;
    // let winner =
    checkWin();
  });
});

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let newGame = () => {
  turnO = true;
  enableBoxes();
  msgContainer.classList.add("hidden");
};

let disableBoxes = () => {
  for (const box of boxes) {
    box.disabled = true;
  }
};

let enableBoxes = () => {
  for (const box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations , Winner is ${winner}`;
  msgContainer.classList.remove("hidden");
  disableBoxes();
};

let checkWin = () => {
  for (let pattern of winPatterns) {
    // console.log(pattern);
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        showWinner(pos1val);
      }
    }
  }
};

newGameBtn.addEventListener("click", newGame);
resetBtn.addEventListener("click", newGame);
