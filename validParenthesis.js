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