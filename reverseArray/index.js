// Problem Domain :

// Reverse an array of integers.

// arr = [6, 4, -15, 8, 3, 9, 1]
// return = [1, 9, 3, 8, -15, 4, 6]


// Algorithm :

// - Create a variable to keep track of the first element in the array
// - If within the problem constraints then continue
// - Iterate through the array until you reach the middle
// - Swap the first index with the last and continue inward in the array until end of iteration.
// - Return the array.


// CODE :

function reverseArray(arr) {
    let temp;

    for (let i = 0; i < arr.length / 2; i++) {
        temp = arr[i];

        if (!arr && arr.length >= 1 && arr.length <= 1000) {
            arr[i] = arr[arr.length - 1 - i];
            arr[arr.length - 1 - i] = temp;
        }
    }

    return arr;
}

// Time/Space Complexity :

// Time - O(n/2)
// Space - O(1)