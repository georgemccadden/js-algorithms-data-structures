// * CALL STACK *

// Any time a function is invoked it is placed (push) on the top of the call stack. When JavaScript sees the "return" keyword or when the function ends, the compiler will remove (pop).

function takeShower() {
  return 'Showering!';
}

function eatBreakfast() {
  let meal = cookFood();

  return `Eating ${meal}`;
}

function cookFood() {
  let items = ['Oatmeal', 'Eggs', 'Protein Shake'];

  return items[Math.floor(Math.random() * items.length)];
}

function wakeUp() {
  takeShower();
  eatBreakfast();

  console.log('Okay, ready to go to work!');
}

wakeUp();