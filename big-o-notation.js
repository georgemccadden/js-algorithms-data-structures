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

// If I want to be concerned with speed, one way to track it is using a timer :

// This method tells me the number of milliseconds since the window was opened, the function is run, and then the timer checks the milliseconds again and to give me two different numbers to be subtracted and divide it so that it gives me seconds rather than milliseconds.

let timer1 = performance.now();
addUpTo(1000000000);
let timer2 = performance.now();

console.log(`The amount of time elapsed : ${(timer2 - timer1) / 1000} seconds.`)
