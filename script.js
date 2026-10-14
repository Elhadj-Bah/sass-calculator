const clearBtn = document.getElementById("clear");
const acBtn = document.getElementById("ac");
const operatorBtns = document.querySelectorAll("[data-operator]");
const numbersBtns = document.querySelectorAll("[data-number]");
const equalBtn = document.getElementById("equal");
const displayOnScreen = document.getElementById("display");

// Application memory state:

let curentNum = "0";
let prevNum = null;
let activeOperation = null;
let isResetNextKey = false;

//Update Display;

function updateDisplay() {
  displayOnScreen.innerText = curentNum;
}

numbersBtns.forEach((button) => {
  button.addEventListener("click", () => {
    const number = button.getAttribute("data-number");

    if (curentNum === "0" || isResetNextKey) {
      curentNum = number;
      isResetNextKey = false;
    } else {
      curentNum += number;
    }

    updateDisplay();
  });
});

// numbersBtns.forEach((button) => {
//   button.addEventListener("click", () => {
//     const number = button.getAttribute("data-number");

//     console.log(number);
//   });
// });
