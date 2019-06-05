// A class is like a blueprint for creating objects with pre-defined properties and methods.

class Student {
  constructor(firstName, lastName, grade) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = grade;
    this.tardies = 0;
  }
  fullName() {
    return `This student's full name is ${this.firstName} ${this.lastName}`;
  }
  markLate() {
    this.tardies += 1;

    if(this.tardies >= 10) {
      return `${this.firstName} ${this.lastName}, you are expelled!`
    }
  }
}

// With classes, the method to create new objects MUST be called "constructor".

// The keyword "class" creates a constant, which means I cannot redefine it.

let studentOne = new Student("George", "McCadden III", "junior");
let studentTwo = new Student("Miguel", "Monserate", "senior");