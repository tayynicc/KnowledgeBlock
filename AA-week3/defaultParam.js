//A default parameter is declared in the function signature like a regular parameter, except it is given a default value using an =.

function growNumber(num, amount = 1) {
    return num + amount;
}


//In this example, growNumber has a regular parameter, num, and a default parameter, amount. You can pass in a single number argument and it will
//increment it by the default amount:

growNumber(5);// 6

//You can also pass in the optional second argument, which would overwrite the default value for amount.


//Default parameters can be used to add flags to functions. Consider this function which calculates the sum of a list of numbers. You can add a "verbose" flag which defaults to false but
//can be turned on to print out the intermediate sums

function sum(nums, verbose = false) {
    let total = 0;
    for (let i = 0 ; i < nums.length ; i++) {
        if (verbose) {
            console.log(total + " + " + nums[i] + " = " + (total + nums[i]));
        }
        total += nums[i];
    }
    return total;
}

nums = [1, 2, 3, 4];

sum(nums);// 10


sum(nums, true);
0 + 1 = 1
1 + 2 = 3
3 + 3 = 6
6 + 4 = 10
// 10
