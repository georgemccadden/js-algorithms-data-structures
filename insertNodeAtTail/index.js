// Problem Domain :

// You are given the pointer to the head node of a linked list and an integer to add to the list. Create a new node with the given integer. Insert this node at the tail of the linked list and return the head node of the linked list formed after inserting this new node. The given head pointer may be null, meaning that the initial list is empty.


// C O D E :

const insertNodeAtTail = (head, data) => {
    if (!head) {
        head = new SinglyLinkedListNode(data, null); // If this were part of the SinglyLinkedListNode class
        return head;
    }
}