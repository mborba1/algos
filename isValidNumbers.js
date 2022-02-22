//is valid numbers

var isNumber = function(s) {
    const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const sign = ['+', '-'];
    const dot = ['.'];
    
    let seenDigit = false;
    let seenExponent = false;
    let seenDot = false;
    
    for(let i =0; i<s.length; i++){
        let char = s[i]
        if(char in digits){
            seenDigit = true
        }else if(char in sign){
            if(i>0 && s[i-1] !=='e' && s[i-1] !== 'E'){
                return false;
            }
        }else if(char in [ 'e', 'E'])  {
            if (seenExponent || !seenDigit){
                return false;
            }
            seenExponent = true;
            seenDigit = false;
        } else if(char === '.'){
           if(seenDot || seenExponent){
            return false;
           }    
          seenDot = true;
         }else{
             return false;
         } 
       
      }
    
     return seenDigit;
}

isNumber('2e0')
