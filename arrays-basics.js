// When I think of basic array functionality I first think of "pushing" and "unshifting".

// Array.push() adds elements to the end of an array and Array.unshift() adds elements to the beginning an array.

// I'm writing a program that will take an array and create mixed numbers. In the case of this example, this will take a group of numbers in numerical order and add more to it in their respective places.

function alotOfNumbers(arr) {
  arr.unshift('one', 'II', 3);
  arr.push('seven', 'VIII', '9');
}

console.log(alotOfNumbers(['4', 'V', 6]));