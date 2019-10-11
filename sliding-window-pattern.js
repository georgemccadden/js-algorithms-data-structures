// * PROBLEM DOMAIN *

// Write a function called "maxSubarraySum" which accepts an array of integers and a number called "n". The function should calculate the maximum sum of "n" consecutive elements in the array.

// * ALGORITHM *

// - Create a function which accepts an array of integers and a number.
// - Create a variable to hold the maximum sum and a temporary sum to compare with.
// - Check to make sure the number isn't larger than the array's size.
// - Loop through and sum the number of digits in the array that "n" states and store that value in max sum variable.
// - Update the temp sum variable to be max sum.
// - Loop through starting at the "n" index (or the next value after the summed values).
// - Subtract the value before the next "n" indexes and add the last value in the new indexes.
// - Update the max value by comparing max and the temp values.
// - Return the max value once you've reached the end of the loop.



// * CODE *

function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
    
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num]  + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}