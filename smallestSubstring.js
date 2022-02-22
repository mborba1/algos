function smallestSubstringContaining(bigString, smallString) {
    // Write your code here.
      let targetCharCount = getCharCount(smallString)
      let substringBounds = getSubstringBounds(bigString, targetCharCount)
      return getStringFromBounds(bigString, substringBounds)
  }
  
  function getCharCount(string){
      let charCounts={}
      for(const char of string){
          increaseCharCount(char, charCounts)
      }
      return charCounts;
  }
  
  function getSubstringBounds(string, targetCharCount){
      let substringBounds = [0, Infinity];
      let substCharCounts = {};
      let numUniqueChars = Object.keys(targetCharCount).length;
      let numUniqueCharsDone = 0;
      let leftIdx = 0;
      let rightIdx = 0;
    //Move the rightIdx to the right in the string until you've counted
    //all of the target characters enough times
      while(rightIdx < string.length){
          if(!(string[rightIdx] in targetCharCount)){
              rightIdx ++;
              continue;
          }
          increaseCharCount(string[rightIdx], substCharCounts)
          if (substCharCounts[string[rightIdx]] === targetCharCount[string[rightIdx]]){
              numUniqueCharsDone++;
          }
  
      // Move the leftIdx to the right in the string until you no longer 
      //have enough of the target characters in bewteen the leftIdx and the
      //rightIdx. Update the sunstringsBouns accordingly
          while(numUniqueCharsDone === numUniqueChars && leftIdx <= rightIdx){
              substringBounds = getCloserBounds(leftIdx, rightIdx, substringBounds[0], substringBounds[1]);
        if(!(string[leftIdx] in targetCharCount)){
          leftIdx++;
          continue;
        }
        if(substCharCounts[string[leftIdx]] === targetCharCount[string[leftIdx]]){
          numUniqueCharsDone--
        }
        decreaseCharCount(string[leftIdx], substCharCounts);
        leftIdx++;
          }
      rightIdx++;
      }
    return substringBounds;
  };
  
  function getCloserBounds(idx1, idx2, idx3, idx4){
    return idx2 - idx1 < idx4 - idx3 ? [idx1, idx2] : [idx3, idx4];
  };
  
  function getStringFromBounds(string, bounds){
    const [start, end] = bounds;
    if(end === Infinity) return '';
    return string.slice(start, end + 1);
  }
  
  function increaseCharCount(char, charCounts){
      charCounts[char] = (charCounts[char] || 0) + 1;
  }
  
  function decreaseCharCount(char, charCounts){
          charCounts[char] --
  }
  