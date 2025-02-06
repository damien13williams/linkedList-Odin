// Node Class
class node{
    constructor(value){
        this.value = value;
        this.next = null;
    }

}

// Linked List Class
class linkedList {
    constructor() {
        this.head = null;
        this.tail = null;
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
    size(){
        let count = 0;
        let current = this.head;
        while (current){ // traverse through the list until null
            count++;
            current = current.next
        }
        return count;
    }

    // Head
    getHead(){
        return this.head;
    }

    // Tail
    getTail(){
        let current = this.head;
        while (current.next){
            current = current.next;
        }
        return current;
    }

    // Node at index given
    at(index){
        // base case
        if (index < 0){
            return null;
        }

        let current = this.head;
        let count = 0;
        while(current){
            if (count === index){
                return current;
            }
            current = current.next;
            count++;
        }
        return null;
    }

    // Pop
    pop(){
        // Base Cases
        if (!this.head) {
            return null; // List is empty
        } 
          
        if (!this.head.next) {
            const node = this.head;
            this.head = null;
            return node;
        } 
        
        let current = this.head;
        while(current.next.next){
            current = current.next;
        }
        const tailNode = current.next;
        current.next = null; 
        return tailNode;
    }

    // Return T/F if value appears
    contains(value){
        // Base Case
        if (!this.head){
            return null;
        }

        let current = this.head;
        while(current){
            if(value === current.value){
                return true
            }
            current = current.next;
        } 
        return false;
    }

    // return index of node containing a value
    find(value){

        // Base Case: No nodes
        if(!this.head){
            return -1; 
        }

        let index = 0;
        let current = this.head;
        while(current){
            if(value === current.value){
                return index;
            }
            index++;
            current = current.next
        }

        return -1;
    }

    // Convert LinkedList objects to strings to print
    toString(){
        if (!this.head){
            return 'null';
        }
        let current = this.head;
        let result = '';
        while (current){
            result += `( ${current.value} ) -> `;
            current = current.next;
        } 
        result += 'null';
        return result;
    }
}

// TESTS:

const list = new linkedList();

//append
list.append(3);
console.log(list.toString());
//prepend
//getHead

//getTail

//size

//pop

//at

//contains

//find

//toString



