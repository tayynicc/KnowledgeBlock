// take in an arr and returns a single value 
// the ele is the second that is passed in 

//.reduce(accum, ele)

/* 
Write a function called sum that intakes an
array of names and returns a string of "Names: " with
all of the names attached after. Must use the .reduce()

*/

let sum = function(names){
    let fullName = names.reduce(function(accum, ele){
        return accum + " " + ele;
    }, "Names:")
return fullName; 
}
console.log(sum(['Mylo'])) // Mylo
console.log(sum(['Rick', 'Morty'])) // Rick Morty 

//you can set a default accume after the function(){} given accum )
// if you dont specify the accum it will use the first ele in arr as accum 


