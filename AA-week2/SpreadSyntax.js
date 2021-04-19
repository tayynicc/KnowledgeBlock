

// MDN
//Spread syntax (...) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls)
//or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

// three places you can use spread
    //1.In function calls
    //2.In array literals
    //3.In object literals


    //spread is an operator will break out of it's arr
// spread is only one leve deep so it will not work on nested arrays

let arr1 = [1,2,3]
let arr2 = [4,5,6]

let arr3 = [...arr1,...arr2];

console.log(arr3) // prints [1,2,3,4,5,6]


//////////////////////////////function calls

//when passing args into a funciton you can use spread to expand itterable items, rather than having to pass each arg individually like in a for loop 
