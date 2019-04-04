// I'll start with a basic hash function which works only for strings.

function hash(key, arrayLength) {
  let total = 0;

  for (let char of key) {
    // Here is where I'll map  "a" to 1, "b" to 2, "c" to 3, i.e.
    let value = char.charCodeAt(0) - 96,
        total = (total + value) % arrayLength;
  }
  return total;
}
