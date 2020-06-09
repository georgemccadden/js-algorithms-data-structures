function binarySearch(target, nums) {
    // First you want to see if the target appears in nums collection

    let floorIndex = -1; // 'floorIndex' and 'ceilingIndex' are the parameters of the collection of nums
    let ceilingIndex = nums.length; // -1 means the parameter before the first number in the collection and nums.length is the parameter after the last number in the collection

    while (floorIndex + 1 < ceilingIndex) { // If there isn't at least one index between our parameters then the number most not be present
    // Find the index halfway between your parameters and round down so that you don't get a half index

    const distance = ceilingIndex - floorIndex;
    }
}