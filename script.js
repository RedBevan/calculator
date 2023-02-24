// Hook query selectors to the HTML elements
const operator = document.querySelectorAll('.operator');
const operand = document.querySelectorAll('.operand');
let screen = document.querySelector('#screen');

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

screen.textContent = '988';

