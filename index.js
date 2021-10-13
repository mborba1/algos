//recursive lesson

function sumRange(num){
    if(num===1) return 1;
    return num + sumRange(num-1)
}

sumRange(3)

function factorial(num){
    if(num === 1) return 1;
    return num * factorial(num-1);
}

factorial(2)

// problem solving


function averagePair(arr, val){
    let left = 0;
    let right = arr.length -1
    if(arr.length === 0) return false;
  
    while(left < right){
        let averageTarget = arr[left] + arr[right] / 2;
        if(averageTarget === val){
            return true
        }else if(averageTarget < val){
            left++
        }else{
            right--
        }
    }
    return false
  }
  
  averagePair([-1,0,3,4,5,6], 4.1)

  //** Given a string, return an array of all the permutations of that string. The permutations of the string should be the same length as the original string (i.e. use each letter in the string exactly once) but do not need to be actual words.

/** The array that is returned should only contain unique values and its elements should be in alphabetical order. */

/** stringPermutations('one');
// should return  [ 'eno', 'eon' 'neo', 'noe', 'oen', 'one']
stringPermutations('app');
// should return  [ 'app','pap','ppa']
stringPermutations('nn'); //should return  [ 'nn' ] */

const stringPermutation = (str) => {
  let permutationArr = [];
// split
let chars = str.split('') 
// shift pushes first letter into the array
permutationArr.push(chars.shift())
// check if str has length 
if(chars.length) {
  let currentChar = chars.shift()
  
}
}

// Input: expression = "2*3-4*5"
// Output: [-34,-14,-10,-10,10]
// Explanation:
// (2*(3-(4*5))) = -34 
// ((2*3)-(4*5)) = -14 
// ((2*(3-4))*5) = -10 
// (2*((3-4)*5)) = -10 
// (((2*3)-4)*5) = 10
// map the possible operators
// const operators = {
//   '+':(a,b)=>(+a)+(+b),
//   '-':(a,b)=>a-b,
//   '*':(a,b)=>a*b,
// }
const diffWaysToCompute = input => {
   let res = [];
   for(let i=0; i< input.length; i++){
     let operatorFunction = operators[input[i]];
     if(operatorFunction){
       let left = diffWaysToCompute(input.slice(0, i));
       console.log(left)
       let right = diffWaysToCompute(input.slice(i+1));
       console.log(right)

       for(let l of left){
         for (let r of right){
           res.push(operatorFunction(l,r))
         }
       }


     }
   }
   if (res.length!=0) return res
   return [input]
}

var diffWaysToCompute = function(expression) {
    return compute(expression)
    
    
    
};

function compute(str){
    let res = [], i,j,k,left,right;
    if(!/\+|\-|\*/.test(str)){ // if not an operation, change string to number
        return [parseInt(str)];
    }
    for(let i=0; i< str.length; i++){
        if(/\+|\-|\*/.test(str[i])){
            left = compute(str.substring(0, i));
            right = compute(str.substring(i + 1, str.length));
            for(let j=0; j< left.length; j++){
                for(let k=0; k < right.length; k++){
                    if(str[i] === '+'){
                        res.push(parseInt(left[j] + right[k]));
                    }else if(str[i] === '-'){
                        res.push(parseInt(left[j] - right[k]));
                    }else if(str[i] === '*'){
                        res.push(parseInt(left[j] * right[k]));
                    }
                }
            }
        }
    
    }
    return res;
    }

diffWaysToCompute('2*3-4*5')

function ListNode(val, next) {
   this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
} 
function addTwoNumbers(l1, l2) {
    let node = null;
    
    let carryOver = arguments[2]
    console.log(carryOver)
    
    if(l1 || l2){
        const valueOne = l1 ? l1.val : 0;
        const valueTwo = l2 ? l2.val : 0;
        const next1 = l1 ? l1.next : null;
        const next2 = l2 ? l2.next : null;
        
        const sumOfValues = carryOver ? valueOne + valueTwo + 1 : valueOne + valueTwo;
        //need to mod by ten so we can move the remainder ro the next column
       
        node = new ListNode(sumOfValues % 10);
        node.next = addTwoNumbers(next1, next2, sumOfValues >= 10)
        
    }else if (carryOver){
        node = new ListNode(1)
        node.next = null
        
    }
       
    return node;
};


addTwoNumbers([342], [465])







// Input: n = 3
// Generate every possible valid combination of n left parentheses and n right parentheses
// Output: [ "((()))", "(()())", "()()()", ... ]
//   openParentheses = '('
//   closeParentheses = ')'
//   maybe multiply parentheses by n
//   need to check the position they are valid, make sure open parentheses comes before
//   close parentheses.
//   n = 3 ==> '((( )))'
//   ())(()
//   maybe create a hash table, to keep track of parentheses, { '(' : 2, ')': 3 }, remove them from the hash table and insert into our array. return valid, if not 
//           (
//          /   \
//         ((    ()
//         /\       \
//       (() (())    ()( 
//        /         \
//      (())       ()((
//      /           \
//     (())(        ()(()
//     /               \
//   (())()           ()(())
// 
//   ((())) valid
//   (()()) valid
//   (())() valid
//   ...
  
  
function checkisValid(n){
    //only add open parenthesis if open < n
    //only add a closing parenthesis if closed < open
    //valid IF open === closed = n

  let result = []
  backtrack("",0,0)
  return result;
  function backtrack(str,openN, closedN){
      if(openN === n && closedN === n){
          return result.push(str)
      }
      if(openN !== n){
         
        backtrack(str + "(" ,openN + 1, closedN)
          
      }
      if(closedN < openN){
         
        backtrack(str + ")" , openN, closedN + 1)
          
      }

  }

}

checkisValid(3)

//====================

  var firstUniqChar = function(s) {
    let charRecords = {};
    for(const char of s){
        if(!(char in charRecords)){
            charRecords[char] = 0;      
        }
        charRecords[char]++; 
        console.log(charRecords)
    }
    
    for(let idx = 0; idx < s.length; idx++){
        const char = s[idx];
        if (charRecords[char] === 1) return idx;
    }
    return -1
};

firstUniqChar('loveleetcode')

let chars = ["a","a","a","b","b","a","a"]
var compress = function(chars) {
    let list = [];
    let string = ''
      
    for(let i = 0; i < chars.length; i++){
        let currentChar = chars[i]
        let currentCount = 1
        
        while(currentChar === chars[i + 1]){
            currentCount++
            i++
        }
        if(currentCount === 1){
            string += currentChar
        }else{
            string += currentChar + currentCount.toString()
        }
    }
    let value = 0;
    while(value < string.length){
        chars[value] = string[value]
        value++
    }
    return string.length
};


compress(chars)

const arr = [
            [1,1,1,0,0,0],
            [0,1,0,0,0,0],
            [1,1,1,0,0,0],
            [0,0,2,4,4,0],
            [0,0,0,2,0,0],
            [0,0,1,2,4,0]
            ]
function hourglassSum(arr) {
    // Write your code here
    let sumArray = [];
    let i = 0;
    let j = 0;
    
    let maxSize = 0;
    
    while(maxSize < 16){
        if(maxSize === 4 || maxSize === 8 || maxSize === 12){
            i++;
            j=0;
        }
        const sum = (arr[i][j]+arr[i][j+1]+arr[i][j+2])+(arr[i+1][j+1])+(arr[i+2][j]+arr[i+2][j+1]+arr[i+2][j+2])
        console.log(sum)
        sumArray.push(sum);
        j++;
        maxSize++;
        
    }
  return Math.max(...sumArray)
}
hourglassSum(arr)


function validAnagram(str1, str2){
  // add whatever parameters you deem necessary - good luck!
  if(str1.length !== str2.length){
      return false;
  }
  
  let letter1 = {};
  let letter2 = {};
  for(const char of str1){
      letter1[char] = (letter1[char] || 0 ) +1
  }
  for(const char of str2){
      letter2[char] = (letter2[char] || 0 ) +1
  }
  console.log(letter1)
  console.log(letter2)
  for(let key in letter1){
      if(!(key in letter2)){
          return false
      }
      if(letter2[key] !== letter1[key]){
          return false
      }
  }
  
  return true
}
//========================= or =================================
function validAnagram(str1, str2){
  // add whatever parameters you deem necessary - good luck!
  //check if both strings are have the same length, if not return false because they are not the same
  if(str1.length !== str2.length){
      return false;
  }
  //create an object varuable to hold the letters and the number of occurrency in a key:value pair
  let letter = {};
  //loop thru the first string 
  for(let i =0; i < str1.length; i++){
    let char = str1[i]
    //test if the character already exists in the object, if so add 1 to it otherwise set to 1 count.
    letter[char] ? letter[char] += 1 : letter[char] =1;
  }
 //here we are comparing the second string with the letters already on the object, so we loop thru the seconf string
  for(let i =0; i< str2.length; i++){
    let char = str2[i]
    //if the character is not in the object, return false
    if(!letter[char]){
      return false;
      //if it is, subtract 1 from the letter[char] count
    }else{
      letter[char] -= 1;
    }
  }
  
  return true
}
validAnagram('qwertys', 'qytrewm')
// time is O(n) 
// space is O(1)
//========================================================

//implement a function called countUniqueValues which acceprs a sorted array and counts the unique values in the array. There can be negative numbers in the array but it will always be sorted

function countUniqueValues(arr){
  // add whatever parameters you deem necessary - good luck!
  //check if the array id empty, if so return 0
  if(arr.length === 0) return 0;
  //set the first pointer to first index
  let i = 0;
  //set the second pointer to the second index and continue to loop 
  //thru the array until the end to compare both elements
  for(let j =1; j < arr.length; j++){
    //if they are not the same, it means we found one unique element
      if(arr[i] !== arr[j]){
        //we move the left pointer one position 
          i++;
          //and we re-assign the value of the pointer that is unique to the value
          arr[i] = arr[j];
      }
  }
  //if the elements are the same we do nothing
  //return the index of i +1 = the number of unique values
  return i + 1;
  
      
   
}

time O(n)
space O(1)

function maxSubarraySum (arr, num){
  let maxSum = 0;
  let tempSum = 0;

  if(arr.length < num) return null

  for(let i =0; i < num; i++){
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for(let i = num; i < arr.length; i++){
    tempSum = tempSum - arr[i-num] + arr[i];
    console.log(arr[i-num])
    console.log(tempSum)
    maxSum = Math.max(maxSum, tempSum)

  }
  return maxSum;
}

maxSubarraySum([2,6,9,2,1,8,5,6,3],3)

function sameFrequency(num1, num2){
  // good luck. Add any arguments you deem necessary.
  
  if(num1.length !== num2.length) return false;
  
  let obj = {};
  
  for(let i =0; i<= num1.length; i++){
      let digit = num1[i];
      console.log(digit)
      obj[digit] ? obj[digit] += 1 : obj[digit] = 1;
  
  }
  
  for(let i=0; i<=num2.length; i++){
      let digit = num2[i];
      console.log(digit)
      if(!obj[digit]){
          console.log(obj[digit])
          return false;
      }else{
          obj[digit] -= 1
      }
  }
  return true;
}

sameFrequency(34, 14)