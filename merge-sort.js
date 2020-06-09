function logMergeSort(arrayToSort) {
     // Base Case : Arrays with fewer than 2 elements are sorted
     if (arrayToSort.length < 2) {
         return arrayToSort;
     }
     // Step 1 : Divide the array in half (round down to avoid 'half index')
     const midIndex = Math.floor(arrayToSort / 2);
     const left = arrayToSort.slice(0, midIndex);
     const right = arrayToSort.slice(midIndex);
     
     // Step 2 : Sort each half
     const sortedLeft = logMergeSort(left);
     const sortedRight = logMergeSort(right);
}