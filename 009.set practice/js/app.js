const setList = document.querySelector('ul.set');
const mapList = document.querySelector('ul.map');

////////////////////////////
//    Main Functionality
////////////////////////////
// Working with sets
const set = new Set([2,3]);
let data = '';
set.forEach((val) => data += `${val} `)
createListElement(setList, 'Pirnt with forEach method', data)

data = '';
set.add(4);
createListElement(setList, 'New Element added', 4);

for (const value of set.entries())
{
  data += `[${value}] `;
}
createListElement(setList, 'Pirnt with entries()', data);

data = '';
set.delete(2);
createListElement(setList, 'Deleted Element', 2);
for (const value of set.values())
{
  data += `${value} `
}
createListElement(setList, 'Pirnt with values()', data);

// Working with maps
const person1 = {name: 'Zafeer', age: 21};
const person2 = {name: 'Zaheer', age: 20};
const person3 = {name: 'Asad', age: 19};

// It takes 2D array
const transectionRecord = new Map([
  [person1, {purchase: 300, date: '9/3/2022'}],
  [person2, {purchase: 800, date: '10/3/2022'}],
  [person3, {purchase: 100, date: '6/3/2022'}],
]);

// accidently we changed the 1st record as objects are always reference datatypes
// problem is solved by using spread operator 
transectionRecord.set({...person1}, {purchase: 1000, date: '1/3/2022'});

// By using array destructuring
for (const [key, transection] of transectionRecord)
{
  createListElement(mapList, 'Name', key.name);
  createListElement(mapList, 'Spend', transection.purchase);
  createListElement(mapList, 'Date', transection.date);
}

// transectionRecord.forEach((value, key) => {
//   // if (key.name === 'Zafeer') { // we can search as well
//     createListElement(mapList, 'Name', key.name);
//     createListElement(mapList, 'Spend', value.purchase);
//     createListElement(mapList, 'Date', value.date);
//   // }
// });
////////////////////////////
// Functions
////////////////////////////
function createListElement(element,...text)
{
  // Create a list elemnt in our list
  const li = document.createElement('li');
  li.className = 'element';
  const [key, value] = text;
  const data = key + ': ' + ((value)? value: 'false');


  li.textContent = data;
  element.append(li);
}