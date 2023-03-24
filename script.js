// Make numbers appear in left screen div when clicked
const operands = document.querySelectorAll('.operand');
for (let i = 0; i < operands.length; i++) {
  operands[i].addEventListener('click', () => displayLeft(operands[i].id));
  operandValue = operands[i].id;
};

// AC reset button
const AC = document.querySelector('#ac');
AC.addEventListener('click', () => reset());

// Flipped AC reset button
const flippedAC = document.querySelector('#flipped-ac');
flippedAC.addEventListener('click', () => reset());

// Equals button
const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', () => equals());

// Flipped equals button
const flippedEqualsButton = document.querySelector('#flipped-equals');
flippedEqualsButton.addEventListener('click', () => equals());

// Make (flipped) numbers appear in right screen div when clicked
const flippedOperands = document.querySelectorAll('.flipped-operand');
for (let i = 0; i < flippedOperands.length; i++) {
  flippedOperands[i].addEventListener('click', () => displayRight(flippedOperands[i].textContent));
};

// Make operators appear on screen when clicked
const operators = document.querySelectorAll('.operator');
for (let i=0; i < operators.length; i++) {
  operators[i].addEventListener('click', () => displayOperation(operators[i].id));
};

// Connect JS to HTML divs
let screen = document.querySelector('#screen');
let topOfScreen = document.querySelector('#topOfScreen');
let leftOperandDiv = document.querySelector('#leftOperandDiv');
let rightOperandDiv = document.querySelector('#rightOperandDiv');

screen.textContent = '';

function add(a, b) {
  return a+b;
};

function subtract(a, b) {
  return a-b;
};

function multiply(a,b ) {
  return a*b;
};

function divide(a, b) {
  return a/b;
};

function operate(a, b, operator) {
  switch (operator) {
    case '+':
      return add(a, b);
      break;
    case '-':
      return subtract(a, b);
      break;
    case '*':
      return multiply(a, b);
      break;
    case '/':
      return divide(a, b);
      break;
    default:
      return 0;
  };
};

// Reset calculator using AC button
function reset() {
  leftOperandDiv.textContent = '';
  rightOperandDiv.textContent = '';
  operatorDiv.textContent = '';
  screen.textContent = '';
};

// Display number in left screen div on click
function displayLeft(number) {
  let numberString = number.toString();
  leftOperandDiv.textContent = leftOperandDiv.textContent + number;
  };

  // Display (flipped) number in right screen div on click
function displayRight(number) {
  let numberString = number.toString();
  rightOperandDiv.textContent = rightOperandDiv.textContent + number;
  };

// Add operators to the on-screen display, flip button class
function displayOperation(operator) {
  operatorDiv.textContent = operator;
 // Toggle hidden class for button rows
 document.getElementById('default-button-rows').classList.toggle('hidden');
 document.getElementById('flipped-button-rows').classList.toggle('hidden');
};

function equals() {
  let leftOperand = leftOperandDiv.textContent;
  let rightOperand = rightOperandDiv.textContent;
  let operator = operatorDiv.textContent;
  screen.textContent = operate(leftOperand, rightOperand, operator);
}








