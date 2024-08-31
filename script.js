let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector("msg-container");
let msg = document.querySelector(".msg");

let turnO = true;

const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [2, 5, 8],
  [2, 4, 6],
  [1, 4, 7],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "o";
      turnO = false;
    } else {
      box.innerText = "x";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const showWinner = (winner) => {
  msg.innerText = `Congratulations , Winner is ${winner}`;
  msgContainer.classList.remove("hide");
};

const checkWinner = () => {
  for (let pattern of winPattern) {
    // console.log(
    //   boxes[pattern[0]].innerText,
    //   boxes[pattern[1]].innerText,
    //   boxes[pattern[2]].innerText
    // );
    let position1 = boxes[pattern[0]].innerText;
    let position2 = boxes[pattern[1]].innerText;
    let position3 = boxes[pattern[2]].innerText;

    if (position1 != "" && position2 != "" && position3 != "") {
      if (position1 === position2 && position2 === position3) {
        console.log("Winner", position1);
        showWinner(position1);
      }
    }
  }
};
