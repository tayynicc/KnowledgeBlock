// write a function that is named dynamicDivider (divisor) when invoked the funciton will intake a number to be used as a divisor
// this funciton will also return a new function the inner function will accept a number and
// that run will be divided by divisor

//the problem wants us to create a function that returns a function that will then return the number passed into he outer funciton divided by the
// recived by the inner function

// setting up the outter array with given name and(divisor ) param
    // return anon function(num)
        // return divisor / num

// could refine by using fat arreo syntax
//const divide = dynamicDivider(10)


let dynamicDivider = (divisor) => (num) => num / divisor;

let halvedbyTwo = dynamicDivider(2); //returns a function
console.log(halvedbyTwo(12)); // returns 6
console.log(halvedbyTwo(18)); // returns 9

let halvedbyThree = dynamicDivider(3); // returns a function
console.log(halvedbyThree(12)); // returns 4
console.log(halvedbyThree(18)); // returns 6
