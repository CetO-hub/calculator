let isNumber1Array = [];
let isNumber2Array = [];
let isOperator = [];

function add(number1, number2) {
  let isResult = +number1.join("") + +number2.join("");
  isNumber2Array = [];
  if (isOperator.length > 1) {
    if (isResult.toString().length > 6) {
      isDisplay.innerText = isResult.toFixed(2);
      isOperator.splice(0, 1);
      return (isNumber1Array = isResult.toString().split());
    }
    isOperator.splice(0, 1);
    isDisplay.innerText = isResult + " " + isOperator[0];
    return (isNumber1Array = isResult.toString().split());
  }
  if (isResult.toString().length > 6) {
    isDisplay.innerText = isResult.toFixed(2);
    isOperator.splice(0, 1);
    return (isNumber1Array = isResult.toString().split());
  }
  isDisplay.innerText = isResult;
  isOperator.splice(0, 1);
  return (isNumber1Array = isResult.toString().split());
}

function subtract(number1, number2) {
  let isResult = +number1.join("") - +number2.join("");
  isNumber2Array = [];
  if (isOperator.length > 1) {
    if (isResult.toString().length > 6) {
      isDisplay.innerText = isResult.toFixed(2);
      isOperator.splice(0, 1);
      return (isNumber1Array = isResult.toString().split());
    }
    isOperator.splice(0, 1);
    isDisplay.innerText = isResult + " " + isOperator[0];
    return (isNumber1Array = isResult.toString().split());
  }
  if (isResult.toString().length > 6) {
    isDisplay.innerText = isResult.toFixed(2);
    isOperator.splice(0, 1);
    return (isNumber1Array = isResult.toString().split());
  }
  isDisplay.innerText = isResult;
  isOperator.splice(0, 1);
  return (isNumber1Array = isResult.toString().split());
}

function multiply(number1, number2) {
  let isResult = +number1.join("") * +number2.join("");
  isNumber2Array = [];
  if (isOperator.length > 1) {
    if (isResult.toString().length > 6) {
      isDisplay.innerText = isResult.toFixed(2);
      isOperator.splice(0, 1);
      return (isNumber1Array = isResult.toString().split());
    }
    isOperator.splice(0, 1);
    isDisplay.innerText = isResult + " " + isOperator[0];
    return (isNumber1Array = isResult.toString().split());
  }
  if (isResult.toString().length > 6) {
    isDisplay.innerText = isResult.toFixed(2);
    isOperator.splice(0, 1);
    return (isNumber1Array = isResult.toString().split());
  }
  isDisplay.innerText = isResult;
  isOperator.splice(0, 1);
  return (isNumber1Array = isResult.toString().split());
}

function divide(number1, number2) {
  if (isNumber2Array && +number2.join("") === 0) {
    isNumber2Array = [];
    return (isDisplay.innerText = "No division by 0, choose other number!");
  }
  let isResult = +number1.join("") / +number2.join("");
  isNumber2Array = [];
  if (isOperator.length > 1) {
    if (isResult.toString().length > 6) {
      isDisplay.innerText = isResult.toFixed(2);
      isOperator.splice(0, 1);
      return (isNumber1Array = isResult.toString().split());
    }
    isOperator.splice(0, 1);
    isDisplay.innerText = isResult + " " + isOperator[0];
    return (isNumber1Array = isResult.toString().split());
  }
  if (isResult.toString().length > 6) {
    isDisplay.innerText = isResult.toFixed(2);
    isOperator.splice(0, 1);
    return (isNumber1Array = isResult.toString().split());
  }
  isDisplay.innerText = isResult;
  isOperator.splice(0, 1);
  return (isNumber1Array = isResult.toString().split());
}

function operate() {
  switch (isOperator[0]) {
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
  if (
    e.target["className"] === "operator" &&
    isOperator.length === 1 &&
    isNumber2Array.length > 0
  ) {
    isOperator.push(e.target["innerText"]);
    return operate();
  }
  if (e.target["className"] === "operator") {
    isOperator.push(e.target["innerText"]);

    isDisplay.innerText = isOperator[0];
    return;
  }
  if (!isOperator[0]) {
    if (
      isNumber1Array.find((element) => element === ".") !== undefined &&
      e.target["innerText"] === "."
    )
      return;
    isNumber1Array.push(e.target["innerText"]);
    isDisplay.innerText = isNumber1Array.join("");
    return;
  }
  if (isOperator[0]) {
    if (
      isNumber2Array.find((element) => element === ".") !== undefined &&
      e.target["innerText"] === "."
    )
      return;
    isNumber2Array.push(e.target["innerText"]);
    isDisplay.innerText = isNumber2Array.join("");
    return;
  }
}

function clearNumber() {
  isNumber1Array = [];
  isNumber2Array = [];
  isOperator = [];
  isDisplay.innerText = 0;
}

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
