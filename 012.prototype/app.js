// With Classs
class Person {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(
      `Hi, I am ${this.name} and I am ${this.age} years old.`
    );
  }
}

// With constructor function
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.greet = () => {
//     console.log(
//       `Hi, I am ${this.name} and I am ${this.age} years old.`
//     );
//   }     
// }
const p = new Person('Zafeer', 21);
p.greet();