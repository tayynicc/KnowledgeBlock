1.
/***********************************************************************
Write a recursive function called `sumToN` that takes in a number and returns
the sum of all the numbers from 0 to that number. Return null for any input
number below 0.

Examples:

sumToN(5) // returns 15
sumToN(1)  // returns 1
sumToN(9)  // returns 45
sumToN(-8)  // returns null
***********************************************************************/
let sumToN = function (number){
    if(number < 0){
      return null; 
    }
    if(number === 0){
      return 0; 
    }
  
    return number + sumToN(number - 1);
  }




//2. 
/***********************************************************************
Write a recursive function called `sumArray` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!

Examples:

sumArray([1, 2, 3]); //  6
sumArray([0, 1, -3]); //  -2
sumArray([1, 2, 3, 4, 5]); // 15
***********************************************************************/
function sumArray(array){
    if(array.length === 0){
      return 0; 
    }
    let firstNum = array[0];
    return firstNum + sumArray(array.slice(1));
  }

//3.
/***********************************************************************
Write a recursive function `iceCreamShop(flavors, favorite)` that takes in an
array of ice cream flavors available at the ice cream shop, as well as the
user's favorite ice cream flavor. Recursively find out whether or not the shop
offers their favorite flavor.

Examples:
iceCreamShop(['vanilla', 'strawberry'], 'blue moon'); // false
iceCreamShop(['pistachio', 'green tea', 'chocolate', 'mint chip'], 'green tea'); // true
iceCreamShop(['cookies n cream', 'blue moon', 'superman', 'honey lavender', 'sea salt caramel'], 'pistachio'); // false
iceCreamShop(['moose tracks'], 'moose tracks'); // true
iceCreamShop([], 'honey lavender'); // false
***********************************************************************/

let iceCreamShop = function(flavors, favorite){
    // if(flavors.includes(favorite)){
    //   return true; 
    // }
    // if(flavors === []){
    //   return false 
    // }
  
    if(flavors.length === 0){
      return false; 
    }
    let eachFlavor = flavors[0]
   console.log(eachFlavor)
    if(eachFlavor === favorite){
       
      return true; 
    }
    // if(!(eachFlavor.includes(favorite))){
    //   return false; 
    // }
    
    //console.log(flavors.slice(1))
    return iceCreamShop(flavors.slice(1), favorite);
  }

//4.
/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.

Examples:

range(1, 5); // [1, 2, 3, 4]
range(3, 4); // [3]
range(7, 6); // []
***********************************************************************/

function range(start, end){

    if(end <= start){
      return [];
    }
  
    return [start].concat(range(start + 1, end));
  }


//5.
/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:


reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/

// your code here

function reverse(string){

    if(string.length === 0){
      return string;
    }
  
    let length = string.length;
    let reversed = string.slice(length - 1);
  
  
    return reversed + reverse(string.slice(0,string.length - 1))
  }

//6.
/***********************************************************************
Write a recursive function called `addToTwelve` that will return true if there
are two adjacent numbers in the input array that can sum up to 12. Otherwise,
return false.

Examples:

addToTwelve([1, 3, 4, 7, 5]); // true
addToTwelve([1, 3, 4, 7, 6]); // false
addToTwelve([1, 11, 4, 7, 6]); // true
addToTwelve([1, 12, 4, 7, 6]); // false
addToTwelve([1]); // false
***********************************************************************/
let addToTwelve = function(arr){
    if(arr.length < 2 ){
      return false; 
    }
    let firstNum = arr[0];
   // console.log("firstNum " + firstNum);
  
    let secondNum = arr[1]; 
    //console.log("secondNum " + secondNum);
  
    let result = firstNum + secondNum;
    if(result === 12){
      return true;
    }
    //console.log(arr.slice(2))
    return addToTwelve(arr.slice(1))
  
  }

//7.
/***********************************************************************
Write a recursive function called `exponent` that takes two integers, 
`num` and `power`, and returns `num` raised to the `power`th power. Your
function should work when `num` or `power` are positive OR negative.

Exponents are used to represent a number being multiplied by itself a
given number of times:

4^3 = 4 x 4 x 4 = 64

Negative exponents represent the same action, but in the denominator instead
of the numerator:

4^-3 = (1/4) * (1/4) * (1/4) = 1/64.

Examples:

exponent(3, 2); // 9
exponent(2, -2); // 1/4 (or 0.25)
exponent(5, 5); // 3125
***********************************************************************/

function exponent(num, power) {
    if(power < 0){
      return (1 / exponent(num, Math.abs(power)))
    }
    //let count = 0; 
    if(power === 1){
      return num;
    }
    //count += 1; 
    return num * exponent(num, power -1);
  }

//8.
/***********************************************************************
Write a recursive function called `fibonacci` that takes an integer, `n`,
and returns the `n`th number in the Fibonacci sequence.

Not familiar with the Fibonacci sequence? Beginning with 0 and 1, we add the two
previous numbers in the sequence together to form the next one:

0, 1, 1, 2, 3, 5, 8, etc....

We count Fibonacci numbers beginning with the first 1. Take a look at the
examples below if you're unsure where to start!

Examples:

fibonacci(1); // 1
fibonacci(2); // 1
fibonacci(3); // 2
fibonacci(4); // 3

***********************************************************************/

// your code here

let count = 0;

function fibonacci(n){

  // if(n >= 0){
  //   return n;
  // }

  if(n <= 2){
    return 1;
  }

  if(count === n){
    return 0;
  }


  var firstNum = 0;
  var secondNum = 1;
  var result = firstNum + secondNum;
  var thirdNum = secondNum + result;

  firstNum = result
  thirdNum = firstNum + result; 

  console.log('count ' + count)
  count += 1;

  return thirdNum + firstNum + fibonacci(n);
}


//9.
/***********************************************************************
Write a recursive function called `factorial` that takes an integer, `num`,
and returns the factorial of `num`. Assume the value of `num` is greater
than or equal to 1.

A factorial is the number get when multiplying a number by itself minus one
all the way down to 1 (but not 0)! We represent them with an exclamation
point, also sometimes called a "bang" in programming.

5! = 5 x 4 x 3 x 2 x 1 = 120

Examples:

factorial(1); // 1
factorial(3); // 6
factorial(5); // 120
***********************************************************************/

// your code here

function factorial(num){

    if(num === 1){
      return 1;
    }
  
    return num * factorial(num - 1);
  }
  

