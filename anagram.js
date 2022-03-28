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
   //here we are comparing the second string with the letters already on the object, so we loop thru the second string
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
   