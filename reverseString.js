function reverseString(str){
    let revStr = str.split('');

    for(let i =revStr.length-1; i >= 0; i--){
       let newArr = revStr.push(i)
    }

    return newArr.join('')
// or this does the same
    //return str.split("").reverse().join("")
    
}
//or this way:
const reverse = str => str.split('').reverse().join('')
console.log(reverse('Hi My name is Andrei'))

