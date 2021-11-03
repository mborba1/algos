class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val){
        let newNode = new Node(val)

        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }else{
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;

        }
        return this.size++
    }
    pop(){
        if(!this.first) return null;

        let temp = this.first
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next
       
        this.size--
       return temp.value
    }
}

//Big O - of Stack
//insertion - O(1)
//deletion - O(1)
//searching - O(n)
//access - O(n)


////QUEUES /////

//enqueue pseudocode
//this functions accaepts a value. create a new node using the value passed to the function. If there are no nodes in the queue, 
//set this node to be the first and last property of the queue
//otherwise, set the next property on the current last to the that node, and then set the last property of the queue to be that node
//increase the size and return it

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val){
        let newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }else {
            this.last.next = newNode;
            this.last = newNode
        }
        return this.size++

    
    }
    //if the is no property , just return null
    //store the first property in a variable
    //see if the first is the same as the last(check if there is only one node). If so, set the first and last to be null
    //if there us more than 1 node, set the first property to be the next property of first
    //decerment the size by 1
    //return the value of the node dequeued
    dequeue(){
        if(!this.first) return null;

        let temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;

    }
}

//Big O 
//insertion/ deletion :  O(1)
//searching/ accessing: O(n)

//Binary Trees/Binary Search Trees

class Node{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(value){
        let newNode = new Node(value);

        if(this.root === null){
            this.root = newNode;
            return this;
        }else {
            let current = this.root
            while(true){
                if(value === current.value) return undefined;
                if(value < current.value){
                    if(current.left === null){
                        current.left = newNode;
                        return this;
                    }else {
                        current = current.left;
                    }
                }else if(value > current.value){
                    if(current.right === null){
                        current.right = newNode;
                        return this;
                    }else{
                        current = current.right;
                    }
                }
            }
        }          
        }
    }


var tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);

//       10
//   5        13
// 2   7    11   16

///meetingRooms II - Leetcode 
//[0,30],[5,10],[15,20]
//which datastructure = min Heap