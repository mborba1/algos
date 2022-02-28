class HashTable{

    constructor(size){
        this.data = new Array(size) 

    }
    _hash(key){
        let hash =0;
        for(let i =0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }

    set(key, value){
        //hash the key
        let address= this._hash(key);
        //check if there is anything at the index returned
        if(!this.data[address]){
            //if not, set the data to an empty array;
            this.data[address] = [];

        }
        //store the key/value pair in the hash table array.
        this.data[address].push([key,value]);

    }
    get(key){
        //hash the key that was provide
        let address = this._hash(key);
        
        //check if there is anything under that index
        if(this.data[address]){
            //if so, iterate thru the index
            for(let i=0; i < this.data[address].length; i++){
                //check if the index key matches the key being passed
                if(this.data[address][i][0] === key){
                    //return the value for that key
                    return this.data[address][i][1]
                }
            }
        }
        //if the key is not found under that index return undefined
      return undefined;
    }
     keys(){
        let keysArr =[];
        for(let i=0; i< this.data.length; i++){
            if(this.data[i]){
                keysArr.push(this.data[i][0][0])
            }
        }
        return keysArr;
    }
}

const myHashTable = new HashTable(50)
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 54);
myHashTable.set('oranges', 2)
myHashTable.keys()