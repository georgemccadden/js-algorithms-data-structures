// Creating "pointers" or values that correspond to an index/position and move towards the beginning, end, or middle based on a certain condition.

// * PROBLEM DOMAIN *

// Write a function which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an arrya that includes both values that sum to zero or undefined if a pair doesn't exist.

// * VISUAL *

// sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]
// sumZero([-2, 0, 1, 3]) // undefined

// * ALGORITHM *

// - Create a function which accepts a sorted array.
// - Create variables for left pointer and right pointers to represent the beginning and ending values in the array.
// - Check to make sure that the left value in the array is less than the right value in the array (so they won't cross over).
// - Create a variable to which holds the sum of the two pointers.
// - If the sum of the two pointers is equal to 0 then return those two index values.
// - If the sum of the two pointers is greater than 0 then move the right pointer to an index one less than where it is (since the larger value should be the right one).
// - If the sum of the two pointers is less than 0 then move the left pointer to an index one greater than where it is.


// * Code *

function sumZero(sortedArr) {
  let left = 0;
  let right = sortedArr.length - 1;
  while (left < right) {
    let sum = (sortedArr[left] + sortedArr[right]);
    if (sum === 0) {
      return [sortedArr[left], sortedArr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

// * BIG O *

// Time complexity = O(n)
// Space complexity = O(1)