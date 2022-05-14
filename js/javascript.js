function add(number1, number2) {
  isOperator = 0;
  let isResult = +number1.join("") + +number2.join("");
  isNumber2Array = [];
  isDisplay.innerText = isResult;
  return (isNumber1Array = isResult.toString().split());
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
function operate() {
  switch (isOperator) {
    case "+":
      add(isNumber1Array, isNumber2Array);
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
  if (e.target["className"] === "operator") {
    isOperator = e.target["innerText"];
    isDisplay.innerText = isOperator;
    return;
  }
  if (!isOperator) {
    if (
      isNumber1Array.find((element) => element === ".") !== undefined &&
      e.target["innerText"] === "."
    )
      return;
    isNumber1Array.push(e.target["innerText"]);
    isDisplay.innerText = isNumber1Array.join("");
    console.log(isNumber1Array);
    return;
  }
  if (isOperator) {
    if (
      isNumber2Array.find((element) => element === ".") !== undefined &&
      e.target["innerText"] === "."
    )
      return;
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
