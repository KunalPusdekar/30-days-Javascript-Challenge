// Day 11: Promises and Async/Await


// *** Activity 1: Understanding Promises ***

// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
   const promise1 = new Promise((resol,reject)=>{
      setTimeout(()=>
      {
        resol("resolved");
      },2000);
   });
   promise1.then((message)=>{
    console.log("msg :",message);
   })
   
// Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using •catch () .
   const promise2 = new Promise((resol,reject)=>{
      setTimeout(()=>
      {
      reject("The  operation timed out after 2 sec");
      },2000);
   });
   promise2.catch((error)=>{
   console.log("Error :",error);
   })
  
// *** Activity 2: Chaining Promises ***
// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
   
   const fetchData = () => {
      return new Promise((resolve)=>{
         setTimeout(()=>{
            resolve('Data is fetched from server');
         },2000);
      })
   }

   fetchData()
   .then((msg)=>{
      console.log(msg);
      return fetchData();
   })
   .then((msg)=>{
      console.log(msg);
      return fetchData();
   })
   .then((msg)=>{
      console.log(msg);
      return fetchData();
   });

// *** Activity 3: Using Async/Await ***
// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.

  const waitLog = async()=>{
   const msg=await fetchData();
   console.log(msg);
  }
  waitLog();

// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
   const handledRejectedPromise =() =>{
      return new Promise((resolve,reject)=>{
         setTimeout(()=>{
            resolve('Error: Error occured...');
         },2000);
      });
   };

   const asyncHandled= async ()=>{
      try{
         const msg= await handledRejectedPromise();
         console.log('using resolve =>',msg);
      }
      catch(e)
      {
         console.error(e);
      }
   }

   asyncHandled();
  
// *** Activity 4: Fetching Data from an API ***
// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.

   fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    }); 

// Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.
   const fetchDataByAsync = async () => {
      try {
      const response = await fetch('https://raw.githubusercontent.com/hexojs/warehouse/master/.eslintrc.json');
      const data = await response.json();
      console.log(data);
      } catch (error) {
      console.error(error);
      }
   };
   
   fetchDataByAsync(); 

// *** Activity 5: Concurrent Promises ***

// Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.

   const promiseFirst = new Promise((resolve) => {
      setTimeout(() => {
      resolve('Promise 1 resolved');
      }, 2000);
   });
   
   const promiseSecond = new Promise((resolve) => {
      setTimeout(() => {
      resolve('Promise 2 resolved');
      }, 4000);
   });
   
   Promise.all([promiseFirst, promiseSecond])
      .then((values) => {
      console.log(values);
   });

  
// Task 9: Use Promise, race() to log the value of the first promise that resolves among multiple promises.

const promiseThird = new Promise((resolve) => {
   setTimeout(() => {
     resolve('Promise 3 resolved');
   }, 2000);
 });
 
 const promiseFourth = new Promise((resolve) => {
   setTimeout(() => {
     resolve('Promise 4 resolved');
   }, 4000);
 });

   Promise.race([promiseThird, promiseFourth])
   .then((value) => {
       console.log(value);
});
