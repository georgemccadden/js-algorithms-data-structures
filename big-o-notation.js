// Big-O notation is a system for classifying and comparing code by measuring the efficiency of a program based on time and speed.

// It's important to have a precise vocabulary when talking about code performance. When discussing with others about the trade-offs between different approaches to solving problems with code, Big-O proves most useful (debugging, i.e.) 

// For example : I'll write a function that calculates the sum of all numbers from 1 up to and including n.

function addUpTo(n) {
  let total = 0;

  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}

// or..

function keepAddingUpTo(n) {
  return n * (n + 1) / 2;
}

// The question that is posed now is which function is "better" or more efficient? (faster, less memory-intensive, readability, i.e.)

// If I want to be concerned with speed, some people track it using a timer :

// This method tells me the number of milliseconds since the window was opened, the function is run, and then the timer checks the milliseconds again and to give me two different numbers to be subtracted and divide it so that it gives me seconds rather than milliseconds.

let timer1 = performance.now();
addUpTo(1000000000);
let timer2 = performance.now();

console.log(`The amount of time elapsed : ${(timer2 - timer1) / 1000} seconds.`)

// The problem with time is it is not always reliable. Different machines will record different data, even the same machine will record different times. Tracking time won't always be precise enough the faster the algorithm is, and we always want a fast and efficient one.

// Big-O helps us talk about and compare code "generally" by counting the number of simple operations that the computer has to perform.

function countUpAndDown(n) {
  console.log("Time to go up!");

  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

// The above function countUpAndDown() has a Big-O of O(n).

function printPossiblePairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

// The above function printPossiblePairs() has a Big-0 of O(n^2) because of the nested loop.

// Big-O "Need to Know(s)"
// Arithmetic operations, variable assignments, or accessing elements in an array (by index) or object(by key) is always constant.
// In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop.

// ** SPACE COMPLEXITY **

// I keep hearing the term "auxiliary space complexity" rather than just space complexity. This term referes to space required by an algorithm (not including space taken up by the inputs).

// Most primitives (booleans, numbers, undefined, null) are constant space.
// Strings require O(n) space because n is the string's length.
// Reference types are usually O(n) because n is the length for arrays or the number of keys for an object.

function addingTheStrings(arr) {
  let totalStrings = 0;
  
  for (let i = 0; i < arr.length) {
    total += totalStrings;
  }
  return totalStrings;
}

// This above example is O(1) constant space. We have one variable (totalStrings) and although we're adding to it over time, the space has already been accounted for.

function doubleTheTotal(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
}

// This function above is O(n) space. Although line 82 does mean that everytime this function is used a new array is being made, it is neglegable in comparison to the amount of space is taken up by line 85 which shows that array growing in size. Its size grows directly proportionate to the input, (arr).