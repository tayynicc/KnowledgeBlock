// 3 steps to define a recursive funciton
    // funcitno calls inself
    //has a base case(end step)
    //moves closer to each case with each call

//The key here is that each recursive call MUST move the function's
//current state one step closer to the end state.

//Remember, a recursive function that doesn't move toward the base case isn't recursion: it's an infinite loop that leads to stack overflow.
// None of these are recursion!


function printArray(arr, i = 0) {

    // Base Case: index has reached the end of the array
    if (i >= arr.length) return;

    // Print the value
    console.log(arr[i]);

    // Call the function recursively,
    // moving the index one step closer to the base case.
    printArray(arr, i+1);
}


printArray([1,2,3,4,5])
1
2
3
4
5


//Any function that can be solved recursively can also be solved iteratively.



// start from the base case


Say you had to write a multiply(num1, num2) function that returns the product of num1 and num2 without using *,
 for or while. How would you go about this?

 function multiply(num1, num2) {
    // base case
    if (num2 == 0) return 0;
    if (num2 == 1) return num1;
    if (num2 == 2) return num1 + num1;
    //incrementing each time
    if (num2 == 3) return num1 + num1 + num1;
}



function multiply(num1, num2) {
    // base case
    if (num2 == 0) return 0;
    if (num2 == 1) return num1;

    return num1 + multiply(num1, num2 - 1);
}
multiply(5, 3)  // 15
