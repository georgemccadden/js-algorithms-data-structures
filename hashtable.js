// I'll start with a basic hash function which works only for strings.

function hash(key, arrayLength) {
  let total = 0;

  for (let i = 0; i < key.length; i++) {
    // Here is where I'll map  "a" to 1, "b" to 2, "c" to 3, i.e.
    let char = key[i],
        value = char.charCodeAt(0) - 96,
        total = (total + value) % arrayLength;
  }
  return total;
}

// The above hash function needs to be refined because it only hashes strings, it's not constant time - mainly because it depends on the length of the string, and it could be more random.

