//what is the value of a declared variable with no assigned value?

//When declaring a variable using let or var we can optionally assign a value to that variable.

//So when we declare a variable using var the default value assigned to that variable will be undefined if no value is assigned
//The same is true of declaring a variable using let. When declaring a variable using let we can also choose to optionally assign a value:

// variables left unasigned using let and var hold the value undefined


//When declaring a variable with const we must provide a value for that variable to be assigned to.
const goodbye;
console.log(goodbye); // SyntaxError: Missing initializer in const declaration
//This behavior makes sense because a const variable cannot be reassigned - meaning that is we don't assign a value when a const variable is
//declared we'd never be able to assign a new value!

//So the default assigned value of a variable declared using var or let is undefined, whereas variables declared using const need to be assigned a value.

//distinction between hoisting variable names and default values.

function hoistBuddy() {
    var hello;
    console.log(hello); // prints undefined
  }

  hoistBuddy();

//Whenever a variable is declared with var that variable's name is hoisted to the top of its declared scope with a value of undefined until a value is
//assigned to that variable name. If we never assign a value to the declared variable name then the default value of a var declared variable is undefined.

function hoistBuddy() {
    let hello;
    console.log(hello); // prints undefined
  }

  hoistBuddy()



//The following example shows the difference in hoisting between var and let declared variables:

  function hoistBuddy() {
    console.log(hello); // prints undefined
    var hello;

    console.log(goodbye); // ReferenceError: Cannot access 'goodbye' before initialization
    let goodbye;
  }

  hoistBuddy();
