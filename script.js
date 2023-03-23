// Make numbers appear on screen when clicked
const operands = document.querySelectorAll('.operand');
for (let i = 0; i < operands.length; i++) {
  operands[i].addEventListener('click', () => display(operands[i].id));
  operandValue = operands[i].id;
};

// Make operators appear on screen when clicked
const operators = document.querySelectorAll('.operator');
for (let i=0; i < operators.length; i++) {
  operators[i].addEventListener('click', () => displayOperation(operators[i].id));
};

// Create a variable for the first number, the operator, and the second number.


let screen = document.querySelector('#screen');
let topOfScreen = document.querySelector('#topOfScreen');
let leftOperandDiv = document.querySelector('#leftOperandDiv');
let rightOperandDiv = document.querySelector('#rightOperandDiv');

screen.textContent = '0';

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

// Display number at top of screen on click
function display(number) {
  let numberString = number.toString();
  leftOperandDiv.textContent = leftOperandDiv.textContent + number;
  };

// Add operators to the on-screen display and calculator functionality
function displayOperation(operator) {
  operatorDiv.textContent = operator;
};

// Function to make clicking the operator capture the inputted data








