const currentDisplay = document.getElementById("style-3");
const previousDisplay = document.getElementById("previous");

// Operators buttons
const b_divide = document.getElementById("/");
const b_multiply = document.getElementById("*");
const b_add = document.getElementById("+");
const b_subtract = document.getElementById("-");

const b_equal = document.getElementById("equals");

// Numbers Buttons
const b_zero = document.getElementById("0");
const b_one = document.getElementById("1");
const b_two = document.getElementById("2");
const b_three = document.getElementById("3");
const b_four = document.getElementById("4");
const b_five = document.getElementById("5");
const b_six = document.getElementById("6");
const b_seven = document.getElementById("7");
const b_eight = document.getElementById("8");
const b_nine = document.getElementById("9");

const b_reset = document.getElementById("reset");


function output(result, text)
{
    currentDisplay.textContent = result;
    previousDisplay.textContent = text;
}
function clear()
{
    currentDisplay.textContent = "";
    previousDisplay.textContent = "";
}