const arrayList = document.querySelector('ul.array');

////////////////////////////
//    Main Functionality
////////////////////////////

// Working with string
const names = ['Zafeer', 'Zaheer', 'Ehtisham', 'Asad', 'Sumama']; 
names.forEach((name) => createListElement('Printing Array',name));

//Finding values
let findValue = 'Zafeer';

// In find method: function must return a boolean value (true or false)
const n = names.find(name => name === findValue);
createListElement('Found Name', n);

// it finds as well but return boolean value only
let nameExist = names.includes(findValue);
createListElement(findValue + " Exists?", nameExist);

// Working with numbers
const prices = [3, 2, 100, 5];
createListElement('All Prices ', prices);

// map method
const TAX = 0.10; // 10%
const newPrices = prices.map((value) => value + (value * TAX));
createListElement('New Prices After Tax', newPrices);

// sum of prices with reduce method
const sum = newPrices.reduce((pVal, cVal) => pVal+cVal, 0);
createListElement('SUM', sum);

// sorted prices (it sorts in strings by default by comparing first chacter)
// we can change this behaviour by call back function
prices.sort((x, y) => {
  if (x > y)
    return 1;
  else if ( x === y)
    return 0;
  else
    return -1;
});
createListElement('Sorted Prices', prices);

const filtered = prices.filter(value => value > 2);
createListElement('Filtered Prices', filtered);

let date = '09;03;2022';
// data = data.split(';');
// data = data.join(' ');

date = date.split(';').join('-');

createListElement('Splitted Text', date);

////////////////////////////
// Functions
////////////////////////////
function createListElement(...text)
{
  // Create a list elemnt in our list
  const li = document.createElement('li');
  li.className = 'element';
  const [key, value] = text;
  const data = key + ': ' + ((value)? value: 'false');


  li.textContent = data;
  arrayList.append(li);
}