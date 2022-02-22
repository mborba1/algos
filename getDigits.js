//gets the digit at the corresponding index 
function getDigits(num, i){
	return Math.floor(Math.abs(num)/ Math.pow(10, i)) % 10;
}
//getDigits(8762,0)
//gets to total number of digits of each number
function digitCount(num){
	if(num === 0) return 1;
	return Math.floor(Math.log10(Math.abs(num))) +1
}
digitCount(8762)
//compares all numbers and gets the numbers with max amount of digits
function mostDigits(nums){
	let maxDigits = 0;
	for(let i =0; i < nums.length; i++){
		maxDigits = Math.max(maxDigits, digitCount(nums[i]))
	}
	return maxDigits
}
//mostDigits([8762, 654, 3008, 345, 87, 65, 234, 12, 2])
function radixSort(array) {
  // Write your code here.
	let maxDigitCount = mostDigits(array);
	for (let k=0; k < maxDigitCount; k++){
		let digitBuckets = Array.from({length: 10}, () => [])
		for(let i=0; i< array.length; i++){
			let digit = getDigits(array[i], k)
			digitBuckets[digit].push(array[i])
		}
		array = [].concat(...digitBuckets)
	}
	
  return array;
}
radixSort([8762, 654, 3008, 345, 87, 65, 234, 12, 2])
