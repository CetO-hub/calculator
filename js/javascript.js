function add(isNumber1Array, isNumber2Array) {
  return console.log(isNumber1Array, isNumber2Array);
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}
function operate(isOperator) {
  switch (1) {
    case 1:
      add(isNumber1Array, isNumber2Array);
      console.log("Hey");
      break;
    case "-":
      subtract(isNumber1Array, isNumber2Array);
      break;
    case "*":
      multiply(isNumber1Array, isNumber2Array);
      break;
    case "/":
      divide(isNumber1Array, isNumber2Array);
      break;
  }
}

function displayNumber(e) {
  if (
    (isNumber1Array.find((element) => element === ".") !== undefined &&
      e.target["innerText"] === ".") ||
    (isNumber2Array.find((element) => element === ".") !== undefined &&
      e.target["innerText"] === ".")
  ) {
    return;
  }
  if (e.target["className"] === "operator") {
    isOperator = e.target["innerText"];
    isDisplay.innerText = isOperator;
    return;
  }
  if (!isOperator) {
    isNumber1Array.push(e.target["innerText"]);
    isDisplay.innerText = isNumber1Array.join("");
    console.log(isNumber1Array);
    return;
  }
  if (isOperator) {
    isNumber2Array.push(e.target["innerText"]);
    isDisplay.innerText = isNumber2Array.join("");
    console.log(isNumber2Array);
    return;
  }
}

function clearNumber() {
  isNumber1Array = [];
  isNumber2Array = [];
  isOperator = undefined;
  isDisplay.innerText = 0;
}

let isNumber1Array = [];
let isNumber2Array = [];
let isOperator;

let isDisplay = document.querySelector(".display");
let isClear = document.querySelector(".clear");
let isEnter = document.querySelector(".enter");
let isButtons = document.querySelectorAll(".number");
let isOperators = document.querySelectorAll(".operator");

isButtons.forEach((button) => button.addEventListener("click", displayNumber));
isOperators.forEach((operator) =>
  operator.addEventListener("click", displayNumber)
);
isClear.addEventListener("click", clearNumber);
isEnter.addEventListener("click", operate);
