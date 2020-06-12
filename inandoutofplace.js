function  squareArrayInPlace(intArray) {
    intArray.forEach((int, index) => {
        intArray[index] *= int;
    });

    // There's no need to return anything because you modified the intArray in-place
}