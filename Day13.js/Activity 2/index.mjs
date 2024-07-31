// Task 4: Create a module that export a single  functions using named exports. 
// Imports and use these functions in another script.

import { add, subtract, multiply, divide } from './mathTask4.mjs';

const n1 = 10;
const n2 = 5;

console.log(`The sum of ${n1} and ${n2} is ${add(n1, n2)}`);
console.log(`The difference between ${n1} and ${n2} is ${subtract(n1, n2)}`);
console.log(`The product of ${n1} and ${n2} is ${multiply(n1, n2)}`);
console.log(`The quotient of ${n1} and ${n2} is ${divide(n1, n2)}`);