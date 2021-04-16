Identify the three keywords used to declare a variable in JavaScript
Explain the differences between const, let and var
Identify the difference between function and block-scoped variables
Paraphrase the concept of hoisting in regards to function and block-scoped variables

//A variable always evaluates to the value it contains no matter how you declare it.


// let
    //any variables declared with the keyword let allows you to reassign that variable.
    //Variable declared using let is scoped within a block.
//const
    //any variables declared with the keyword const will not allow you to reassign that variable.
    // Variable declared using const is scoped within a block
    // cannot reassign a variable declared with const 
    // use when you want something stroed and dont wat to be able to reassign it 
    // you can resuse the variable name in a diffrnet block as then that variable only has access to that block
// var
    //A var declared variable may or may not be reassigned, and the variable is scoped to a function.



/* Variables & Scope Code Demo Part 2 */

/*********** Problem 1 ***********/
function blockScope() {
    let test = 'upper scope';
    //let test = "whoops";
    //test = "whoops";
    if (true) {
        let test = 'lower scope';
        console.log(test);
    }
    console.log(test);
}
blockScope();
/* 
What will print to the console from the first console.log?
Answer: lower scope
What will print to the console from the second console.log?
Answer: 
What error will occur if we comment in the first comment?
Answer:
What will print to the console if we comment in the second comment?
Answer:
*/