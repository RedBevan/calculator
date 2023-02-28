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

// Count the number of decimals in a number
function countDecimals(number) {
  if(Math.floor(number) === number) {
    return 0;
  } else {
    return (number.split('.')[1] || []).length;
  };
};

// Display number on screen
function display(number) {
  let numberString = number.toString();
  console.log(numberString);
  console.log(numberString.length);
  if (numberString.length <= 7) {
    screen.setAttribute('class', 'screen');
    console.log('normal');
    screen.textContent = numberString;
  } else if (numberString.length >7 && numberString.length <=9) {
    screen.setAttribute('class', 'screenSmallText');
    console.log('small');
    screen.textContent = numberString;
  } else if (numberString.length >9 && numberString.length <=13) {
    screen.setAttribute('class', 'screenSmallerText');
    console.log('smaller');
    screen.textContent = numberString;
  } else if (numberString.length >13 && numberString.length <=23) {
    screen.setAttribute('class', 'screenSmallestText');
    console.log('smallest');
    screen.textContent = numberString;
  } else {
    screen.setAttribute('class', 'screen');
    screen.textContent = 'error';
  }
  };
  
  
//   switch (numberString.length) {
//     case (1 || 2 || 3 || 4 || 5 || 6 || 7):
//       screen.setAttribute('class', 'screen');
//       console.log('normal');
//       screen.textContent = numberString;
//       break;
//     case (8 || 9):
//       screen.setAttribute('class', 'screenSmallText');
//       console.log('small');
//       screen.textContent = numberString;
//       break;
//     default:
//       screen.textContent = 'error';
//   };
// };

display('655555555555555555555555');

// 0-7 digits: 84px
// 8-9 digits: 68px
// 10 -13 digits: 48px;
// 14 - 23 digits: 28px;

