// .map() is an array method and it will return an array with the same length as the one passed in 
// it will mutate every element of the arr in the same fashion and return a new modified arr 
//it does not mutate orogional arr but returns a new arr containing each element of the orgional arr mutated by function 

/* 
Write a function called timesTwo that intakes an
array of numbers and returns a new array where all 
of the numbers are multiplied by 2. You must use .map()

timesTwo([1, 2, 3]) => 
 => 
*/

let timesTwo = function(arr){
    let res = arr.map(function(ele){
        return ele * 2; 
    })
return res; 
}

console.log(timesTwo([1, 2, 3])) // [2, 4, 6]
console.log(timesTwo([-1, 6, 0])) //[-2, 12, 0]

// can take in element, index and array 
// must have a return inside map and that return is stored in the variable before map statement. 

let timesTwo = function(arr){
  return arr.map(function(ele){
        return ele * 2; 
    })
}

// can also return like this ^