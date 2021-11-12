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
                //if a duplicate number is being passed
                if(value === current.value) return undefined;
                //if the number is smaller than root or parent, if there is no left add to the left, otherwise make that left current(root/parent)
                //and keep checking left
                if(value < current.value){
                    if(current.left === null){
                        current.left = newNode;
                        return this;
                    }else {
                        current = current.left;
                    }
                    //if value is greater than root/parent, check if there is right  node, if not, add it, otherwise, make that node right current
                    //
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
        find(value){

           if(this.root === null) return false;
           let current = this.root;
           let found = false
           if(current === value) return true;

           while(current && !found){
               if(value < current.value){
                   current = current.left;
               } else if(value > current.value){
                   current = current.right;
               } else {
                   found = true;
               }
           }
           if(!found) return false;
           return current;
           
        }
        //BSF - [10,6,15,3, 8,20] - iteratively -FIFO
        BFS(){
            let data = []
            let queue = []
            let node = this.root;
            queue.push(this.root);
            while(queue.length){
                node = queue.shift();
                data.push(node)
                if(node.left) queue.push(node.left);
                if(node.right) queue.push(node.right);
            }
            return data;
        }
        //DFS - Pre-Order [10,6,3,8,15,20] - recursively
        DFSPreOrder(){

            let data = [];
            let current = this.root;

            function traverse(node){
                data.push(node)
                if(node.left) traverse(node.left);
                if(node.right) traverse(node.right);

            }
            traverse(current)
            return data;
        }
        

    }


// var tree = new BinarySearchTree();
// tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left = new Node(7);
// tree.root.left.right = new Node(9);

//       10
//   5        13
// 2   7    11   16

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

///meetingRooms II - Leetcode 
//[0,30],[5,10],[15,20]
//which datastructure = min Heap

//Big O of BST 
//insertion - O(log n)
//searching - O(lon n)