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

plusBtn.addEventListener("click", add);
minusBtn.addEventListener("click", sub);
multiplyBtn.addEventListener("click", mul);
divideBtn.addEventListener("click", div);

////////////////////////////////////////////////////////////////
//                        functions
////////////////////////////////////////////////////////////////
let prevNumber = 0;
let logEntries = [];

function add()
{
    let inputValue = getCurrentValue();
    let exp = expressionBuilder('+', prevNumber, inputValue); 
    let initialValue = prevNumber;  // for saving the current value of prevNumber variable

    prevNumber += inputValue;

    // Logging the calculations
    logEntry('+', initialValue, inputValue, prevNumber);
    output(prevNumber, exp);
}
function sub()
{
    let inputValue = getCurrentValue();
    let exp = expressionBuilder('-', prevNumber, inputValue); 
    let initialValue = prevNumber;  // for saving the current value of prevNumber variable

    prevNumber -= inputValue;

    // Logging the calculations
    logEntry('-', initialValue, inputValue, prevNumber);
    output(prevNumber, exp);
}
function mul()
{
    let inputValue = getCurrentValue();
    let exp = expressionBuilder('*', prevNumber, inputValue); 
    let initialValue = prevNumber;  // for saving the current value of prevNumber variable

    prevNumber *= inputValue;

    // Logging the calculations
    logEntry('*', initialValue, inputValue, prevNumber);
    output(prevNumber, exp);
}
function div()
{
    let inputValue = getCurrentValue();
    let exp = expressionBuilder('/', prevNumber, inputValue); 
    let initialValue = prevNumber;  // for saving the current value of prevNumber variable

    prevNumber /= inputValue;

    // Logging the calculations
    logEntry('/', initialValue, inputValue, prevNumber);
    output(prevNumber.toFixed(2), exp);
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