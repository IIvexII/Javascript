const inputField = document.getElementById("inputField");
const plusBtn = document.getElementById("+");
const minusBtn = document.getElementById("-");
const multiplyBtn = document.getElementById("*");
const divideBtn = document.getElementById("/");

const resultDisplay = document.getElementById("result");
const expressionDisplay = document.getElementById("expression");

////////////////////////////////////////////////////////////////
//                      Functionality
////////////////////////////////////////////////////////////////

plusBtn.addEventListener("click", add);
minusBtn.addEventListener("click", sub);
multiplyBtn.addEventListener("click", mul);
divideBtn.addEventListener("click", div);

////////////////////////////////////////////////////////////////
//                        Main functions
////////////////////////////////////////////////////////////////
let prevNumber = 0;

function add()
{
    let exp = expressionBuilder('+', prevNumber, getCurrentValue());

    prevNumber = getCurrentValue();
    output(prevNumber, exp); 
}
function sub()
{
    let exp = expressionBuilder('-', prevNumber, getCurrentValue());

    prevNumber -= getCurrentValue();
    output(prevNumber, exp); 
}
function mul()
{
    let exp = expressionBuilder('*', prevNumber, getCurrentValue());

    prevNumber *= getCurrentValue();
    output(prevNumber, exp); 
}
function div()
{
    let exp = expressionBuilder('/', prevNumber, getCurrentValue());

    prevNumber /= getCurrentValue();
    output(prevNumber, exp); 
}
///////////////////////////////////////////////////////////////
//                     Helper functions
///////////////////////////////////////////////////////////////
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