// Task 6: Install module (e.g., loadsh) using npm. 
// Import and use  a function from this module in a script 

import _ from 'lodash'
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const chunkSize = 3;
const chunks = _.chunk(array, chunkSize);

console.log(`Array split into chunks of size ${chunkSize}:`, chunks);



//Task 7: Install module (e.g., axios) using npm.
//Import and use  this module to make a request in a  script 

import axios from 'axios'

// Make a GET request to a public API
axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    console.log('Response Data:', response.data);
  })
  .catch(error => {
    console.error('Error making the request:', error);
  });
