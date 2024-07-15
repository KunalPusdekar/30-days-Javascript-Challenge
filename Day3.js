//CONTROL STRUCTURES

//Day 3

//  *** Activity 1: If-Else Statements ***

//Task 1:
let num = 5;
if(num == 0){
   console.log("number is zero");
}
else if(num > 0){
    console.log("number is positive");
}
else
{
    console.log("number is negative");
}

//Task 2 :
//check if person is eligible to vote (age >=18)
let age = 19;
if(age >= 18){
    console.log("Person is eligible for vote");
}
else{
    console.log("Person is not eligible for vote");
}

//  *** Activity 2: Nested If-Else Statements ***

//Task 3:
let a = 10;
let b = 20;
let c = 30;
if(a > b && a > c)
    console.log("a is largest of three numbers");
else if(b > a && b > c)
    console.log("b is largest of three numbers");
else
    console.log("c is largest of three numbers");

//  *** Activity 3 : Switch Case ***

// Task 4 :
let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;
    case 3:  
         console.log("Wednesday");
         break;    
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
        break;
}

//Task 5 :
let score = 40;

switch(true){
    case (score >= 90 && score <= 100):
        console.log("grade = A");
        break;
    case (score >= 80 && score < 90):
        console.log("grade = B");
        break;
    case (score >= 70 && score < 80):
        console.log("grade = C");
        break;
    case (score >= 60 && score < 70):
        console.log("grade = D");
        break;
    case (score >= 0 && score < 60):
        console.log("grade = F");
        break;
    default:
        console.log("Invalid score");
        break;
}

//  *** Activity 4 : Conditional (ternary) Operator ***

//Task 6:
let number = 40;
console.log((number % 2 == 0) ? "number is even" : "number is odd");

// *** Activity 5 : Combining Conditions

//Task 7:

let year = 2000;

if( (year % 4 ==0) && (year % 100 != 0) || (year % 400 == 0))
console.log(year +" is a leap year");
else
console.log(year +" is not a leap year");
