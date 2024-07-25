//Error Handling

//Day12

// *** Activity 1: Basic Error Handling with Try-Catch ***
//Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.

  function error(){
  try{
       throw new Error();

  }
  catch(e){
      console.error(e);
  }
};

error();

//Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.

function divide(a,b){
    try{
        if(b==0)
          throw new Error('cannot divide any number by 0');

        return a/b;
    }
    catch(e){
      console.error('error occured in division ',e);
    }
}

console.log(divide(5,0));

// *** Activity 2: Finally Block ***
// Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.

function temp() {
    try {
      console.log(`Inside the try block`);
      throw new Error(`throwing error in try block`);
    } catch (error) {
      console.error(`Error catched!! inside catch block,Error message:`,error.message);
    } finally {
      console.log(`Inside the finally block it run either error occured or not`);
    }
  }
  temp();

// *** Activity 3: Custom Error Objects ***
// Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.

class CustomError extends Error {
    constructor(message) {
      //initialise Error constructor
      super(message);
      this.name = "CustomErrr";
    }
  }
  function letsThrowCustomError() {
    throw new CustomError(`CustomERRor from  function`);
  }
  
  //try catch
  try {
    letsThrowCustomError();
  } catch (error) {
    if (error instanceof CustomError) {
      console.error(`Here is an custom error: ${error.message}`);
    }
  }

// Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.

function validateUserInput(input) {
    try {
      if(input.length == 0){
          throw new CustomError(" Input is Empty ")
      }
      console.log(`Input validated successfully`)
  
    } catch (error) {
      console.log(`Error occured while validating input,Error:${error.message}`)
    }
  }
  validateUserInput("");

// *** Activity 4: Error Handling in Promises ***
//Task 6: Create a promise that randomly resolves or rejects. Use ,catch() to handle the rejection and log an appropriate message to the console.

  const promises=new Promise((resolve,reject)=>{
    //    setTimeout(()=>{
    //     resolve('Promise resolved');
    //    },2000);
       setTimeout(()=>{
        reject("Promise rejected");
       },2000);
  })

    //   promises.then((msg)=>{
    //     console.log(msg);
    //   })
  promises.catch((e)=>{
    console.log("Error handled by catch :",e);
  })

//Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.
  async function async_fun(){
    try{
    const msg = await new Promise((resolve,reject)=>
    {
        if(Math.random()>0.5){
            resolve('Promise resolved');
        }
        else{
            reject('Promise rejected');
        }
    })
    console.log("response :",response);
    }
    catch(e){
        console.error("error resolveing :",e);
    }
    
  }
  async_fun();

// *** Activity 5: Graceful Error Handling in Fetch ***
// Task 8: Use the fetch API to request data from an invalid URL and handle the error using •catch() . Log an appropriate error message to the console.
fetch("https://jsonplaceholder.com/users")
.then((response) => {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error(`Inappropriate Response`);
  }
})
.then((response) => {
  console.log(response[0].name);
})
.catch((message) => {
  console.error(`Error fetching data from given url : ${message}`);
});
// Task 9: Use the fetch APl to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error

async function FetchDAta() {
    try {
      let response = await fetch(`https://jsonplaceholder.typicode.com/users`);
      let data = await response.json();
      console.log(data[0]);
    } catch (err) {
      console.error(`Error fetching data from given url : ${err}`);
    }
  }
  FetchDAta();
