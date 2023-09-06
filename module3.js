//Q1
/*
Provided following array:
[
{“id”: 1, “name”: “Amit Kumar”, “age”: 25},
{“id”: 2, “name”: “Rahul Dixit”, “age”: 20},
{“id”: 3, “name”: “Ravi Joshi”, “age”: 55},
{“id”: 4, “name”: “Rohit Verma”, “age”: 35},
{“id”: 5, “name”: “Ajay Jain”, “age”: 17},
]

  a. Print id and name of the youngest and oldest person
  b. Create another list having id and name of all the person above 18 years
  c. Find the average age
  d. Create 2 list with names starting with only ‘A’ and ‘R’ respectively
*/
const people = [
    { id: 1, name: "Amit Kumar", age: 25 },
    { id: 2, name: "Rahul Dixit", age: 20 },
    { id: 3, name: "Ravi Joshi", age: 55 },
    { id: 4, name: "Rohit Verma", age: 35 },
    { id: 5, name: "Ajay Jain", age: 17 }
  ];
  
  // a. Print id and name of the youngest and oldest person
  const sortedPeople = [...people].sort((a, b) => a.age - b.age);
  const youngestPerson = sortedPeople[0];
  const oldestPerson = sortedPeople[sortedPeople.length - 1];
  console.log("Youngest Person:", youngestPerson.id, youngestPerson.name);
  console.log("Oldest Person:", oldestPerson.id, oldestPerson.name);
  
  // b. Create another array having id and name of all the person above 18 years
  const above18 = people.filter(person => person.age > 18);
  const above18Names = above18.map(person => ({ id: person.id, name: person.name }));
  console.log("People above 18:", above18Names);
  
  // c. Find the average age
  const totalAge = people.reduce((sum, person) => sum + person.age, 0);
  const averageAge = totalAge / people.length;
  console.log("Average Age:", averageAge);
  
  // d. Create 2 arrays with names starting with only 'A' and 'R' respectively
  const namesStartingWithA = people.filter(person => person.name.startsWith("A")).map(person => person.name);
  const namesStartingWithR = people.filter(person => person.name.startsWith("R")).map(person => person.name);
  console.log("Names starting with 'A':", namesStartingWithA);
  console.log("Names starting with 'R':", namesStartingWithR);
  
  //Q2
  /*Try the below code and identify which of the below programs are a valid case of hoisting?

Program 1:
a = 10;
console.log(a);
var a;

Program 2:
a = 5;
console.log(a);
let a;

Program 1 is valid.
*/