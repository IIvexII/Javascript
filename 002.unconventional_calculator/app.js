////////////////////////////////////////////////////////////////
//                     Global Constents
////////////////////////////////////////////////////////////////
const ADD = 'ADD';
const SUB = 'SUB';
const MULTIPLY = 'MULTIPLY';
const DIVIDE = 'DIVIDE';

////////////////////////////////////////////////////////////////
//            Define some constents to the html tags
////////////////////////////////////////////////////////////////
const inputField = document.getElementById("inputField");

const plusBtn = document.getElementById("+");
const minusBtn = document.getElementById("-");
const multiplyBtn = document.getElementById("*");
const divideBtn = document.getElementById("/");

const resultDisplay = document.getElementById("result");
const expressionDisplay = document.getElementById("expression");

////////////////////////////////////////////////////////////////
//                    Main Functionality
////////////////////////////////////////////////////////////////

plusBtn.addEventListener("click", calculator.bind(this, ADD));
minusBtn.addEventListener("click", calculator.bind(this, SUB));
multiplyBtn.addEventListener("click", calculator.bind(this, MULTIPLY));
divideBtn.addEventListener("click", calculator.bind(this, DIVIDE));

////////////////////////////////////////////////////////////////
//                        functions
////////////////////////////////////////////////////////////////
let prevNumber = 0;
let logEntries = [];

function calculator(operation)
{
    let inputValue = getCurrentValue();
    let initialValue = prevNumber;  // for saving the current value of prevNumber variable
    let operator;

    if (operation === ADD)
    {        
        prevNumber += inputValue;
        operator = '+';
    }
    else if (operation === SUB)
    {
        prevNumber -= inputValue;   
        operator = '-';
    }
    else if (operation === MULTIPLY)
    {
        prevNumber *= inputValue;
        operator = '*';
    }
    else if (operation === DIVIDE)
    {
        prevNumber /= inputValue;
        operator = '/';
    }
    // Logging the calculations
    let exp = expressionBuilder(operator, initialValue, prevNumber); 
    logEntry(operator, initialValue, inputValue, prevNumber);
    output(prevNumber, exp);
}
///////////////////////////////////////////////////////////////
//                     Helper functions
///////////////////////////////////////////////////////////////
function logEntry(operation, value1, value2, result) 
{
    let log = {
        operation: operation,
        number1: value1,
        number2: value2,
        result: result
    };
    logEntries.push(log);

    // display as well
    console.log(logEntries);
}
function expressionBuilder(operator, value1, value2)
{
    return value1 + operator + value2;
}
function getCurrentValue()
{
    return parseInt(inputField.value);
}

function output(result, expression)
{
    resultDisplay.textContent = result;
    expressionDisplay.textContent = expression + " =";
    clearInputField();
}
function clearInputField()
{
    inputField.value = '';
}