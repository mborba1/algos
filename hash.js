// function hash(key, arrayLen){
//     let total = 0;
//     for(let char of key){
//         //map "a" to 1, "b" to 2, "c" to 3, etc.
//         let value = char.charCodeAt(0) - 96;
//         total = (total + value) % arrayLen;
//     }
//     return total;
// }
class HashTable{
    constructor(size=53){
        this.keyMap = new Array(size);

    }

    _hash(key){
        let total =0;
        let WEIRD_PRIME = 31;
        for(let i =0; i < Math.min(key.length, 100); i++){
            let char = key[i];
            let value = char.charCodeAt(0) -96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value){
        //hash the key
        let index = this._hash(key);
        //check if there is anything at the index returned
        if(!this.keyMap[index]){
            //if not, set the keyMao to an empty array;
            this.keyMap[index] = [];

        }
        //store the key/value pair in the hash table array.
        this.keyMap[index].push([key,value]);

    }
    get(key){
        //hash the key that was provide
        let index = this._hash(key);
        //check if there is anything under that index
        if(this.keyMap[index]){
            //if so, iterate thru the index
            for(let i=0; i < this.keyMap[index].length; i++){
                //check if the index key matches the key being passed
                if(this.keyMap[index][i][0] === key){
                    //return the value for that key
                    return this.keyMap[index][i][1]
                }
            }
        }
        //if the key is not found under that index return undefined
      return undefined;
    }
    values(){
        let valuesArr =[];
        for(let i=0; i< this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j=0; j< this.keyMap[i].length; j++){
                    if(!valuesArr.includes(this.keyMap[i][j][1])){
                        valuesArr.push(this.keyMap[i][j][1])
                    }
                }
            }
        }
        return valuesArr;
    }
    keys(){
        let keysArr =[];
        for(let i=0; i< this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j=0; j< this.keyMap[i].length; j++){
                    if(!keysArr.includes(this.keyMap[i][j][0])){
                        keysArr.push(this.keyMap[i][j][0])
                    }
                }
            }
        }
        return keysArr;
    }

}

let ht = new HashTable(17);
ht.set("maroon","#800000")
ht.set("yellow","#FFFF00")
ht.set("olive","#808000")
ht.set("salmon","#FA8072")
ht.set("lightcoral","#F08080")
ht.set("mediumvioletred","#C71585")
ht.set("plum","#DDA0DD")
ht.set("purple","#DDA0DD")
ht.set("violet","#DDA0DD")

ht.keys().forEach(function(key){
    console.log(ht.get(key))
})