///////////////////////////////1
/***********************************************************************
Write a function called `eliminateType` which takes in an array of elements
that could be of any type and returns a function. The return function should
accept a string that could be any of the following types:

- 'object'
- 'number'
- 'string'
- 'boolean'
- 'undefined'

The return function should return a copy of the input array with all elements
of the specified type removed.


// takes in arr of ele and a string
// returns a function
//should return a arr of values that are not === string

// init function takes in arr and string
// define res arr
// loop throught arr
// get each ele
  // if ele !== string
    // push ele into res array

// return res






Examples:

const smallEliminate = eliminateType([1, 'one', 2, 'two', 3, 'three']);
smallEliminate('number'); // ['one', 'two', 'three']
smallEliminate('string'); // [1, 2, 3]

const eliminate = eliminateType([2, undefined, 'world', { color: 'red' }, true, 3, [4, 5], 'hello', false]);
eliminate('number'); // [undefined, 'world', { color: 'red' }, true, [4, 5], 'hello', false]
eliminate('object'); // [2, undefined, 'world', true, 3, 'hello', false]


Hint: Remember Polya's problem solving framework!

1. Understand the problem
  * Read the problem carefully
  * Make sure you understand the examples
  * What should the returned function do?
  * Is this similar to any problems you have solved before?

2. Come up with a plan
  * Break this down into simpler steps
  * How would you write a function that eliminates all numbers from an array?
  * How would you write a function that eliminates all strings from an array?
  * How would you write a function that eliminates all booleans from an array?
  * How would you write a function that takes an array and a type and removes all values of the given type?
  * How do you write a function that returns a function?

3. Execute the plan
  * It may help to implement the intermediate steps from your plan first
  * It may help to try a brute-force solution first

4. Reflect, debug, test, refactor
  * If your tests aren't passing try coming up with your own test inputs
  * If your brute-force solution passess tests, try refactoring for simplicity
  * It's possible (not mandatory) to solve this in 1-3 lines of code!


Run tests on just this file by typing `npm test test/01-eliminate-type-spec.js`
on the command line.
[] return function
[] iterate through original array
[] check their data type against inner function parameter
[] if it's different save it in a copy array
***********************************************************************/
// takes in arr of ele and a string
// returns a function
//should return a arr of values that are not === string

// init function takes in arr
//returns funciton and take in  string
// define res arr
// loop throught arr
// get each ele
  // if ele !== string
    // push ele into res array

// return res

let eliminateType = function(arr){

    return function(str){
      let res = [];
      for(let i = 0; i < arr.length; i++){
        const ele = arr[i];
        if(typeof ele !== str){
          res.push(ele)

        }

      }
    return res;
    }

  };


  ////////// with filter

  // init function fat arrow, name param
  //return fillter (advanced array function) on arr
  // if typeof ele !== str

  // let eliminateType = (arr) => {
  //  return function (str){
  //    return arr.filter(ele => typeof ele !== str)
  //  }
  // };


  let smallEliminate = eliminateType([1, 'one', 2, 'two', 3, 'three']);
  console.log(smallEliminate('number')); // ['one', 'two', 'three']
  console.log(smallEliminate('string')); // [1, 2, 3]


  const eliminate = eliminateType([2, undefined, 'world', { color: 'red' }, true, 3, [4, 5], 'hello', false]);
  //console.log(eliminate('number')); // [undefined, 'world', { color: 'red' }, true, [4, 5], 'hello', false]
  //console.log(eliminate('object')); // [2, undefined, 'world', true, 3, 'hello', false

  // function eliminateType(arr) {
  //     // Your code here
  //     return function(str) {
  //       return arr.filter(el => typeof el !== str)
  //     }
  // }

  // function eliminateType(arr) {
  //   // Your code here
  //   return function (str) {
  //     let result = []
  //     for(let i = 0; i < arr.length; i++) {
  //       let ele = arr[i];
  //       if(typeof ele !== str) {
  //         result.push(ele);
  //       }
  //     }
  //     return result;
  //   }
  // }
  /**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
  try {
    module.exports = eliminateType;
  } catch {
    module.exports = null;
  }


  ////////////2

/***********************************************************************
Given a list of positive integers, print each integer and pause for that
many milliseconds before printing the next one.

// recursion
  //base case
    // when the array is empty return

  // recursive step (what we want to happen over and over again till we reach base )
      // arr method to remove last ele of the arr
        // shift ele off the end sore in variable
        // print elemet

  // recursive funciton call
    // use set time out as recursive call give it the origional funciton, ahifted off num as delay and the mutated array










Example:

printAndPause([200, 800, 200, 800, 200, 800])
200
// pause 200ms
800
// pause 800ms
200
// pause 200ms
800
// pause 800ms
200
// pause 200ms
800
// pause 800ms

Run tests on just this file by typing `npm test test/02-print-and-pause-spec.js`
on the command line.

***********************************************************************/


// recursion
  //base case
    // when the array is empty return

  // recursive step (what we want to happen over and over again till we reach base )
      // arr method to remove last ele of the arr
        // shift ele off the end sore in variable
        // print elemet

  // recursive funciton call
    // use set time out as recursive call give it the origional funciton, ahifted off num as delay and the mutated array


// let printAndPause = (nums) => {
//   // base case since we are shifting ele off the arr will be smaller each time
//   if(!nums.length){return};
//   // storing a number to be able to give it to the setTimeOut function as a delay
//   let number = nums.shift();
//   // printing number as required
//   console.log(number);
//   // timer to control the time recursing by giving it the main fucniton as the call back
//   // lumber is the previously shifted off element
//   // nums is the modified arr
//   setTimeout(printAndPause, number, nums);

// }


// printAndPause([200, 800, 200, 800, 200, 800])




function printAndPause(nums, delay = 0) {
// printAndPause([200, 800, 200, 800, 200, 800])
    // Your code here
    nums.forEach(num => {
      setTimeout(console.log, delay, num)
      delay += num;
    });
}

function printAndPause(nums) {
  // base case if the nums array is empty then return
  if (!nums.length) return;
  // recursive step gettig us closer to the base case by removing an element from the end of the array each time
  let num = nums.shift();
  // printing th number that is being removed
  console.log(num);
  // recursing throught the funciton passing in the number to be reasigned for tthe time out function and the new nums array
  // recursion does not always have to be in a return
  setTimeout(printAndPause, num, nums)
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = printAndPause;
} catch {
  module.exports = null;
}
//////////////3
/***********************************************************************
Write a recursive function called `mostFrequentVowel(words, counter)` which
takes in an array of words as lowercase strings and returns the vowel that shows
up the most in all the strings in the array.

If there are no vowels at all, return an empty string "".

Your function should also accept a `counter` parameter that will be an empty
object by default.

Each recursive step should count the vowels in the last string in the array
and add them to the `counter`. Return the vowel with the greatest count in
the `counter` object.


//recursive

// base case
    // if arr is empty
        // we want to determine the most frequent so init a most frequent variable and set it to zero
        // if there is no vowels return empty string so init variable
        // loop through the object using a for in loop
            // if the value of counter[char] > most frequent
                // reassign most frequent
                // reasign empty string variable to char
            // return most frequent

// recursive step
    // shift off first element
        // check if in counter
            // if not in counter object put it in and set the value to 1
            // if it is found in the counter object += 1

// recursive funciton call return funciton name passing in the new mutated array



























Only the following will be considered as vowels: 'a', 'e', 'i', 'o', 'u'.

// words = ['apple', 'pear', 'melon', 'coconut', 'lime']
// counter = {}
// mostFrequentVowel(words, counter)

// Step 0: Call `mostFrequentVowel` on the `words` array
// words = ['apple', 'pear', 'melon', 'coconut', 'lime']
// counter = {}
mostFrequentVowel(words, counter)

// Step 1: Count the vowels in 'lime'
// words = ['apple', 'pear', 'melon', 'coconut', 'lime']
// counter = { i: 1, e: 1 }
mostFrequentVowel(words, counter)

// Step 2: Count the vowels in 'coconut'
// words = ['apple', 'pear', 'melon', 'coconut']
// counter = { i: 1, e: 1, o: 2, u: 1 }
mostFrequentVowel(words, counter)

// Step 3: Count the vowels in 'melon'
// words = ['apple', 'pear', 'melon']
// counter = { i: 1, e: 2, o: 3, u: 1 }
mostFrequentVowel(words, counter)

// Step 4: Count the vowels in 'pear'
// words = ['apple', 'pear']
// counter = { i: 1, e: 3, o: 3, u: 1, a: 1 }
mostFrequentVowel(words, counter)

// Step 5: Count the vowels in 'apple'
// words = ['apple']
// counter = { i: 1, e: 4, o: 3, u: 1, a: 2 }
mostFrequentVowel(words, counter)

// Step 6: No words remaining, return 'e'
// words = []
// counter = { i: 1, e: 4, o: 3, u: 1, a: 3 }
mostFrequentVowel(words, counter)

// Example:
mostFrequentVowel(['dog', 'cow', 'pig', 'chicken', 'horse']); // 'o'
mostFrequentVowel(['dog', 'cow', 'pig', 'chicken']); // 'i' or 'o'

Run tests on just this file by typing `npm test test/03-most-frequent-vowel-spec.js`
on the command line.
[] if empty array grab char in counter with biggest value
[] take last word out of array
[] count vowels put them in counter
[] call function with modified words and counter
***********************************************************************/
//define input
// define output
// base case
    // if arr is empty
        // we want to determine the most frequent so init a most frequent variable and set it to zero
        // if there is no vowels return empty string so init variable
        // loop through the object using a for in loop
            // if the value of counter[char] > most frequent
                // reassign most frequent
                // reasign empty string variable to char
            // return most frequent

// recursive step
    // shift off first element store it in a variable
    // loop throught that word
        // check if in counter
            // if not in counter object put it in and set the value to 1
            // if it is found in the counter object += 1

// recursive funciton call return funciton name passing in the new mutated array
// const vowels = ['a', 'e', 'i', 'o', 'u'];
// let mostFrequentVowel = (words, counter = {}) => {
//     // use obj to hold the contenses as it travels

//     if(!words.length){
//         let mostFrequent = "";
//         let frequency = 0;
//         for(let char in counter){
//             if(counter[char] > frequency){
//                 frequnecy = counter[char]
//                 mostFrequent = char

//             }
//         }
//         return mostFrequent;
//     }

//     let firstEle = words.shift();
//     for(let i = 0; i < firstEle.length; i++){
//         let letter = firstEle[i];
//         if(vowels.includes(letter)){
//             if(counter[letter] === undefined){
//                 counter[letter] = 1;
//             }else{
//                 counter[letter] += 1
//             }

//         }





//     }

//  return mostFrequentVowel(words, counter)



// }




console.log(mostFrequentVowel(['dog', 'cow', 'pig', 'chicken', 'horse'])); // 'o'
console.log(mostFrequentVowel(['dog', 'cow', 'pig', 'chicken'])); // 'i' or 'o'


const VOWELS = ['a', 'e', 'i', 'o', 'u'];

const mostFrequentVowel = function(words, counter={}) {
    // your code here
    if (!words.length) {
        let mostFrequent = "";
        let frequency = 0;
        for (let char in counter) {
            if (counter[char] > frequency) {
                frequency = counter[char];
                mostFrequent = char;
            }
        }
        return mostFrequent;
    }

    let lastWord = words.pop();
    for(let i = 0; i < lastWord.length; i++) {
        let char = lastWord[i];
        if (VOWELS.includes(char)) {
            if (counter[char] === undefined) {
                counter[char] = 1;
            } else {
                counter[char] += 1;
            }
        }
    }
    return mostFrequentVowel(words, counter);
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = mostFrequentVowel;
} catch {
    module.exports = null;
}
