var longestPalindrome = function(s) {
    //if string is only one character, return that character
    if(s.length <=1)
            return s;
    //set two pointers, start and maxlen        
    let start = 0;
    let maxLen = 0;
    //looop thru the string 
    for(let i=0;i<s.length;i++) {
        let len1 = expand(s, i, i);
        let len2 = expand(s, i, i+1);
        const len = Math.max(len1, len2);
        if(len>maxLen) {
            maxLen = len;
            start = i - Math.floor((len-1)/2);
        }
    }
    return s.substr(start, maxLen);
};

//check from the middle and move towards the ends/beginning:  bab
                                                        //   <-*->
var expand = function(str, left, right) {
    while(left >= 0 && right < str.length && str[left] === str[right]) {
        left--;
        right++;
    }
    return right - left -1;
}