function add(number1, number2) {
  return number1 + number2;
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
function operate(operator, number1, number2) {
  switch (operator) {
    case "+":
      return add(number1, number2);
    case "-":
      return subtract(number1, number2);
    case "*":
      return multiply(number1, number2);
    case "*":
      return divide(number1, number2);
  }
}

function displayNumber(e) {
  if (
    isNumber1Array.find((element) => element === ".") !== undefined &&
    e.target["innerText"] === "."
  )
    return;
  isNumber1Array.push(e.target["innerText"]);
  isDisplay.innerText = isNumber1Array.join("");
}

function clearNumber() {
  isNumber1Array = [];
  isNumber2Array = [];
  isDisplay.innerText = 0;
}

let isNumber1Array = [];
let isNumber2Array = [];
let isDisplay = document.querySelector(".display");
let isClear = document.querySelector(".clear");
let isEnter = document.querySelector(".enter");
let isButtons = document.querySelectorAll(".number");

isButtons.forEach((button) => button.addEventListener("click", displayNumber));
isClear.addEventListener("click", clearNumber);
