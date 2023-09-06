//Q1
/*
Find out about the most popular JavaScript frameworks.
A framework is a structure that you can build software on. 
It serves as a foundation, so you’re not starting entirely from scratch. 
Top 5 JS frameworks are:
1.Angular
2.React
3.Vue.js
4.Node.js
5.Polymer
*/

//Q3 
/*
Provided the following  array:
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Filter out odd, even, and prime numbers and print them
*/
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNum=[];
const oddNum=[];
const primeNum=[];
for (let a of arr){
    if(a%2==0){
        evenNum.push(a);
    }
    else{
        oddNum.push(a);
    }
}
console.log(evenNum);
console.log(oddNum);


//Q4
/*
Provided the following  array:
    [0, 2, 4, 6, 8, 10, 12, 14, 16]
Generate and print another list such that: 
 a. every element being twice of elements in the current list.
 b. every element being half of the elements in the current list
*/
let originalArray =     [0, 2, 4, 6, 8, 10, 12, 14, 16];
const doubledArray = [];
const halvedArray = [];

for (const number of originalArray) {
  doubledArray.push(number * 2);
  halvedArray.push(number / 2);
}

console.log("Original Array:", originalArray);
console.log("Doubled Array:", doubledArray);
console.log("Halved Array:", halvedArray);


//Q5
/*
Provided the following  array:
  [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10]
  a. Find the sum, min, and max
  b. Print “List is full of prime no” if every element is prime
  c. Print “List has a prime no” if there is a prime no in it
  d. Remove duplicate values from the list ()
*/

let numbers = [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10]
let sum=0;
let min=numbers[0];
let max=numbers[0];
for (const number of numbers) {
  sum += number;
  if (number < min) {
    min = number;
  }
  if (number > max) {
    max = number;
  }
}
console.log(sum);
console.log(min);
console.log(max);

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

const uniqueNumbers = removeDuplicates(numbers);

console.log("Unique Numbers:", uniqueNumbers);