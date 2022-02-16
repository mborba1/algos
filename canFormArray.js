var canFormArray = function(arr, pieces) {
    if(arr.length !== pieces.length) return false;
    const map = new Map();
    
    arr.forEach((val, i) => map.set(val, i));
    
    for(let piece of pieces) {
        
        let idx = map.get(piece[0]);
        
        for(let i = 0; i < piece.length; i++) {
            let currIdx = i + idx;
            if(piece[i] !== arr[currIdx]) return false;
        }
    }
    return true;    
};