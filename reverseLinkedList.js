/**Given the head of a singly linked list, 
reverse the list, and return the reversed list. */

/** Example: 
 *  input:  1-> 2 -> 3 -> 4 -> 5
 *  output: 5-> 4 -> 3 -> 2 -> 1
 */


const reverseList = function(head){
    let currNode = head; //1
    let prev = null;

    while(currNode){//1 //2
        let next = currNode.next; //2 //3
        currNode.next = prev;//1 //2
        prev = currNode; // 2 ->1 -> null
        currNode = next; //2 //3
    }

    return prev;
}