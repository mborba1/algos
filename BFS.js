class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }
    find(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }
    remove(value){
        //step 1. if there is a root, check if value is greater or less, mi=ove right or left, look for the value, 
        //step 2. once the value is found, if there is a right, check if rigth has a left - 
        //step 3. if it's child has a left , that left.value will replace the value that is being deleted
        //step 4. that new child.value need to be under that parent's parent.

        //if there is no root return false
        if(!this.root) return false;
        //assign this.root to variable name currentNode
        let currentNode = this.root;
        //declare a new variable that points to null
        let parentNode = null;
        while(currentNode){
            if(value < currentNode.value){ //go left
                parentNode = currentNode;
                currentNode = currentNode.left
            }else if(value > currentNode.value) { //go right
                parentNode = currentNode
                currentNode = currentNode.right
            }else if(currentNode.value === value) { //if they match, need to find the loweast
                
                //Option 1: No right child
                if(currentNode.right === null){
                   if(parentNode == null){
                       this.root = currentNode.left
                   }else {
                       //if parent greater than current value make current left child
                       // a child parent
                       if(currentNode.value < parentNode.value){
                          parentNode.left = currentNode.left
                          //if parent less then current value, make left child a right child of parent
                       }else if(currentNode.value > parent.value){
                           parentNode.right = currentNode.left;
                       }
                   }
                }
                //Option 2: Right child which doesn't have a left child
                else if(currentNode.right.left === null){
                    if(parentNode === null){
                        this.root = currentNode.left
                    }else {
                        currentNode.right.left = currentNode.left;
                        //if parent greater than current, make right child of the left the parent
                        if(currentNode.value < parentNode.value){
                            parentNode.left = currentNode.right

                            //if parent is less than current, make right child a right child of the parent
                        }else if(currentNode.value > parentNode.value){
                            parentNode.right  = currentNode.right
                        }
                    }
                }
                //Option 3: Right child that has a left child

                else{
                    //find the right child's left most child

                    let leftmost = currentNode.right.left;
                    let leftmostParent = currentNode.right;
                    while(leftmost.left !== null){
                        leftmostParent = leftmost;
                        leftmost = leftmost.left;
                    }

                    //Parent's left subtree is now leftmost's right subtree

                    leftmostParent.left = leftmost.right;
                    leftmost.left = currentNode.left;
                    leftmost.right = currentNode.right;

                    if(parentNode === null){
                        this.root = leftmost;
                    }else{
                        if(currentNode.value < parentNode.value){
                            parentNode.left = leftmost;
                        }else if(currentNode.value > parentNode.value){
                            parentNode.right = leftmost;
                        }
                    }

                }
                return true;
            }
        }
    }

    contains(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
    BFS(){
        var node = this.root,
            data = [],
            queue = [];
        queue.push(node);

        while(queue.length){
            // remove the first item in the queue and and assign to node variable
           node = queue.shift();
           //push that node value into the data array
           data.push(node.value);
           //check if node has left node child, if so push into queue array
           if(node.left) queue.push(node.left);
           //check if node has left node child, if so push into the queue array
           if(node.right) queue.push(node.right);
        }
        return data;
    }
    DFSPreOrder(){
        //initialize an array
        let data = [];
        //assign root to current  variable
        let current = this.root;

        function traverse(node){
            data.push(node.value)
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);

        }
        traverse(current)
        return data;
    }
    DFSPostOrder(){
        let data = [];
        let current = this.root;

        function traverse(node){
            
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value)
        }
        traverse(current)
        return data;
    }
    DFSInOrder(){
        let data = [];
        let current = this.root;
        //create function to traverse the tree that takes a node
        function traverse(node){
            //if node has left child, traverse recursively until reaches the last left chicld node
            if(node.left) traverse(node.left);
            //keep pushing node value into the data array
            data.push(node.value)
            //check if node has right child, traverse recursively until it reaches the last right child node
            if(node.right) traverse(node.right);
            
        }
        //visit the root node last 
        traverse(current)
        //return the array with all nodes
        return data;
    }

}



var tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1)
console.log(tree.DFSPostOrder());