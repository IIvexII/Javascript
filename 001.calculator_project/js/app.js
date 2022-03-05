function display(num)
{
    currentDisplay.textContent = currentDisplay.textContent + num;
}

function equal()
{ 
    let expression = currentDisplay.textContent;
    let result = eval(expression).toFixed(2);
    output(result, expression);
}

b_add.addEventListener('click', d_add);
b_subtract.addEventListener('click', d_sub);
b_multiply.addEventListener('click', d_mul);
b_divide.addEventListener('click', d_div);
b_equal.addEventListener('click', equal);

// Number Buttons
b_zero.addEventListener('click', d_0);
b_one.addEventListener('click', d_1);
b_two.addEventListener('click', d_2);
b_three.addEventListener('click', d_3);
b_four.addEventListener('click', d_4);
b_five.addEventListener('click', d_5);
b_six.addEventListener('click', d_6);
b_seven.addEventListener('click', d_7);
b_eight.addEventListener('click', d_8);
b_nine.addEventListener('click', d_9);

b_reset.addEventListener('click', clear);

// Defining function for indirect function calling.
function d_0(){ display(0); }
function d_1(){ display(1); }
function d_2(){ display(2); }
function d_3(){ display(3); }
function d_4(){ display(4); }
function d_5(){ display(5); }
function d_6(){ display(6); }
function d_7(){ display(7); }
function d_8(){ display(8); }
function d_9(){ display(9); }

function d_add(){ display('+'); }
function d_sub(){ display('-'); }
function d_div(){ display('/'); }
function d_mul(){ display('*'); }