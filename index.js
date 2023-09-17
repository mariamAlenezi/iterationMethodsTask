//You are given an array of numbers. Your task is to use iteration
// methods to filter and transform this array.

const numbers = [10, 13, 20, 25, 38, 35, 40];

/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
Q1) Create a new array containing numbers that are greater than or equal to 25.
Q2) Create a new array containing numbers that are divisible by 5.
******************************************************************/
function checkGreater(x) {
  return x >= 25;
}
const greaterThan = numbers.filter(checkGreater);
console.log(greaterThan);

console.log("**** End Q1 ");

function Div5(x) {
  if (x % 5 === 0) return x;
}

const divisible5 = numbers.filter(Div5);
console.log(divisible5);

console.log("**** End Q2 ");
/*****************************************************************
Part 2: Mapping

Write code to perform the following tasks using the map method:

Q3) Create a new array that contains each number squared.
Q4) Create a new array that contains each number multiplied by 2.
******************************************************************/
function square(x) {
  return x * x;
}
const squared2 = numbers.map(square);
console.log(squared2);

console.log("**** End Q3 ");

function multiply2(x) {
  return x * 2;
}

const multiplied2 = numbers.map(multiply2);
console.log(multiplied2);
console.log("**** End Q4 ");
/*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

Q5) Filter the numbers that are greater than or equal to 20 and then square each of them.
Q6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/

function checktwenty(x) {
  return x >= 20;
}

const newCheck = numbers.filter(checktwenty).map(square);
console.log(newCheck);

console.log("**** End Q5 ");

function multiplythree(x) {
  return x * 3;
}

const newMultiplay = numbers.filter(Div5).map(multiplythree);
console.log(newMultiplay);
