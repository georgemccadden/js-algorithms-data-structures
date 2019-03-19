// Big-O notation is a system for classifying and comparing code by measuring the efficiency of a program based on time and speed.

// It's important to have a precise vocabulary when talking about code performance. When discussing with others about the trade-offs between different approaches to solving problems with code, Big-O proves most useful (debugging, i.e.) 

// For example : Write a function that calculates the sum of all numbers from 1 up to and including n.

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

// If I want to be concerned with speed, some people track it is using a timer :

// This method tells me the number of milliseconds since the window was opened, the function is run, and then the timer checks the milliseconds again and to give me two different numbers to be subtracted and divide it so that it gives me seconds rather than milliseconds.

let timer1 = performance.now();
addUpTo(1000000000);
let timer2 = performance.now();

console.log(`The amount of time elapsed : ${(timer2 - timer1) / 1000} seconds.`)

// The problem with time is it is not always reliable. Different machines will record different, even the same machine will record different times. Tracking time won't always be precise enough the faster the algorithm is, and we always want a fast and efficient one.

// Big-O helps us talk about and compare code "generally" by counting the number of simple operations that the computer has to perform.

function countUpAndDown(n) {
  console.log("Time to go up!");

  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

// The above function countUpAndDown() has a Big-O of O(n).

function noahsArk(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

// The above function noahsArk() has a Big-0 of O(n^2) because of the nested loop.