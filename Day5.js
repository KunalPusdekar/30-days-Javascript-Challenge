//Functions

//Day 5

//  *** Activity 1: Function Declaration ***

// Task 1:
function evenOdd(n)
{
    if(n% 2 ==0)
    console.log("number is even");
    else
    console.log("number is odd");
}
evenOdd(5);

// Task 2:
function square(x){return x*x};
console.log(square(5));

// *** Activity 2 : Function Expression ***

//Task 3:
const maxi=function (a,b)
{
    if(a>b)
    {
        console.log("a is greater than b");
    }
    else if(a==b)
    {
        console.log("a is equal to b");
    }
    else
    {
        console.log("b is greater than a");
    }

}
maxi(5,6);

//Task 4
const concat = function(a ,b)
{
    return (a+b);
}
console.log(concat("web","dev"));

//  *** Activity 3 : Arrow Functions ***

//Task 5
const sum=(a,b)=>a+b;
console.log(sum(5,10));

//Task 6

const specialChar= (str,character)=>
{
    if(str.includes(character))
    return ("String contain special character");
    else
    return ("String not contain special character");
}
console.log(specialChar("webdevelopment","e"));

// *** Activity 4 : Function Parameters and Default Values ***

//Task 7:
function product(a=4,b=5)
{
    return (a*b);
}
console.log(product(10,10));
console.log(product(3));

//Task 8:
function msg(name,age=18)
{
    return (`My name is ${name} and my age is ${age}.`);
}
console.log(msg("kunal",20));
console.log(msg("rohan"));

//  *** Activity 5 : Higher-Order Functions ***

//Task 9:
function normalFun()
{
    console.log("inside the normal function");
}
function higherOrderFun(normalFun,number)
{
    console.log("Inside the higher order function");
    console.log(`Number is ${number}`);
    let n=5
    while(n--)
    {
        normalFun();
    }
}
higherOrderFun(normalFun,10);

//Task 10

const firstFun =(x) => x+2;
const secondFun =(x) =>  x * x;
function higherOrderFunction(first,second,value)
{
     let val=first(value);
     return second(val);
}

console.log(higherOrderFunction(firstFun,secondFun,8));
