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

     // Step 3 : Merge the sorted halves
     const sortedArray = [];
     let currentLeftIndex = 0;
     let currentRightIndex = 0;

     while (sortedArray.length < left.length + right.length) {
         // sortedLeft's first element comes next if it's less than sortedRight's first element or if sortedRight is exhausted
         if (currentLeftIndex < left.length && (currentRightIndex === right.length || sortedLeft[currentLeftIndex] < sortedRight[currentRightIndex])) {
             sortedArray.push(sortedLeft[currentLeftIndex]);
             currentLeftIndex += 1;
         } else {
             sortedArray.push(sortedRight[currentRightIndex]);
             currentRightIndex += 1;
         }
     }
}