// Problem Domain :

// Given a binary tree, check whether it is a mirror of itself (i.e. symmetric around its center)


// Example :

// Input - [1, 2, 2, 3, 4, 4, 3]

//      1
//     / \
//    2   2
//   / \ / \
//  3  4 4  3

// Output - true


// Algorithm :

// - Handle the case of an empty tree (It should be true)
// - Perform a depth first traversal through the passed in tree


// C O D E :

const isSymmetrical = (root) => {
    if (!root) return true;

    function depthFirst(nodeA, nodeB) {
        if (!nodeA && !nodeB) return true;
        if (!nodeA && nodeB) return false;
        if (nodeA && !nodeB) return false;
        if (nodeA.val !== nodeB.val) return false;
        return depthFirst(nodeA.left, nodeB.right) && depthFirst(nodeA.right, nodeB.left);
    }
}