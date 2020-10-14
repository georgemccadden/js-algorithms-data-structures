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
// - Create the push functionality so that it handles if the stack is empty
// - 



// C O D E :

const MinStack = () => {
    this.stack = [];
    this.min = [];
}

MinStack.prototype.push = (element) => {
    if (this.stack.length === 0) {
        this.stack.push(element);
    } else {
        let minimum = Math.min(element, this.min[this.min.length - 1])
    }
}