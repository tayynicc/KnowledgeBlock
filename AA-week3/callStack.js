//The call stack is a structure that JavaScript uses to keep track of the evaluation of function calls
//It uses the stack data structure. stack = pattern of organizing
// For our current use of a stack, the items being organized are the function calls that occur during the execution of our program

//stack as a vertical pile that obeys the following pattern:

    //new items must be placed on top of the pile - we refer to this as pushing a new item to the stack
    //at any point, the only item that can be removed is the top of the pile - we refer to this as popping the top item from the stack

//Js call stack = stack frames

// stack frames describe the itms that are being pushed and popped

//we can now identify two ways that JavaScript leverages these stack mechanics during runtime:

    //when a function is called, a new frame is pushed onto the stack.
    //when a function returns, the frame on the top of the stack is popped off the stack.


    function foo() {
        console.log("a");
        bar();
        console.log("e");
      }

      function bar() {
        console.log("b");
        baz();
        console.log("d");
      }

      function baz() {
        console.log("c");
      }

      foo();

// prints a b c d e


//The only time a frame may entirely leave that stack is when it is popped due to a function return. Bear in mind that a function can return due to a explicit return with a literal
//line like return someValue; or it can implicitly return after the last line of the function's definition is executed.

//This means the top frame is popped, leaving the stack empty. Once the stack is empty, our program can exit


        //the frame on the top of the stack corresponds to the function currently being executed
        //calling a function will push a new frame to the top of the stack
        //returning from a function will pop the top frame from the stack


//For example, a stack frame will contain data about a specific function call such as local variables, arguments, and which line to return to after the frame is popped!


//The use of a single call stack leads to a single thread of execution! The JavaScript runtime can only perform one "command" at a time and the one "command" currently being executed is
//whatever is at the top of the stack.
