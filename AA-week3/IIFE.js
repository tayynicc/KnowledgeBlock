// stands for immediately invoked function expression
// built in JavaScript functionality that will allow you to define an anonymous function and then immediately run that function as soon as it has been defined.

//A function expression is when you define a function and assign that function to a variable

//example

// here we are assigning a named function declaration to a variable
const sayHi = function sayHello() {
    console.log("Hello, World!");
  };

  sayHi(); // prints "Hello, World!"


// anon funciton
// here we are assigning an anonymous function declaration to a variable
const sayHi = function() {
    console.log("Hello, World!");
  };

  sayHi(); // prints "Hello, World!"


//Now what if we only ever wanted to invoke the above anonymous function once? We didn't want to assign it a name?
//To do that we can define an Immediately-Invoked Function Expression.

//The typical syntax we use to write an IIFE is to start by writing an anonymous function and then wrapping that function with the grouping operator, ( ).

//After the anonymous function is wrapped in parenthesis you simply add another pair of closed parenthesis to invoke your function.


// 1. wrap the anonymous function in the grouping operator
// 2. invoke the function!
(function() {
    statements;
  })();


//Our above function will be defined, invoked, and then will never be invoked again.
//What we are doing with the above syntax is forcing JavaScript to run our function as a function expression and then to invoke that function expression immediately.

//attempting to assign an IIFE to a variable will return the value of the invoked function.

let result = (function() {
    return "party!";
  })();

  console.log(result);

 //So we can use IIFEs to run an anonymous function immediately and we can still hold onto the result of that function by assigning the IIFE to a variable.

 //IIFEs keep functions and variables private

//Using IIFEs ensures our global namespace remains unpolluted by a ton of function or variable names we don't intend to reuse.
//IIFEs can additionally protect global variables to ensure they can't ever be read or overwritten by our program.

//Meaning that no other part of our program can ever access this function again.
