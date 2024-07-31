//  ***  Activity 1: Creating and Exporting Modules  ***
// Task 1: Create a module that exports a function to add two numbers.
//         Import and use this module in another script.
const add =require('./add');

let n1=3;
let n2=5;
const result = add(n1,n2);

console.log(`addition of ${n1} and ${n2} is ${result}`);



// Task 2: Create a module that exports an object representing a person with properties and methods.
// Import and use this module in another script.

const person = require('./person');

console.log('Name : ',person.name );
console.log('Age : ',person.age);

person.getName();
person.getAge();



