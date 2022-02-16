/** You are given a doubly linked list, which contains nodes that 
 * have a next pointer, a previous pointer, and an additional 
 * child pointer. This child pointer may or may not point to a 
 * separate doubly linked list, also containing these special nodes. 
 * These child lists may have one or more children of their own, 
 * and so on, to produce a multilevel data structure as shown in the 
 * example below. Given the head of the first level of the list, 
 * flatten the list so that all the nodes appear in a single-level, 
 * doubly linked list. Let curr be a node with a child list. 
 * The nodes in the child list should appear after curr and before 
 * curr.next in the flattened list. Return the head of the flattened list. 
 * The nodes in the list must have all of their child pointers set to null.
 * Example: 
 * Input: head = [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]
 * Output: [1,2,3,7,8,11,12,9,10,4,5,6]
 *  1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
 *            |              
 *            7 -> 8 -> 9 -> 10 -> null    
 *                 |
 *                 11 -> 12    
 */

const flatten = function(head){
    //check is there is a no head, return head
    if(!head) return head;
    //assign currunt node to head
    let currNode = head;

    while(currNode !== null){// move thru the list while current node doesn't reach the end (is not null)
        if(currNode.child === null){ //if current node doesn't have a child, point current node to next node 
                                     // moving thru the list
            currNode = currNode.next;
        }else{ //if it does have a child
            let tail = currNode.child; // keep track of tail, the current node child assing to the tail
            while(tail.next !== null){ //while we are not at the end of the list, move thru it
                tail = tail.next; // set tail to tail.next until reaches the end
            }
            tail.next = currNode.next; //once reach the end of child list, point tail to currentNode.next (4)
                                       // so now  10 -> 4
            if(tail.next !== null){   //this is to account for situations like 1<->2<->3 -> null is the last node
                tail.next.prev = tail; // tail.next.prev means 10 <- 4                 |
            }                          //                                              7 <-> 8 <-> 9 <-> 10 -> null

            currNode.next = currNode.child; //point the next of currentNode to the child (3) -> (7)
            currNode.next.prev = currNode; //point the prev of of currentNode.next to currentNode (3) <- (7) 
            currNode.child = null; //set currentnode.child to null
        }
    }
    return head; //return the head
}