// Problem Domain :

// Given a pointer to the head node of a linked list, print each node's 'data' element, one per line. If the head pointer is null (indicating the list is empty), there is nothing to print.


// Example :

// Input - 'n' = 2
//         16
//         13
// Output - 
//          16
//          13
// Explanation -
// There are two elements in the linked list. They are represented as 16 -> 13 -> NULL. So, the printLinkedList function should print 16 and 13 each on a new line.


// Algorithm :

// - Iterate through the entire linked list while head is not null
// - Print out the data of the node you are on
// - Change head to the next node to continue until there are no more


// C O D E :

const printLinkedList = (head) => {
    while (head) {
        console.log(head.data);
        head = head.next;
    }
}
