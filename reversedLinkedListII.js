/**Given the head of a singly linked list and two integers 
 * left and right where left <= right, reverse the nodes of 
 * the list from position 
 * left to position right, and return the reversed list. 
 * Example: 
 * Input: head = [1,2,3,4,5], left = 2, right = 4
 * Output: [1,4,3,2,5] */



const reverseBetween = function(head, left, right){

    let currNode = head;
    let currPos = 1;
    let start = head;

    while(currPos < left){
        start = currNode;
        currNode = currNode.next;
        currPos++;
    }

    let newList = null;
    let tail = currNode;

    while(currPos >= left && currPos <= right){
        let next = currNode.next;
        currNode.next = newList;
        currNode = next;
        currPos++;
    }
    start.next = newList;
    tail.next = currNode;

    return left > 1 ? head : newList;
}