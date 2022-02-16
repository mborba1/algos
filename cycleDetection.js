//naive approach Time: O(n) Space: O(n)
const findCycle = function(head) {

    let currNode = head

    const seenNodes = new Set();

    while(!seenNodes.has(currNode)){
        if(currNode.next === null){
            return false;
        }
        seenNodes.add(currNode);
        currNode = currNode.next;
    }
    return currNode;
}

//Floyd's Tortoise And Hare Algotithm

//             4 -> 5
//           /       \
//1 -> 2 -> 3        6
//           \       /
//            8 <-  7

//two pointers one fast one slow, the moment they overlap you know there is a cycle
// how to figure out the list node on which the cycle begins? 
// here we know that the hare and the toirtoise landed on a 7, so that is the meeting point of our 
//two pointers. we will also need the starting point which is our head
//instatiate 2 pointers again, and traverse one pointer at the time and once they meet agian we have 
//our list node value of which the cycle begins

const findCycleTwo = function(head){
   
    let hare = head, tortoise = head;

    while(true){
        hare = hare.next;
        tortoise = tortoise.next;
        if(hare === null || hare.next === null){
            return false;
        }else{
            hare = hare.next
        }
       if(tortoise === hare) break;;
    }

    let meetingPoint = tortoise;
    let startintPoint = head;

    while(meetingPoint !== startintPoint){
        meetingPoint = meetingPoint.next
        startintPoint = startintPoint.next
    }

    return meetingPoint
}