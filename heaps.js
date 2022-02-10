class maxBinaryHeap{
    constructor(){
        this.values = [41,39,33,18,27,12];
    }
    
    insert(element){
        this.values.push(element);
        this.bubbleUp()
    }

    bubbleUp(){
        let idx = this.values.length -1;
        const element = this.values[idx]
        

        while(idx>0){
            let parentIdx = Math.floor((idx-1)/2);
            let parent = this.values[parentIdx];
            if(element <= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    extractMax(){

        const max = this.values[0];
        const end = this.values.pop();

        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }

        return max;

    }
    sinkDown(){
        let parentIdx = 0;
        const length = this.values.length;
        const element = this.values[0];


        while(true){
            let leftChildIdx = (2 * parentIdx) + 1;
            let rightChildIdx = (2 * parentIdx) + 2;
            let leftChild, rightChild;
            let swap = null;
            
            //  0  1  2
            //[33,39,41,18.27.12]

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx]
                if(leftChild > element){
                    swap = leftChildIdx;
                }
            }

            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)){
                    swap = rightChildIdx;
                }
            }

            if(swap === null) break;
            this.values[parentIdx] = this.values[swap];
            this.values[swap] = element;
            parentIdx = swap;
        }
    }
}

let heap = new maxBinaryHeap();
