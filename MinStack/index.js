// Problem Domain :

// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.


// Example :

// Input - 
//["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]

// Output -
//[null,null,null,null,-3,null,0,-2]


// Algorithm :

// - Keep track of what is in your stack
// - Keep track of what your minimum will be while creating your stack



// C O D E :

const MinStack = () => {
    this.stack = [],
    this.min = [],
}