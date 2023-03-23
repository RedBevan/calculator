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

let screen = document.querySelector('#screen');
let topOfScreen = document.querySelector('#topOfScreen');

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
  let operandOne;
  operandOne = number;
  console.log(operandOne);
  topOfScreen.textContent = topOfScreen.textContent + number;
  operandOne = number +
  };

// Add operators to the on-screen display and calculator functionality
function displayOperation(operator) {
  topOfScreen.textContent = topOfScreen.textContent + operator;
};

// Function to make clicking the operator capture the inputted data




// // Count the number of decimals in a number
// function countDecimals(number) {
//   if(Math.floor(number) === number) {
//     return 0;
//   } else {
//     return (number.split('.')[1] || []).length;
//   };
// };

// // Display number on screen, resize font to fit
// function display(number) {
//   let numberString = number.toString();
//   console.log(numberString);
//   console.log(numberString.length);
//   console.log(topOfScreen.textContent);
//   if (topOfScreen.textContent.length <= 7) {
//     screen.setAttribute('class', 'screen');
//     console.log('normal');
//     topOfScreen.textContent = topOfScreen.textContent + numberString;
//   } else if (numberString.length >7 && numberString.length <=9) {
//     screen.setAttribute('class', 'screenSmallText');
//     console.log('small');
//     screen.textContent = numberString;
//   } else if (numberString.length >9 && numberString.length <=13) {
//     screen.setAttribute('class', 'screenSmallerText');
//     console.log('smaller');
//     screen.textContent = numberString;
//   } else if (numberString.length >13 && numberString.length <=23) {
//     screen.setAttribute('class', 'screenSmallestText');
//     console.log('smallest');
//     screen.textContent = numberString;
//   } else {
//     screen.setAttribute('class', 'screen');
//     screen.textContent = 'error';
//   }
//   };







