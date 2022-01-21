let buttonBoard = document.querySelectorAll('.standard-button');
let calculatorDisplay = document.querySelector('#display');

let calculator = new Calculator(calculatorDisplay,buttonBoard,0);

calculator.initializeBoard();



