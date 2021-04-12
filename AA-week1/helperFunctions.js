//The key to solve an "unmanageable" problem is to break it down into chunks (functions) that are manageable.


//Decomposition
    //breaking it down


    function yellStr(str) {
        let upperString = str.toUpperCase();    // this chunck is in charge of minpulating the given string nothing else,
        return upperString + '!';
      }

      function yelledStrings(strings) {     // regular function
        let yelled = [];

        for (let i = 0; i < strings.length; i++) {      // regular for loop
          let string = strings[i];
          let newString = yellStr(string);          // this is where the first function is called on each element of the string
          yelled.push(newString);
        }

        return yelled;
      }




//  laligatSum(n)
// A number's laligat sum is the the sum of all the prime numbers less than or
// equal to that number.

//a prime numbre is a number that is divisiable by only one and itself

let result1 = laligatSum(10);
result1; //=> 17

let result2 = laligatSum(11);
result2; //=>  28

function laligatSum(num){
    let sum = 0;
}


// We should make our functions so that they are modular. If we make our code modular, and each smaller component is correct and working, then the entire system of our code will
// be working and easy to maintain. Here's a rule of thumb: if a function you wrote is large and difficult to follow, consider decomposing it by creating a helper function.
