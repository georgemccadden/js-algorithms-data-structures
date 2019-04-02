// A class is like a blueprint for creating objects with pre-defined properties and methods.

class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

// With classes, the method to create new objects MUST be called "constructor".

// The keyword "class" creates a constant, which means I cannot redefine it.

let studentOne = new Student("George", "McCadden III");
let studentTwo = new Student("Miguel", "Monserate");