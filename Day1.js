// DAY 1

// *** Activity 1 : Variable Declaration ***

//Task 1
var var_1 = 5;
console.log(var_1);   //OUTPUT => 5

//Task 2
let var_2 = "chaicode";;
console.log(var_2);   //OUTPUT =>chaicode


// *** Activity 2: Constant Declaration ***

//Task 3
const bool_var= true;
console.log(bool_var);  //OUTPUT => true

//  *** Activity 3: Data Types ***

//task 4

const num = 10;
const str = "Hitesh Sir";
const boole = false;
const obj = { 1:"first",2:"second",3:"third"};
const arr =[1,2,3,4,5];

console.log(typeof(num));      //OUTPUT => number
console.log(typeof(str));      //OUTPUT => string
console.log(typeof(boole));    //OUTPUT => boolean
console.log(typeof(obj));      //OUTPUT => object
console.log(typeof(arr));      //OUTPUT => object


// *** Activity 4 : Reassigning Variables ***

//Task 5

let value= 20;
console.log(value);   //OUTPUT : 20
value=10;
console.log(value);   //OUTPUT : 10

// *** Activity 5 : Understanding const ***

//Task 6
const var_using_const = 50;
console.log(var_using_const);   // OUTPUT : 50

var_using_const =10;
console.log(var_using_const);   // Error :TypeError
