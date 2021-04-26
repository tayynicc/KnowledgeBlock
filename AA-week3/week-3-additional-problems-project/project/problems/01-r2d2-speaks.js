/*
    Write a function r2d2Speaks that takes in a series of 0s and 1s.
    The function should console.log a 'beep' for a 0 followed by a pause of 400 ms and a 'boop' for a 1 followed by 800 ms.

    let code = [0, 1, 1, 0];
    r2d2Speaks(code);
        print 'beep'
        pause for 400ms
        print 'boop'
        pause for 800ms
        print 'boop'
        pause for 800ms
        print 'beep'
        pause for 400ms

    There are no mocha tests for this code.
    Run the following two lines beneath the function
    to see if your code demonstrates the expected behavior.

*/

// 0 = beep pause for 400 ms
// 1 = boop apuse for 800 ms

// loop throught code arr using forEach
    // if ele === 0
        // set time out pass in origional funciton and 400 as delay
            // console.log(beep)
    // if ele === 1
        // set time out pass orig func and 800 delay
            // console.log(boop)

function r2d2Speaks(code) {

    code.forEach((ele) => {
        if(ele === 0){
            setTimeout( () => {
                console.log("beep")
            }, 400)
        } else {
            setTimeout(() => {
                console.log("boop")
            }, 800)
        }
    })

}

let code = [0, 1, 1, 0];
r2d2Speaks(code);

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = r2d2Speaks;
} catch (e) {
    module.exports = null;
}
