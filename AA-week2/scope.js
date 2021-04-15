
//////////////////learning Objectives
Identify the difference between const, let, and var declarations
Explain the difference between const, let, and var declarations
Predict the evaluation of code that utilizes function scope, block scope, lexical scope, and scope chaining
Define an arrow function
Implement a closure and explain how the closure effects sco


// advantages of scope:
    // security : adds security by ensuring that variables can only be accessec by pre determined parts of the program
    // it reduces variable name collision (namespace collision) allows u to use the sma evariable anme several times without accidently overwritting the value


//////////////////////////kinds of scope

// global

// local

// block


////////////////////Global

//widest scope is represented by th windos object in browser
// adding attributes to these object makes them available throught the entire program

// things defined outside of funcitons in the blank space

// can be useful but best to avoid because the chance of name colission in the global scope is high



//////////////////local
// the socpe of a function from { } these variables are avaliable only within that funciton
        // includes
            // arguments
            //  variables
            // any variables that were already eclared when the function was defined


/////////////////// block

// a block is denoted by a oair of { }
    // if conditionals
    // for loops
    //methods
    // while loops
// when using let or const those variables are limited to the { } they are block scoped




////////////////////scope chaning
// key rule an inner scope does have acces to variables in the outter scope

// global scope
let person = "Rae";

// sayHello function's local scope
function sayHello() {
  let person = "Jeff";

  // greet function's local scope
  function greet() {
    console.log("Hi, " + person + "!");
  }
  greet();
}

sayHello(); // logs 'Hi, Jeff!


// inner can refrence outter but outter can not reffrence inner



////////////Lexical scope
//There is one last important concept to talk about when we refer to scope - and that is lexical scope. Whenever you run a piece of JavaScript that code is first parsed before it is actually
//run. This is known as the lexing time. In the lexing time your parser resolves variable names to their values when functions are nested.

//The main take away is that lexical scope is determined at lexing time so we can determine the values of variables without having to run any code. JavaScript is a language without dynamic
// scoping. This means that by looking at a piece of code we can determine the values of variables just by looking at the different scopes involved.
