// * RECURSION *

// A function which calls itself. It works by invoking the same function with a different input until you reach your base case. (The base case is the condition when the recursion stops)

// Example :

function countDown(num) {
  if (num <= 0) {
    console.log('All done!');
    return;
  }
  console.log(num);
    
  num--;
  countDown(num);
}

countDown(8);

// Example 2 :

function sumRange(num) {
  if(num === 1) return 1;

  return num + sumRange(num - 1);
}
sumRange(3); // 6;

// * Walkthrough if num = 3 *

// 