var reverse = function(x) {
  
    const isNegative = x < 0;
    
    let numberStr = Math.abs(x).toString().split("")
    let reversed = numberStr.reverse().join("")
    
    const num = Number(reversed)
    if(isNegative && num >  Math.pow(2, 31) || (!isNegative && num >  Math.pow(2, 31)-1) ) return 0;
    
    return isNegative ? -num : num;
    // const xStr = Math.abs(x).toString().split('').reverse().join('');
    // if(+xStr > Math.pow(2, 31)) return 0;
    // if(x < 0) return -1 * +xStr;
    // return xStr
};