// Linked List Class
class linkedList {
    constructor() {
        this.head = null;
    }

    // Append
    append(value){
        const newNode = new node(value);

        if(!this.head){
            this.head = newNode;
            return;
        }

        let current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = newNode;
    }

    // Prepend
    prepend(value){
        const newNode = new node(value);

        if(!this.head){
            this.head = newNode;
            return;
        }

        newNode.next = this.head;
        this.head = newNode;
    }

    // Size
   size(list){

    }

    // Head
    head(list){

    }

    // Tail
    tail(list){

    }

    // Node at index given
    at(index){

    }

    // Pop
    pop(list){

    }

    // Return T/F if value appears
    contains(value){

    }

    // return index of node containing a value
    find(value){

    }

    // Convert LinkedList objects to strings to print
    toString(list){
        
    }
}

// Node Class
class node{
    constructor(value){
        this.value = null;
        this.next = null;
    }

}


