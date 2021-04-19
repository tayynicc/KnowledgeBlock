

//Given two objects, return an array of values that are present in both objects
    // create array of values
    // filtering through the array and meeting contiotn
    // returning a function


function commonValues(obj1, obj2) {
// creating an array of the values of both objects
    let valuesObj1 = Object.values(obj1);
    let valuesObj2 = Object.values(obj2);
        // filtering throught them
    return valuesObj1.filter(function(ele){
        /// returns array of values that meet the condition
        return valuesObj2.includes(ele)
    })
}
// const cat = {color: 'white', legs: 4, favoriteFood: 'sushi'};
// const bunny = {color: 'white', favoriteFood: 'carrots'};
// const human = {hobbies: ['running', 'painting'], legs: 4, favoriteFood: 'sushi'};
// const vehicle = { wheels: 4, color: 'red'};

// console.log(commonValues(cat, bunny)); // prints ['white']
// console.log(commonValues(cat, human)); // prints [4, 'sushi']
// console.log(commonValues(human, vehicle)); // prints [4]





//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






/*
    Character count:
    Write a function that takes in a string and returns an object that stores each character's count
    with characters as keys and the number of occurrences as values.

*/


function characterCount(string) {
    // setting return object to populate
    let resObj = {};
    // loop throught th string
for(let i = 0; i < string.length; i++){
    //grab each character
	let char = string[i];
    //cheacking if key is present in resobject (close to proces of pushing in array)
    // if it is not found in the array
  if(resObj[char] === undefined){
      //put the current char into the res array as key  and set value to one occurance
  	resObj[char] = 1;
      // if the current char is found as a key in the res obj increase to value (occurance) by 1.
  } else{
    resObj[char] += 1;
  }

}

return resObj;
}

console.log(characterCount('mississippi')); // prints {m: 1, i: 4, s: 4, p: 2}
console.log(characterCount('cat')); // prints {c: 1, a: 1, t: 1}
console.log(characterCount('What time is it?')); // prints {W: 1, h: 1, a: 1, t: 3, ' ': 3, i: 3, m: 1, e: 1, s: 1, '?': 1}


//////////////////////////////////////////////////////////////



// Write a function `keyValueDuplicates(obj)` that takes an object as
// an argument and returns an array containing all keys that are also
// values in that object.


// takes in object
function keyValueDuplicates(obj) {
	let res = [];
    //pull ar array of keys
	let keys = Object.keys(obj)
    // and an array of the values
	let values = Object.values(obj)

	keys.forEach(function(ele){
        //chackinf if each individual key is found in the values array.
		if(values.includes(ele)){

            res.push(ele)
		}

    })
    // returns array
    return res;
}


obj1 = {"orange": "juice", "apple": "sauce", "sauce": "pan"}
keyValueDuplicates(obj1) // ["sauce"]

obj2 = {"big": "foot", "foot": "ball", "ball": "boy", "boy": "scout"}
keyValueDuplicates(obj2) // ["foot", "ball", "boy"]

obj3 = {"pizza": "pie", "apple": "pie", "pumpkin": "pie"}
keyValueDuplicates(obj3) // []







/////////////////////////////////////////////////////////////////////////////////////////////



// Write a function using fat arrow syntax, `salesTax` that takes in an arbitrary
// number of arguments as prices, adds them up and returns a string containing the
// sales tax with a dollar sign in front. Use a tax percentage of 9%.



let salesTax = (...prices) => {
    // putting pirices in an array to run a method on
    let allPrices = [...prices]
    //reducing array into one sum
    let sum = allPrices.reduce(function(accum, ele){
       accum += ele
      return accum

    })
    // adding tax and puttting it to 2 decimal places
    let taxTotal = (sum * .09).toFixed(2)
    return "$" + taxTotal;
}





///////////////////////////////////////////////////////////////////////////////////////


// Write a function called `shoppingList(list)`. The shoppingList function will
// take in a starting list as an array and return a new function that will allow
// us to add to the list. When that return function is invoked with an
// argument, it will add the argument to the list and return the list.


function shoppingList(list) {
    //storing the given because that will be used at every itteration or new arg
    let completeList = list;
    // when invoked wiht new item
    return function(newItem){
        //push new item onto origional lose
      completeList.push(newItem);
      return completeList;
    }

  }

const clothesList = []
const addToClothesList = shoppingList(clothesList);
addToClothesList('tshirt'); // returns ['tshirt']
addToClothesList('pants'); // returns ['tshirt', 'pants']
console.log(clothesList); // ['tshirt', 'pants']




///////////////////////////////////////////////////////////////////////////////


// Write a function `pickyMyMap` that accepts an array and a callback as
// arguments. The function should call the callback for each element of the
// array, passing in the element and return a new array of the results of
// each call to the callback function. If the result of the callback function
// returns something falsey, then do not add it in the result array.


function pickyMyMap(array, cb){
    // result array to push onto
	let res = [];
	for(let i = 0; i < array.length; i++){
        //curent ele
		let ele = array[i];
        //result of running each ele throught the callback
		let result = cb(ele);
        // checking if the result is not equal to false or 0 (falsey values)
		if(result !== false && result !== 0){
            // pushing the results of ele that meet the condition
			res.push(cb(ele))
		}
	}
return res
}



const nums = [1, 2, 3, 4];
pickyMyMap(nums, (num) => num - 2); // [-1, 1, 2]

const booleans = [true, false, true, false, true];
pickyMyMap(booleans, (boolean) => !boolean); // [true, true]



//////////////////////////////////////////////////////////////////
// Write a function `duplicateCharMinCount(string, minCount)` that will takes
// a string as an argument and returns an array of characters that show up
// at least `minCount` number of times. The string will have at least one
// character.



function duplicateCharMinCount(string, minCount) {
    let counter = {};
       for (let i = 0; i < string.length; i++) {
           let letter = string[i];
           if (!(letter in counter)) {
               counter[letter] = 1;
           } else {
               counter[letter] += 1;
           }
       }
     let res = []
       for (let key in counter) {
           let val = counter[key]
           console.log(val)
           if(val >= minCount){
               res.push(key)
           }
           return res;
       }

   }
