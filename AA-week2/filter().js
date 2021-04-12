// loop thru arr and choose elements based on conditions 
// take in function(ele,index,array)

//filter returns true or false 
// the condition goes in the inside of the filter function 

// return new arr containg all ele that meet that condition

/* 
Write a function called evens that intakes an
array of numbers and returns a new array of only the
even numbers from the original array. You must use
.filter()

evens(]) => 
events() => 
*/

let evens = function(arr){
    let newArr = arr.filter(function(ele){
     return ele % 2 === 0; 
    })
return newArr
}
console.log(evens([1, 2, 3])) //[2]
console.log(evens([42, 44, 45])) //[42, 44]