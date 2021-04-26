// value considered false
    //A falsy value is something which evaluates to FALSE

// there are 9 flasey values

// false
// 0
// -0
// 0n
// "", '', `` empty string values (only strings)
// null
// undefined
// NaN
//document.all

//The string "false" is still a non-empty string so when we hit our first conditional that condition will evaluate to true!


// what are first class objects
    // can be passed into a funciton as a parameter
    // can be returned from a function
    // can be stored in a variable

// to check for a falsey value
if (!variable) {
    // When the variable has a falsy value the condition is true.
  }



var string = ""; // <-- falsy

var filledString = "some string in here"; // <-- truthy

var zero = 0; // <-- falsy

var numberGreaterThanZero // <-- truthy

var emptyArray = []; // <-- truthy, we'll explore more about this next

var emptyObject = {}; // <-- truthy


if ([] == false) // <-- truthy, will run code in if-block

if ([]) // <-- truthy, will also run code in if-block

if ([] == true) // <-- falsy, will NOT run code in if-block

if (![]) // <-- falsy, will also NOT run code in if-block
