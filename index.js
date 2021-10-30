//Arrays two sum return indexes
var twoSum = function(nums, target) {
    let hash = {};
    for(let i =0; i < nums.length; i++){
        let total = target - nums[i];
        if(total in hash){
            return [i, hash[total]]
        }else{
            hash[nums[i]]=i
        }
    }
};

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

// time O(n)
// space O(1)

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


///=======
// RLU Cache

class LRUCache {
    constructor(maxSize) {
          this.cache = {}
      this.maxSize = maxSize || 1;
          this.currentSize = 0
          this.listOfMostRecent = new DoublyLinkedList()
    }
  
    insertKeyValuePair(key, value) {
      // Write your code here.
          if(!(key in this.cache)){
              if(this.currentSize === this.maxSize){
                  this.evictLeastRecent()
              }else{
                  this.currentSize +=1
              }
              this.cache[key] = new DoublyLinkedListNode(key, value)
              
          }else{
              this.replaceKey(key, value)
          }
          this.updateMostRecent(this.cache[key])
    }
    updateMostRecent(node){
          this.listOfMostRecent.setHeadTo(node)
      }
    getValueFromKey(key) {
      // Write your code here.
          if(!(key in this.cache)){
              return null;
          }else{
              this.updateMostRecent(this.cache[key])
              return this.cache[key].value;
          }
    }
  
    getMostRecentKey() {
      // Write your code here.
          if(!this.listOfMostRecent.head) return;
          return this.listOfMostRecent.head.key
    }
      evictLeastRecent() {
          let keyToRemove = this.listOfMostRecent.tail.key
          this.listOfMostRecent.removeTail()
          delete this.cache[keyToRemove]
      }
      
      replaceKey(key, value){
          if(!(key in this.cache)){
              throw new error("Key not in cache")
          }else{
              this.cache[key].value = value;
          }
      }
  }
  
  class DoublyLinkedList{
      constructor(){
          this.head = null;
          this.tail = null;
      }
      setHeadTo(node){
          if (this.head === node){
              return;
          }else if(this.head === null){
              this.head = node;
              this.tail = node;
          }else if(this.head === this.tail){
              this.tail.prev = node;
              this.head = node;
              this.head.next = this.tail;
          }else{
              if(this.tail === node){
                  this.removeTail()
              }
              node.removeBidings()
              this.head.prev = node;
              node.next = this.head;
              this.head = node;
          }
      }
      removeTail(){
          if(this.tail === null){
              return;
          }
          if(this.tail === this.head){
              this.head = null;
              this.tail = null;
              return;
          }
          this.tail = this.tail.prev;
          this.tail.next = null;
      }
  }
  class DoublyLinkedListNode{
      constructor(key, value){
          this.key = key;
          this.value = value;
          this.prev = null;
          this.next = null;
      }
      removeBidings(){
          if(this.prev !== null){
              this.prev.next = this.next;
          }
          if(this.next !== null){
              this.next.prev = this.prev;
          }
          this.prev = null;
          this.next = null;
      }
  }
  // Do not edit the line below.
  exports.LRUCache = LRUCache;
  //write a functio called power which accepts a base and an exponent. The function should return the power of the base to the exponent
  //This function should mimic the functionality of Math.pow() - do not worry about negative bases and exponents

  function power(base, exponent){
    if (exponent === 0) return 1;
    
    return base * power(base, exponent-1)
    2
    
}

function indexOf(arr, val){
    for (let i = 0; i < arr.length; i++){
       if(arr[i] === val){
           return i
       }
    }
    return -1
}

// BubbleSort

function bubbleSort(array) {
  // Write your code here.
  let temp;
	for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array.length; j++){
      if(array[j] > array[j+ 1]){
        temp = array[j + 1]
        array[j + 1] = array[j]
        array[j] = temp
        
      }
    }
  }
  return array
}


bubbleSort([8,5,2,9,5,6,3])
//insertion Sort
function insertionSort(array) {
  // Write your code here.
	for(let i=1; i<array.length; i++) {
		let currElem=array[i]
		for(var j= i-1; j>=0 && array[j] > currElem; j--) {
      array[j+1] = array[j]
			
		}
      array[j+1] = currElem
		
	}
	return array
}
console.log(insertionSort([8,5,2,9,5,6,3]))
//selection sort
function selectionSort(array) {
  // Write your code here.
	for(let i =0; i < array.length; i++){
		let min = i;
		for(let j = i+1; j < array.length; j++){
			if(array[j] < array[min]){
			 min =j
			}
			//if(i !== min){
				let temp = array[i]
			  array[i] = array[min]
			  array[min] = temp
			//}
			
		}
	}
	return array
}

console.log(selectionSort([8,5,2,9,5,6,3]))
//merge sort
function merge(arr1, arr2){
  let results = [];
  let i = 0;
  let j = 0;

  while(i < arr1.length && j < arr2.length){
    if(arr2[j] > arr1[i]){
      results.push(arr1[i])
      i++
    }else{
      results.push(arr2[j])
      j++
    }
  }
  while(i < arr1.length){
    results.push(arr1[i])
    i++
  }
  while(j < arr2.length){
    results.push(arr2[j])
    j++
  }
  return results
}

function mergeSort(arr){
  if(arr.length  <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right)
}
mergeSort([10, 24, 76, 73, 72, 1, 9])

function threeNumberSort(array, order) {
    // Write your code here.
      let first = order[0]
      let last = order[2]
      let i =0
      for(let idx=0; idx < array.length; idx++){
          if(array[idx] === first){
        let temp = array[idx];
        array[idx] = array[i];
        array[i] = temp;
  
  // 			swap(i, idx, array)
              i++	
          }
      }
      let j = array.length -1
      for(let idx = array.length -1; idx > -1; idx--){
          if(array[idx] === last){
              let temp = array[idx];
        array[idx] = array[j];
        array[j] = temp;
    //	swap(j, idx, array)
              j--
          }
      }
      return array
  }
  
  // function swap(i, j, array){
  // 	let temp = array[j]
  // 	array[j] = array[i]
  // 	array[i] = temp
  //}
  
  threeNumberSort([1,0,0,-1,-1,0,1,1], [0,1,-1])

  //Quick Sort


  function pivot(arr, start =0, end = arr.length-1){

    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }

    let pivot = arr[start];
    let swapIdx = start;

    for(let i = start +1; i <= end; i++){
        if(pivot > arr[i]){
            swapIdx++;
            swap(arr, swapIdx, i)
        }
    }
    swap(arr, start, swapIdx)
    return swapIdx;
  }

  function quickSort(arr, left=0, right=arr.length -1){
      if(left < right){
          let pivotIndex = pivot(arr,left, right)
          //left
          quickSort(arr, left, pivotIndex -1)
          //right
          quickSort(arr, pivotIndex+1, right)
      }
      return arr;
  }

  quickSort([4,6,9,1,2,5])

  //Radix quickSort

  //helper function to get the digit

  function getDigit(num, i){
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
  }

  // getDigit(7323, 0)

  function digitCount(num){
    if(num === 0) return 1;

    return Math.floor(Math.log10(Math.abs(num))) +1;
  }

  // digitCount(2138)

  function mostDigits(nums){
    let maxDigits = 0;
    for(let i =0; i < nums.length; i++){
      maxDigits = Math.max(maxDigits, digitCount(nums[i]))
    }
    return maxDigits
  }

  function radixSort(nums){
      let maxDigitCount = mostDigits(nums);
      
      for(let k =0; k < maxDigitCount; k++){
          let digitBuckets = Array.from({length: 10}, () => [])
          for(let i =0; i < nums.length; i++){
              let digit = getDigit(nums[i],k)
              digitBuckets[digit].push(nums[i])
          }
          nums = [].concat(...digitBuckets)
      }
      return nums;
  }

  radixSort([23, 345, 5467, 12, 2345, 9852])

  //two number sum

  //Given an array of integers and an integer target, return indices of two numbers that add up to the target number

  function twoSum(nums, target){
    //first approach - brute force - could be  2 nested loops, add each number and compare if they match target: this would be On*2
    //second approach - would be to sort the array, create 2 pointers, one for the beginning, second to the end, and while the 
    //starting pointer is less that the end pointer, keep checking if they add up to the target, if the total is less than target, 
    //move the start pointer to towards the right, if greater than target, move end pointer towards left. Retrun the oncides of the 
    //two numbers: this woukd be O(nlogn) because we are sorting the array
    //third approach - Create a hash table and keep the record of the total amount when subtracting number from target, keep looping thru the array 
    //to check if the number is already there, if it is, return the numbers indices, if not, continue looping and adding the total that is not already 
    //there.: the time complexity is O(n) since it's transversing trhu the array at most once and the space complexity is O(n) since we adding at most
    // n time into the hash table

    const hashTable = {};
    for(let i=0; i< nums.length; i++){
      let total = target - nums[i];
      if(total in hashTable){
        return [i, hashTable[total]]
      }else{

        //this adds the number seen as key and the index of that number as value. i.e num: idx or 3:0 for an array [3,5,1,4,-8]
        //so when I find the number that matches the total I can return that index
        hashTable[nums[i]] =i
      }
    }
  }

  //three Sum

  ///Given an integer array nums, return all triplets [nums[i], nums[j], nums[k]] such that i !=j, i !=k and j !=k, and the sum is equal to zero 0


var threeSum = function(nums) {
    if(nums.length <= 1) return []
    nums.sort((a,b) => a-b);
    let triples =[]
    
    for(let i=0; i< nums.length; i++){
        if(nums[i] > 0) break;
        
        if(i === 0 || nums[i -1] !==nums[i]){
            twoSum(nums, i, triples)
        }
    }
    return triples;
}
var twoNumSum = function(nums, i, triples){
    let leftIdx = i+1;
    let rightIdx = nums.length -1;
    while(leftIdx < rightIdx){
        const result = nums[i] + nums[leftIdx] + nums[rightIdx];
        if(result < 0){
            leftIdx++
        }else if(result> 0){
            rightIdx--
        }else{
            triples.push([nums[i], nums[leftIdx], nums[rightIdx]])
            leftIdx++
            rightIdx--
            while(leftIdx < rightIdx && nums[leftIdx] === nums[leftIdx -1]){
                leftIdx ++
            } 
        }
    }
}        
        




function twoSum(nums, i, triples){
  const hash ={};
  let j = i+1;

  while(j < nums.length){
    result = -nums[i] - nums[j];
    if(result in hash){
      triples.push([nums[i], nums[j], result])
      while(j+1 < nums.length && nums[j] === nums[j + 1]){
        j++
      }
      
    } 
    hash[nums[j]] = true
      j++
  }

}




//no sort solution

function threeSum (nums){
  let res = new Set();
  let dups = new Set();
  let seen= new Map();

  for(let i =0; i<nums.length; i++){
    if(!dups.has(nums[i])){
      dups.add(nums[i])
      for(let j= i+1; j <nums.length; j++){
        let complement = -nums[i] -nums[j]
        if(seen.has(complement)  && seen.get(complement)=== i){
          let triplet= [nums[i], nums[j], complement]
          triplet.sort()
          res.add(triplet.join(','))
        }
        seen.set(nums[j], i)
      }
    }
  }

  let resOfArray = []
  res.forEach(item => resOfArray.push(item.split(',').map(item => parseInt(item))))

  return resOfArray;
}

nums = [-1,0,1,2,-1,-4]
threeSum(nums)

//longest no repeating substring
//we need to transverse our string and keep track of the last seen index of each letter
//whenever we get to each letter we are going to store the letter in a hash table with the index
//corresponding as a key/value pair
function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;
 
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}

//balance brackets
//Write a function that determines whether an input string has balanced brackets.

/** You are given an input string consisting of brackets—square [ ], round ( ), and curly { }. The input string can include other text. Write a function that returns either true if the brackets in the input string are balanced or false if they are not. Balanced means that any opening bracket of a particular type must also have a closing bracket of the same type.

An empty input string or a string without brackets can also be considered "balanced".

Examples
hasBalancedBrackets('[][(){}'); // false
hasBalancedBrackets('({)}'); // false
hasBalancedBrackets('({[]})'); // true
hasBalancedBrackets('text ( is allowed ){rwwrwrrww [] ()}'); // true */

//need to keep track of each opening bracket. we will create a stack and start treversing our string. at each chararcter in our string we will check if it's an 
//opening bracket,
//1) check if our first character is an opening bracket, if it is, we store it in our
// stack
//2) continue iterating thru the string and check again if it's an opening and add into the stack
//3) if we reach a closing bracket, first we check if our stack is empty, which means 
//we don't have any opening brackets and we can return false
//4) if we do have brackets in our stack, we want to check what our last bracket was and if corresponds to the type of the current brackt that we are at. If don't match, we can return false
//5) if they match, the we are good, so we remove that bracket form our stack, pop the value off the stack
//keep moving on thru the string, only return true if our stack is empty 
// [ (, (, [,           ]

function hasBalancedBrackets(string){
  let stack = []
  let open = '([{';
  let close = ')]}';
  let matchingBracket ={
    ")": "(", "]": "[", "}": "{"
  }
  for(const char of string){
    if(open.includes(char)){
      stack.push(char)
    }else if(close.includes(char)){
      if(stack.length === 0){
        return false
      }
      if(stack[stack.length-1] === matchingBracket[char]){
        stack.pop()
      }else{
        return false
      }
    }
  }
  return stack.length === 0
}

// hasBalancedBrackets('[][(){}')

// hasBalancedBrackets('({)}'); // false
// hasBalancedBrackets('({[]})'); // true
hasBalancedBrackets('text ( is allowed ){rwwrwrrww [] ()}'); // true */

