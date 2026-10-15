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

//Operators handling

operatorBtns.forEach((button) => {
  button.addEventListener("click", () => {
    prevNum = curentNum;
    activeOperation = button.getAttribute("data-operator");
    isResetNextKey = true;
  });
});

equalBtn.addEventListener("click", () => {
  if (!activeOperation || prevNum === null) return;

  const prev = parseFloat(prevNum);
  const curent = parseFloat(curentNum);
  let results = 0;

  switch (activeOperation) {
    case "+":
      results = prev + curent;
      break;

    case "-":
      results = prev - curent;
      break;

    case "*":
      results = prev * curent;
      break;

    case "/":
      results = curent === 0 ? "error" : prev / curent;
      break;

    default:
      return;
  }
  curentNum = String(results);
  prevNum = null;
  activeOperation = null;
  isResetNextKey = true;

  updateDisplay();
});

clearBtn.addEventListener("click", () => {
  curentNum = "0";
  prevNum = null;
  activeOperation = null;
  isResetNextKey = false;

  updateDisplay();
});
