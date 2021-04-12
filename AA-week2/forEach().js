/* 
Write a function called hello that intakes an 
array of names and prints "Hello," plus the name, for
each name. Must use .forEach()

hello(['Mylo', 'Buster']) prints 'Hello, Mylo', 'Hello, Buster'
*/


let sayHello = function (names){
    names.forEach(function(ele, i ,arr){
    console.log ("hello " + ele)

    })
}  
console.log(sayHello("taylor"));


// can take in 3 params 
    // current element 
    // index
    // original arr

// for each is not used for its return value only for its looping side effects

// there is no return value for forEach, no reason to put one in there 
// to use forEach to return a value you must push it out of the for each function to/ store it or return it 

// no conditionals 