//ES6+ Features

//Day 8

// *** Activity 1:Template Literals ***
// Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.

 let name ="Rohit";
 let age=16;
 let str=`Name is ${name} and the age is ${age}.`;
 console.log(str);

// Task 2: Create a multi-line string using template literals and log it to the console.
const Name="Kunal";
const multiLineStr =
`
This is a multi-line string.
You can write text over multiple lines
without using concatenation.
Template literals make it easy!

You can also include variables:
Hello ${Name}
`;
console.log(multiLineStr);

// *** Activity 2: Destructuring ***

//Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

const numbers =[10,20,30,40,50];
const [first,second]=numbers;

console.log(`First number : ${first}`);
console.log(`Second number : ${second}`);

//Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.

const book ={
    title:"To Kill a Mockingbird",
    author:"Harper Lee",
    year:1960
}

const {title,author}=book;
console.log(`Title of the book : ${title}`);
console.log(`Author of the book : ${author}`);

// *** Activity 3: Spread and Rest Operators ***

//Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

const new_array=[1,2,3,4,5];
const six=6;
const seven=7;
const spread=[...new_array,six,seven];
console.log(spread);

//Task 6: Use the rest operator in a function to accept an arbitrary number of arguments. sum them, and return the result.

function rest(new_n,...arr)
{
   let sum=new_n;
   for(let n of arr)
   {
    sum += n;
   }
   return sum;
}

const new_n=20;
console.log(rest(new_n,...[1,2,3,4,5]));  //OUTPUT : 35

// *** Activity 4: Default Parameters ***
//Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.

function product(a,b=1)
{
    return a*b;
}

console.log(product(5,3));  //OUTPUT : 15
console.log(product(5));    //OUTPUT : 5

// *** Activity 5: Enhanced Object Literals ***

//Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
let year=2020;
const books =
{
  name:"Book",
  Author:"abc",
  year:2021,
  getDetails()
  {
    return ( `${this.name} is written by ${this.author} in ${this.year}`);
  },

  //Computed property names
  ["published " + year]:true  

}
console.log(books);
console.log(books.getDetails());


//Task 9: Create an object with computed property names based on variables and log the object to the console.

const propName1 = "firstName";
const propName2 = "lastName";
const propName3 = "age";

const firstName = "John";
const lastName = "Doe";
const Age = 30;

const person = {
  [propName1]: firstName,
  [propName2]: lastName,
  [propName3]: Age
};

console.log(person);
