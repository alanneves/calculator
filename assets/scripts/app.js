const defaultResult = 0;
let currentResult = defaultResult;
let logEntries;

function getUserNumberInput() {
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function calculate(calculationType) {
    const enteredNumber = parseInt(userInput.value);
    const initialResult = currentResult;
    let mathOperator;

    if (calculationType == 'ADD') {
        currentResult += enteredNumber;
        mathOperator = '+';
    } else if (calculationType == 'SUBTRACT') {
        currentResult -= enteredNumber;
        mathOperator = '-';
    } else if (calculationType == 'DIVIDE') {
        currentResult /= enteredNumber;
        mathOperator = '/';
    } else if (calculationType == 'MULTIPLY') {
        currentResult *= enteredNumber;
        mathOperator = '*';
    }
    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
}

function add() {
    calculate('ADD');
}

function subtract() {
    calculate('SUBTRACT');
}

function multiply() {
    calculate('MULTIPLY');
}

function divide() {
    calculate('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);