// when passing a function in to the arguments do not invoke here, the function is meant to be invoked indife the main function

// you can use anon callbacks by putting the function directly into param 

// Math.sqrt // built in function to find the sqrt of a number 

// callbacks can be optional. if you have a condition in the top of the function to verify if cb in param === undefined this can be used to run the code without passing in a cb
// if no cb is passed in and one is in the params, you will get an undefined result. 

//higher order functions
//passing as arg 
// let higherOrderFunction = function(callback){
//     callback();
//   };
  
//   let intoAFunction = function() {
//     console.log('I\'m being passed into a function');
//   };
  
//   let intoAFunctionPt2 = function() {
//     console.log('I\'m ALSO being passed into a function');
//   }
  
//   higherOrderFunction(intoAFunction);
//   higherOrderFunction(intoAFunctionPt2);

  /* 
Instructions:
Write a callback called 'upper' that:
  1. Intakes a string
  2. Returns the string in uppercase
Write a higher order function called 'concat' that: 
  1. Intakes three parameters 
    1. A string
    2. Another string
    3. An optional callback
  2. Concatenates the strings
  3. If the callback is not defined
    1. Return the concatenated string
  4. If the callback is defined
    1. Return the result of the callback
       passing in the concatenated string 
  
*/

let upper = function (str) {
    return str.toUpperCase();
};

let concat = function (str1, str2, cb) {
    let catStr = str1+ " " + str2;
    if(cb === undefined){
        return catStr;    
    } else{
        return cb(catStr);
    }
};

console.log(upper('YeS!!! '));
console.log(concat('YeS!!! ', 'I dId iT!', upper));
console.log(concat('YeS!!! ', 'I dId iT!'));