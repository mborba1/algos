class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value){
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value){
         const newNode = new Node(value);
      
         this.tail.next = newNode;
         this.tail = newNode;
         this.length++
         return this;
    }
    prepend(value){
        const newNode = new Node(value);

        newNode.next = this.head;
        this.head = newNode;
        this.length++
        return this;
    }
    printList(){
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
    insert(idx, value){
        
    }

}


const myLinkedList = new LinkedList(10);

// myLinkedList.append(5)
//  myLinkedList.append(16)
myLinkedList.prepend(1)
// console.log(myLinkedList)

//from Udemy example
class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkList{
    constructor(){
        this.head = null;
        this.tail =null;
        this.length =0;
    }

    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++
        return this;
    }
    pop(){
        if(!this.head){
            return undefined;
        }
        let current = this.head;
        let newTail = current;
        while(current.next){
            newTail = current;
            current = curremt.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
}

