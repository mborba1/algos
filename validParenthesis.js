function generateParenthesis(n){
   let result = [];

   backtrack("", 0, 0);
   return result;


   function backtrack(str, openN, closedN){
       if(openN === n && closedN ===n){
           return result.push(str);
       }
       if(openN < n){
           backtrack(str + "(", openN +1, closedN)
       }
       if(closedN < openN){
           backtrack(str + ")", openN, closedN +1)
       }
   }


}

generateParenthesis(3)

//valid barckets
var isValid = function(s) {
    let open = '{[(';
    let close = ']})';
    
    let validBrackets = {
        "]": "[",
        "}": "{",
        ")": "("
    }
    
    let stack = [];
    
    for(const char of s){
        if(open.includes(char)){
            stack.push(char)
        }else if(close.includes(char)){
            if(stack.length === 0){
                return false;
            }else{
                if(stack[stack.length-1] === validBrackets[char]){
                    stack.pop();
                }else{
                    return false
                }
            }
        }
    }
    return stack.length === 0;
};