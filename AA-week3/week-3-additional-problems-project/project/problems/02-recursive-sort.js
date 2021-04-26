/*
    Recursive Sort

    Given an array of numbers, write a function that returns a new array of numbers sorted from lowest to highest.

    console.log(sort([])) // prints []
    console.log(sort([9])) // prints [9]
    console.log(sort([5, 4, 3, 2, 1])) // prints [1, 2, 3, 4, 5]

*/
// use recursion to sore ele from smallest to largest



//helper funciton

// helper function
            // take in arr loops through arr
                // init first ele as arr[i
                // init next as arr[i] + 1
                    // if first > next reasign next to first
                        //return first
const firstNum = (nums) => {
    let first = nums[0];
    for(let i = 1; i < nums.length; i++){
        if(first > nums[i]){
            first = nums[i];
        }
    }
    return first;
}

// base case
    // when the arr is empty return res
// recursive step
    // declare first ele

    // declare next ele as arr at 0
        // if first +1 !== next{
            //arr.pop(take off arr at 0)
        // else
            // res.push(ele)
            // reassign next to ele
        //}
    // pop off elements store in variable to check is

// recursive call
        // return orig funciton passing in modified arr

const res = [];
function sort(nums) {
    let res = []
    if(!nums.length)return res;
    let number = firstNum(nums)
    //console.log(nums.indexOf(number))
    res.push(number)
    nums.pop()
    console.log(res)
    return sort(nums);


}
console.log(sort([5, 4, 3, 2, 1])) // prints [1, 2, 3, 4, 5]
//console.log(sort([14, 5, 10, 6, 3, 4, 21, 16, 9])); // prints [ 3, 4, 5, 6, 9, 10, 14, 16, 21 ]
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = sort;
} catch (e) {
    module.exports = null;
}
