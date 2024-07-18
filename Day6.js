// ARRAYS

//Day 6:

// *** Activity 1 : Array Creation and Access

// Task 1: Create an array of numbers from 1 to 5 and log the array to the console.

let arr=[1,2,3,4,5];
console.log(arr);

// Task 2: Access the first and last elements of the array and log them to the console.
let first_element=arr[0];
let last_element = arr[arr.length-1];
console.log(`first element : ${first_element},last element : ${last_element}`);

// *** Activity 2: Array Methods (Basic) ***
// Task 3: Use the push method to add a new number to the end of the array and log the updated array.

  arr.push(6);
  console.log(arr);
  arr.push(7);
  console.log(arr);

// Task 4: Use the pop method to remove the last element from the array and log the updated array.
   arr.pop();
   console.log(arr);

// Task 5: Use the shift method to remove the first element from the array and log the updated array.
   arr.shift();
   console.log(arr);

// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
   arr.unshift(1,2);
   console.log(arr);

// *** Activity 3: Array Methods (Intermediate) ***

// Task 7: Use the map method to create a new array where each number is doubled and log the new array.

let double_arr= arr.map(function (number,index)
{
    return  number *2;
});
console.log(double_arr);

// Task 8: Use the filter method to create a new array with only even numbers and log the new array.

let arr_of_num =[1,2,3,4,5,6];
let new_arr= arr_of_num.filter(function (num){
    if(num %2 ==0)
    return num;
});
//OR
// let new_arr-arr_of_num.filter(number =>number%2==0);
console.log(new_arr);

// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result. 


let sumation = arr_of_num.reduce(function(sum,number){
    return sum += number;
},0);
console.log(sumation);

// **** Activity 4: Array Iteration ***

//Task 10: Use a for loop to iterate over the array and log each element to the console.

for(let i=0 ; i< arr_of_num.length ; i++)
{
   console.log(arr_of_num[i]);
}

//Task 11: Use the forEach method to iterate over the array and log each element to the console.

arr_of_num.forEach(function (number){
    console.log(number);
})

// Activity 5: Multi-dimensional Arrays

//Task 12: Create a two-dimensional array(matrix) and log the entire array to the console.

let matrix =[[1,2,3],[4,5,6],[7,8,9]];
console.log(matrix);

for(let i=0 ; i< matrix.length;i++)
{
    for(let j=0 ; j<matrix[0].length ; j++)
    {
        console.log(matrix[i][j]);
    }
}

//Task 13: Access and log a specific element from the two-dimentional array.

let new_matrix=[
    [11,12,13],
    [14,15,16],
    [17,18,19]
]

let specific_ele=new_matrix[1][1];
console.log(specific_ele);   //OUTPUT :15
