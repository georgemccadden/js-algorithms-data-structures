// --- Directions
// Given a string, return a new string with the reversed
// order of characters

// Example / Visual :

//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


function reverse(str) {
    str.split('').reduce((reversed, character) => {
        return character + reversed;
    }, '');
}

module.exports = reverse;


// Algorithm 1 :

// - Create a function which accepts a string as its input, if not a string then return null.
// - Turn the string into an array of characters.
// - Call the reverse method on the array.
// - Join the array of characters back into a string.
// - Return the result, perform a check.

// Code : 

// function reverse(str) {
//     const arr = str.split('');
//     arr.reverse();
//     return arr.join('');
// }

// Algorithm 2 :

// - Create an empty sting called 'reversed'.
// - For each character in the provided string, take the character and add it to the start of 'reversed'.
// - Return the variable 'reversed'.

// Code :

// function reverse(str) {
//     let reversed = '';

//     for (let character of str) {
//         reversed = character + reversed;
//     }
    
//     return reversed;
// }