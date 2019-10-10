// * PROBLEM DOMAIN *

// Implement a function which accepts a sorted array and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

// * VISUAL *

// countUniqueValues([1, 1, 1, 1, 1, 2]) // 2
// countUniqueValues([]) // 0
// countUniqueValues([-2, -1, -1, 0, 1]) // 4

// * ALGORITHM *

// - Create a function which accepts a sorted array.
// - Check if the length of the sorted array is greater than 0, if not then return 0.
// - Create pointer variables for the first and second index in the array.
// - Loop through the sorted array.
// - As we loop through the sorted array compare the pointers to see if they are equal, if so, move the second pointer and compare again.
// - If the second pointer no longer matches the first pointer then move the first pointer to the next index and change that index's value to equal the value of pointer2's index.



// * Code *

const countUniqueValues = (sortedArr) => {
  if (sortedArr.length === 0) return 0; 

  let pointer1 = 0;

  for (let pointer2 = 1; pointer2 < sortedArr.length; pointer2++) {
    if (sortedArr[pointer1] !== sortedArr[pointer2]) {
      pointer1++;
      sortedArr[pointer1] = sortedArr[pointer2];
    }
  }
  return pointer1 + 1;
};