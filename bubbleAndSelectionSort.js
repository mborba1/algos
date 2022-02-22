 //bubble sort              //44
 const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

 // function bubbleSort(array) {
 //   let temp =0;
 //   for(let i = 0; i < array.length; i++){
 //     for(let j=i+1; j< array.length; j++){
 //       if(array[i] > array[j]){
 //         temp = numbers[i]
 //         array[i] = array[j];
 //         array[j] = temp
         
 //       }
 //     }
 //   }
 //   return array
    
 // }
 
 // bubbleSort(numbers);
 //console.log(numbers);
 
 //selection sort
 
 function selectionSort(array){
   for(let i=0; i< array.length; i++){
     let min = i;
     for(let j= i+1; j< array.length; j++){
       if(array[j]< array[min]){
         min=j
       }
       let temp = array[i]
       array[i]=array[min]
       array[min]=temp
     }
   }
   return array
 }
 
 console.log(selectionSort(numbers))
 //console.log(numbers)
 