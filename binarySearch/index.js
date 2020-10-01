// Problem Domain :

// Given a sorted (in ascending order) integer array 'nums' of 'n' elements and a 'target' value, write a function to search 'target' in 'nums'. If 'target' exists, then return its index, otherwise return -1.


// Example :

// Input - 'nums' = [-1, 0, 3, 5, 9, 12], 'target' = 9
// Output - 4
// Explanation - 9 exists in 'nums' and its index is 4.


// Algorithm :

// - Keep track of the parameters
// - Find the middle of the array
// - Check if the middle element is the target, if so return its index.
// - If the middle element is greater than the target, change the parameters to the first element and the element before that middle element and then repeat that search until it is found.
// - If the middle element is less than the target, change the parameters to the element after that middle element to the last element in the array and then repeat that search until it is found.
// - If the element is not found, return -1.


// C O D E :

const binarySearch = (nums, target) => {
    let middle;
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        middle = left + Math.floor((right - left) / 2);

        if (nums[middle] === target) {
            return middle;
        }
    }
}