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

    while(currNode !== null){// move thru the list while current node is not null
        if(currNode.child === null){ //if current node doesn't have a child, point current node to next node
            currNode = currNode.next;
        }else{ //if it has a child
            let tail = currNode.child; // keep track of tail, the current node child assing to the tail
            while(tail.next !== null){ //move thru the child 
                tail = tail.next;
            }
            tail.next = currNode.next;
            if(tail.next !== null){
                tail.next.prev = tail;
            }

            currNode.next = currNode.child;
            currNode.next.prev = currNode;
            currNode.child = null;
        }
    }
    return head;
}