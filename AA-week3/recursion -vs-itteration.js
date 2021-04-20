describe how recursive function calls are added and removed from the call stack
differentiate between recursive and iterative functions
start to learn how to select a recursive or iterative approach for a given problem appropriately
debug a broken recursive algorithm by identifying and adding a base case


//meaning you can't start executing a recursive function's stack frames until you reach the base case.

//The JavaScript call stack has a size limit which varies between different browsers and even different systems!

//The limit to the amount of calls in the call stack depends on how much memory is allocated to the JavaScript program on your sytem.
//Once the stack reaches this limit, you get what's called a stack overflow.


//The program halts, the stack gets wiped out entirely, and you're left with no results wondering what you did wrong.

example

function pythagoreanCup() {
    pythagoreanCup();
};

pythagoreanCup();



let justEnoughWine = false;

function pythagoreanCup() {
    // Base case:
    // - Is `justEnoughWine` true? Return & exit.
    if (justEnoughWine === true) {
        console.log("That's plenty, thanks!");
        return true;
    }

    // Recursive case:
    // - justEnoughWine must not have been true,
    //   so let's set it and check again.
    justEnoughWine = true;
    pythagoreanCup();
};

pythagoreanCup(); //"That's plenty, thanks!"


//some JavaScript environments might have a fixed limit, while others will rely on available memory on your computer. Regardless of your environment, if you're receiving RangeErrors,
//you should refactor your function!

//Provided a base case that lets us end the recursion,
//and added an action that moves us towards the base case.
//Without changing the value of justEnoughWine, you would never enter the base case and the stack would still be at risk of growing out of control.

//The recursion examples so far have involved a single function calling itself. This situation as direct recursion


//////////when to itterate vs. wen to reccur
//itteration is when you call a funciton for each element insted of the funciton  calling itself

// recursive solutions are sometime better when the program can clealy be subdivided into smaller problems
// recursion lets you handle these problems by solving the smalles or simplets cases then building towards the full solution

//There are certain classes of problems: i.e. problems that traverse nested arrays, objects, graphs or trees (that is, data with recursive structure) which lend themselves especially
//well to recursive solutions.


countdown(startingNumber) {
    for(let i = startingNumber; i > 0; i--) {
        console.log(i);
    }

    console.log("Time's up!");
}


vs

  countdown(startingNumber) {

      if (startingNumber === 0) {
          console.log("Time's up!");
          return;
      }

      console.log(startingNumber);
      countdown(startingNumber - 1);
  }
