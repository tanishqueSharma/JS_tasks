//Q1
/*
Find the difference between Object and Map.
a.The construction is of course different:
const gamesObj = {
  1: 'Citadels',
  2: 'Tzolkin'  
};
const gamesMap = new Map([
  [1, 'Citadels'],
  [2, 'Tzolkin']
]);

b.Keys on objects are strings, on maps keys are of any type

c.Accessing Element:
Map uses its inbuilt get() method for accessing its elements.
map.get(1);
Object simply uses the ‘key’ name with a dot operator to access its elements.
obj.id;
obj[id];
*/

//Q2
/* Identify the difference between regular functions and arrow functions
a.Syntax:
REGULAR FUNCTION
let x = function function_name(parameters){
   // body of the function
};

ARROW FUNCTION
let x = (parameters) => {
    // body of the function
};

B.Arrow functions cannot be accessed before initialization.
*/

//Q3
/* Provided the following  array:
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
   Filter out odd, even, and prime numbers and print them
      */

   const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  //  Filter out even numbers
   const evens = numbers.filter(number => number % 2 === 0);
    console.log("Even numbers:", evens);
   
   // Filter out odd numbers
    const odds = numbers.filter(number => number % 2 !== 0);
    console.log("Odd numbers:", odds);
    

   //Q4
   /* Provided the following  array:
    [0, 2, 4, 6, 8, 10, 12, 14, 16]
Generate and print another list such that: 
 a. every element being twice of elements in the current list.
 b. every element being half of the elements in the current list.
 */

 let arr = [0, 2, 4, 6, 8, 10, 12, 14, 16];

const doubledNumbers = arr.map(function(num) {
  return num * 2;
});
const halvedNumbers = arr.map(function(number){
  return (number/2);
});
console.log(doubledNumbers);
console.log(halvedNumbers);


//Q5
/*
Provided the following  array:
    [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10]
  a. Find the sum, min, and max
  b. Print “List is full of prime no” if every element is prime
  c. Print “List has a prime no” if there is a prime no in it
  d. Remove duplicate values from the list.
  e. Remove duplicate values from the list without using loop or any of the above methods (map(), filter(), reduce(), some() and every())
*/
  let array = [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10];
  var sum = array.reduce((accumulator, currentValue) => {
      return accumulator + currentValue
      },0);
const min = Math.min(...array);
const max = Math.max(...array);

console.log(`Sum: ${sum}`);
console.log(`Min: ${min}`);
console.log(`Max: ${max}`);

const isPrime = (num) => {
  if (num <= 1) return false;
  if (num <= 3) return true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

if (array.every(isPrime)) {
  console.log("List is full of prime numbers.");
}


if (array.some(isPrime)) {
  console.log("List has a prime number.");
}

//removing duplicate
function removeDuplicates(arr) {
  const uniqueArray = [];
  
  for (let el of array) {
    if (uniqueArray.indexOf(el) === -1){
      uniqueArray.push(el);
    }
  }
  return uniqueArray;
}

const uniqueNumbers = removeDuplicates(array);
console.log("Unique Numbers:", uniqueNumbers);



//Q6
/* Provided an array of integers, find if there are any duplicates in the array.

Output:
true -  if any value appears at least twice in the array,
false - if every element is distinct.

Example:
Array ->  [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10]
Output -> true

Array ->  [10, 1, 42, 36, 4, 75, 6, 97, 81, 19]
Output -> false
 let arr1=[10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10];
 let arr2 = [10, 1, 42, 36, 4, 75, 6, 97, 81, 19];
 */

 function hasDuplicates(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return true; 
      }
    }
  }
  return false;
}


const array1 = [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10];
const result1 = hasDuplicates(array1);
console.log(result1); 

const array2 = [10, 1, 42, 36, 4, 75, 6, 97, 81, 19];
const result2 = hasDuplicates(array2);
console.log(result2);
