/* Dynamic Slice

    Write a function that accepts two numbers, and returns another function that accepts an array.
    The new function, when invoked, should return a copy of a portion of the array between the indices of
    the arguments passed to the first function. Do not use the built-in Array#slice method.

    If the start index is less than 0 the returned function should slice from the beginning of the array.
    Similarly if the end index is greater than the length of the array, the returned function should
    slice up to the end of the array. See below for examples.

    const slicer = dynamicSlice(2,4);
    console.log(slicer([0, 1, 2, 3])); // prints [ 2, 3 ]
    console.log(slicer([2, 4, 'hello', false])); // prints ['hello', false]


*/
//inital function accepts two numbers and returns a function that take in an array
    // inner function return copt of portion od array between the satrt and end index do not use slice method '

// if start is less than 0 return funciton should slice from beginning of arr
// if index is greater than length of arr slice up to end of arr

// return anon fat arrow function
    // if start > 0
        // let res = []
        // loop through arrs starting at 0 up to end
            // res.push(ele)
    // else if end > arr.length
        // let res =[]
        // loop through arr at start and up to arr.length
        // res,push(ele)
    // else if start > 0 && end > arr.length
        //let res = []
        // regular for loop
        // res.push()


        function dynamicSlice(start, end) {
            debugger
return (arr) => {
    if(start < 0 && end > arr.length){
        debugger
        const res = [];
        for(let i = 0; i < arr.length; i++){
            res.push(arr[i])
        }
        return res;
    }else if(end > arr.length){
        debugger
        const res = [];
        for(let i = start; i > arr.length; i++){
            res.push(arr[i])
        }
        return res;
    } else if (start < 0){
        debugger
        const res = []
        for(let i = 0; i <= end; i++){
            debugger
            res.push(arr[i]);
        }
        debugger
        return res;
    } else {
        const res = [];
        for(let i = start; i < end; i++){
            res.push(arr[i]);
        }
        return res;
    }

}
}
const slicer = dynamicSlice(2,4);
console.log(slicer([0, 1, 2, 3])); // prints [ 2, 3 ]
console.log(slicer([2, 4, 'hello', false])); // prints ['hello', false]
const slicer2 = dynamicSlice(-2, 10);
console.log(slicer2([0,1,2,3])); // prints [0, 1, 2, 3]
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = dynamicSlice;
} catch (e) {
    module.exports = null;
}
