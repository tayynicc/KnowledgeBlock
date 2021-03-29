//1.Label variables as either Primitive vs. Reference

// primitive /////
// these are immutable data types,
//strings
//numbers
//booleans

// refrence /////
// there is only one refrence variable and that is
// object

// object is a data type used to store various keyed collections


//2.Identify when to use . vs [] when accessing values of an object

// dot notation vs bracket notation
// Dot notation is easier to write as it uses less code and with that makeing it easier to read
// but when using it you can not use variables as keys
//and the keays cannot contain numbers as their first character
// dot notation is used INSIDE the object wheres bracket notation is used to call on the key
object.key

//////////5 Examples of Dot Notation ///////////

    let myDog = {
  name = "Yo-yo",
  breed = "Mutt",
  color = "Brown",
  sizelb = 70,
  age = 10,
  }
//  object key  value


  console.log(myDog);
  // prints {name:'Yo-yo' , breed: 'Mutt', color: 'brown', sizelb: 70 , age: 10}

//where as bracet notation you can use variables that are assigned to string values.
// it is also okay to use variables and stienfs tohat star with numbers

object['1key']

/////////// 5 Examples of Bracket Notation//////////////

let myCat ={
  name: "onyx",
  color: "grey",
  weightlbs: 9,
  food: {wet: "fancy feast", dry:"Iams" }
}

console.log(myCat);
// prints {
//   name: "onyx",
//   color: "grey",
//   weightlbs: 9,
//   food: {wet: "fancy feast", dry:"Iams" }
// }


//3.Use the obj[key] !== undefined pattern to check if a given variable that contains a key exists in an object
// first what is obj[key] !== undefined saying?
//if key is in object is not eaqual to undefined then that
// key value can be found in the object

////////////5 pratice problems////////////////////
1.
let myCat ={
name: "onyx",
color: "grey",
weightlbs: 9,
food: {wet: "fancy feast", dry:"Iams" }
}

function ifTrue(obj, key ){
if (obj[key] !== undefined){
  return true;
} else{
  return false;
}
}

console.log(ifTrue(myCat,"color")); // => true
console.log(ifTrue(myCat, "eye color")) // => false

2.
let obj1 = {
name : "taylor",
age: 21 ,
height: 5.5,
eyeColor: "hazel",
}

let obj2 = {
name : "Dillon",
age: 18,
height: 6,
eyeColor: "blue",
}

function trueOTwo(obj, key){
if(obj[key] !== undefined){
  return true;
} else {
  return false;
}
}

console.log(treuOfTwo((obj1,obj2), "age")); // => true
console.log(trueOfTwo(obj1, "job")); // => flase
console.log(trueOfTwo(obj2, "height")); // => true
console.log(trueOTwo((obj1, obj2), "location")); // false


3.
let obj1 = {
name : "taylor",
age: 21 ,
height: 5.5,
eyeColor: "hazel",
}

let obj2 = {
name : "Dillon",
age: 18,
height: 6,
eyeColor: "blue",
}

function doSomething(obj, key,){
if (obj[key] === undefined){
  return "invalid search term";
} else{
  return obj[key];        // this is returning th value of key when that key is found
}
}

console.log(doSomething(obj2, "age")); // => 18
console.log(doSomething(obj1, "job")); // => invalid search term
console.log(doSomething((obj1, obj2), "name")); // Dillon


3.

let obj1 = {
name : "taylor",
age: 21 ,
height: 5.5,
eyeColor: "hazel",
}

let obj2 = {
name : "Dillon",
age: 18,
height: 6,
eyeColor: "blue",
}

function conCat(obj, key){
let value = obj[key];
if (obj[key] !== undefined){
  return key + "=" + value;
} else {
  return "key not found";
}
}

console.log(conCat(obj1, "eyeColor")); // eleColor=hazel
console.log(conCat(obj1, "name", "age")); // name=taylor
console.log(conCat(obj2, "location"));

//4.Utilize Object.keys and Object.values in a function

// object.keys iterates throuhgt the object and grabs the keys

let obj2 = {
name : "Dillon",
age: 18,
height: 6,
eyeColor: "blue",
}

let objKeyz = function (){
return Object.keys(obj2);
console.log(Object.values(obj2));
}

console.log(objKeyz(obj)); // prints ['name', 'age', 'height', 'eyeColor']
objKeyz(obj2) // prints "Dillon" , 18 , 6 , "blue"


//5.Iterate through an object using a for...in loop
//for...in itterates ocer all enumerater properties of an object that are keyed by stings.

// for (variable in object){
//  statement
//}

//variable
//A different property name is assigned to variable on each iteration.
//object
//Object whose non-Symbol enumerable properties are iterated over.

//Objects created from built–in constructors like Array and Object have inherited non–enumerable
//properties from Object.prototype and String.prototype

// for in loop does not gaurentee that the indexes are itterated over in order
//6.Define a function that utilizes ...rest syntax to accept an arbitrary number of arguments

function restFunc(...allOtherEle){
let sum = 0;
allOtherEle += sum;
return sum;
}

console.log(restFunc(2,3,4,5)); //
console.log(restFunc(3,3)); //
console.log(restFunc(5,6,7,8,9)); //

//7.Use ...spread syntax for Object literals and Array literals






//8.Destructure an array to reference specific elements


let array = [ ' robot' , ' eletronices', ' iphone' , 'computer'];

let [machine, parts, product, tool] = array

console.log(machine); // robot
console.log(tools); // computer
console.log(helper); // undefined




9.Destructure an object to reference specific values

// to refrence specific values you cn use dot notation or backet notation.

let human = { name: "Jim" , city: "Scranton", job: "Co-Regional Manager"};
let name, city, job;

({name, city, job} = human);

console.log(job); // Co-Regional Manager
console.log(city); // Scranton
console.log(name); // Jim

let employeeNum2 = {name:"Dwight" , location:"classified", milkPrefrence:"Goat"};
let name, location, milkPrefrence;
({name, location, milkPrefrence});

console.log(location); // classified
console.log(birthday); // undefined
console.log(milkPrefrence); // Goat

/////////give a new variable name in an object

let person = {name:"Creed Bratton", job:"Qual...que..Quaibadie-ashwhitz", status:"WANTED"}

let {name:alise, job:cover, status} = person;

console.log(alise); // Creed Bratton
console.log(cover); // Qual...que..Quaibadie-ashwhitz
console.log(status); // WANTED
console.log(age); // undefined

//Swapping Values using the Destructuring Assignment
//One more thing. We can use the destructuring assignment to swap the values of variables:
10.Write a function that accepts an array as an argument and returns an object representing the count of each character in the array

let arr1 = ["Michael", "Pam" , "Jim", "Angela"]


function people1(arr1){
let finalObj = {};

arr1.find(letter)

}




11.Did you find this lesson helpful?




12.In this article, you learned the importance of having green squares in
your GitHub profile's green garden. You also learned how to create a
private repository on GitHub and set up GitHub's green garden to track
your contributions to private repositories. Finally, you learned when to
commit for your App Academy projects.

13.Create objects using correct syntax with a variety of values.
// The Object class represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. Objects can be created using
//the Object() constructor or the object initializer / literal syntax.

// the object constrctor creates object wrapper got given key. if the value i null or undefined it will return a empty object
// otherwise it will return the value associated with the given key

function determine (obj1){
if(name !== undefined ){
 return obj1[name]
}
}

let obj1 = {
name:"Pam",
job: "Reception"
status: "Engaged"
}

console.log(obj1) // {name: "Pam", job:"Reception", status:"Engaged"}

let obj2 = {
name:"Meridith",
job:"Supplier Relations",
kids: 1,
}

console.log(obj2) // {name:"Meridith", job: "Supplier Realations" kids: 1}
14.Identify that an object is an unordered collection of values.
15.Key into an object to receive a single value using both Bracket and Dot notation.
16.Use Bracket notation to set a variable as a key in a Object.
17.Implement a check to see if a key already exists within an Object.
18.Understand how object precedence fits in with dot notation for objects.

////////////////////////Objects/////////////////////////////
// objects are indexed through keys
// order is not gaurenteed while iterating
// you can create new key-value pairs by using bracket notation [] and assingment keys are represented with strings
car["color"] = "blue" ;
// "color" is the key "blue" is the value
// if you try to access a key that does not exxist it will return undefined
// you can check is a key exist with
if(car["weight"] === undefined ){
return false;
}
// since this is acommon patternthe prefrerde method to check if an object exist
// in a key is to use the in operator
if("color" in car){
 return true;
}
// you can use vriables as keys

let newVariable = "weight"
car[newVariable] = 1000;
car[color: "blue" , seats: 2, weight: 1000]
19.Label variables as either Primitive vs. Reference.


//20.Identify when to use dot notation (.) vs. bracket notation ([]) when accessing values of an object.
// you use bracket notation when storing in vaiable ex let value = obj[key]
// you can use either bracket or Dot notation to assign key-value pairs
// the most noticable diffrence is when you use dot notaion there is no need to use the quotation marks for the string
let dog = {}
dog["size"] = 12;
//////OR
dog.bark = "Bowowowo";
dog = { size:12, bark:"Bowowow"}

// dot notaion
// easier to read
// easier to write
//cannot use variables as keys
// keys can not contain numbers as thir first character
    object.1key
// Bracket Notation
// yu can use variables that are assinged to keys as keys
// you can use variable and strings that start with numbers

let people ={
 name: "Erin",
 job: "reciption",
 state: "Penn"
}

console.log(person.job); // reception
console.log(person.age); // undefined
console.log(person.state); // Penn
//21.Use the obj[key] !== undefined pattern to check if a given variable that contains a key exists in an object.
let people ={
name: "Erin",
job: "reciption",
state: "Penn"
}

function determine(obj,key){
if(obj[key] === undefined){
return "Key Not Found"
} else {
return obj[key]
}
}
console.log(determine(people,"age")); // prints: Keys not Found
console.log(determine(people, "name")); // prints: Erin
console.log(determine(people, "state")); // prints: Penn

22.Utilize Object.keys and Object.values in a function.
//used to iterate throuugh keys
// it is a method = (function)
// Object.keys( ) accepts an object as the argument and returns an array of the KEYS in the given object

let person = {
name: "Angela Martin"
title: "Head Accountant"
status: "Has several cats."
}

Object.keys(person) // ['name', 'title' , 'status']

// Object.vlaues method accepts an object as the arg and returns an array of the values within that object
let person = {
name: "Angela Martin"
title: "Head Accountant"
status: "Has several cats."
}

Object.values(person)  // "Angela Martin" , "Head Accountant" , "Has several cats"

// if you want both key and vlaue correspondance

Object.entries

// Object.entries method accepts an object as the arg and returns an array of [key,value] pairs within that object
let person = {
name: "Angela Martin"
title: "Head Accountant"
status: "Has several cats."
}

Object.entries(person)[['name',"Angela Maritn"],[ 'title', "Head Accountant"], ['status', "has several cats"]]
23.Iterate through an object using a for...in loop.
// you can use special syntax to iterate trhought eack KEY of an object
// this is super usefull for looping thoruhg both keya and values

for (let variable in object){
statements
}

let people ={
name: "Erin",
job: "recipetion",
state: "Penn"
}

for(let currentKey in object){
console.log(currentKey);      // prints name , cats
}
// this prints all keys in the object on each itteration the key is being assigned to currentKey variable

// if you want to access the values of the keys use bracket notation
for(let key in obj) {
let value = obj[key];   // you can only declare this wiht bracket notation
console.log (value);   //prints:"Erin" "recipetion" "Penn"
}

let employees = {
manager: "Michael Scott",
assistantToManager: "Dwight Shrutte",
accounting:"Oscar Martinez"
}

for(let title in employees){     // title is basically your index
let person = employees[title];
console.log(person);
}
// prints Michael Scott Dwight Shrutte Oscar Maritinez

//A method is just a key-value pair where the key is the function name and the value is the function definition!
//A method is essentially a function that belongs to an object.

let dog = {
name:"fido"
}
dog.bark = function (){
console.log("bark bark!");
};
dog[speak] = function (string){
cosole.log("woof" + string + "WOOF!!");
}
dog.bark(); // prints bark bark
dog.spak("pizza"); // prints "woof pizza WOOF!!"

// you can also give them functions when you initilize them

let dog2 = {
name:'Rover'

bark: function (){
 console.log("Bork Bork!");
}

speak: function (string){
 console.log("BOOOOOORKKKKK" + string );
}

}

dog2.bark(); //prints BOrk Bork!
dog2.speak("ya Maammaaa"); // "BOOOOOOORKKKK ya Maammaaa"
//A method is just a function that belongs to an object. To invoke, or call, a method we need to
//specify which object is calling that method.
24.Define a function that utilizes ...rest syntax to accept an arbitrary number of arguments.

25.Use ...spread syntax for Object literals and Array literals.

26.Destructure an array to reference specific elements.

original way =
let array = [ 'blue' , ' red' , 'green' 'yellow']
let firstColor = array[0];
let secondColor = array[1];
console.log(firstColor) // blue
console.log(secondColor) // red

// array destructuring
// wrap arpund an array with the names of the variables you want the values to be associated with and make it = to thae array itself

let array = [ 'blue' , ' red' , 'green' 'yellow']
let [firstColor,secondColor,Thirdcolor]
console.log(firstColor) // blue
console.log(secondColor) // red
console.log(thirdColor)// green

//////destructuring objects

//destructure this obj into 2 variables name/ instrements
let obj = {name:"ronnie" instruments:["panio" "celo"]}
let {name, instruments} = obj
console.log(name); // "ronnie"
console.log(instruments); // "["panio" "celo"]"

//to change name of key

let {name, instruments:music}
console.log(music); // ["panio" "celo"]

//destructuring nested objects

27.Destructure an object to reference specific values.

28.Write a function that accepts an array as an argument and returns an object representing the count of each character in the array.
//////////////////////////Callbacks////////////////////////////
29.Given multiple plausible reasons, identify why functions are called “First Class Objects” in JavaScript.

//they can be stored in a variable, an object, or an array
//they can be also be pased as an argument into a function
//functions can be returned from functions



30.Given a code snippet containing an anonymous callback, a named callback, and multiple console.logs, predict what will be printed.




31.Write a function that takes in a value and two callbacks. The function should return the result of the callback that is greater.





32.Write a function, myMap, that takes in an array and a callback as arguments. The function should mimic the behavior of Array.map.




33.Write a function, myFilter, that takes in an array and a callback as arguments. The function should mimic the behavior of Array.filter.





34.Write a function, myEvery, that takes in an array and a callback as arguments. The function should mimic the behavior of Array.every.
Scope




35.Identify the difference between const, let, and var declarations.




36.Explain the difference between const, let, and var declarations.
37.Predict the evaluation of code that utilizes function scope, block scope, lexical scope, and scope chaining.
38.Define an arrow function.
39.Implement a closure and explain how the closure effects scope.
////////////////////Scope//////////////////////////////////////
40.Identify the difference between const, let, and var declarations
41.Explain the difference between const, let, and var declarations
42.Predict the evaluation of code that utilizes function scope, block scope, lexical scope, and scope chaining
43.Define an arrow function
44.Implement a closure and explain how the closure effects scope
////////////////////////variables////////////////////////////////
45.Identify the three keywords used to declare a variable in JavaScript
46.Explain the differences between const, let and var
47.Identify the difference between function and block-scoped variables
48.Paraphrase the concept of hoisting in regards to function and block-scoped variables
/////////////For Each Demo///////////////////////
//use to itterate over arrays in order just like a for loop
//begin by refrencing array then call it like anyother array method
//you give it a funciton

array.forEach(function(){

})

// you dont need to gie the function a name  just set it up like a regualr funciton
// have it take in a variable for the current element you are itterating throuhg

let people = [ 'Michael', 'Stanley', 'Karen', 'Hannah']

people.forEach(function(currentEle){
console.log(people)

});

//prints: Michael Stanley Karen Hannah

// you can accept additional arguments to inner function to acces the index
let people = [ 'Michael', 'Stanley', 'Karen', 'Hannah']

people.forEach(function(currentEle, index){
console.log(people)
console.log(index);
console.log('---');

});

prints // Michael 0 --- Stanley 1 --- Karen 2 --- Hannah 3 ---

// you can also accept the entire array into the for each function

let people = [ 'Michael', 'Stanley', 'Karen', 'Hannah']

people.forEach(function(currentEle, index, array){
console.log(people)
console.log(index);
console.log('---');

});

// prints
Michael 0 --- [ 'Michael', 'Stanley', 'Karen', 'Hannah']
Stanley 1 --- [ 'Michael', 'Stanley', 'Karen', 'Hannah']
Karen 2 --- [ 'Michael', 'Stanley', 'Karen', 'Hannah']
Hannah 3 --- [ 'Michael', 'Stanley', 'Karen', 'Hannah']

// the arguemnts you take into the forEach() are positonal meaning, the first arg is always the element, the second is alway index and third is always
// the entirhe array no matter what you name them

// if you wanted to just access the index and dont care for the ele you still habe to pass in the first arg because that first spot will always be current ele

// concat array
let people = [ 'Michael', 'Stanley', 'Karen', 'Hannah']
let nums = [2,4,6,8]

function conCat(arr){
let str = '';
arr.forEach(function (currentEle){
 str += currentEle + " ";
});
return str;
}

console.log(conCat(people))  // prints: Michael Stanley Karen Hannah

function average(nums){
let sum = 0;
nums.forEach(function (ele){
sum += ele;                   // anything inside this forEach function will happen at every iteration
})
let total = sum / nums.length;     // these must be outside the forEach funciton because it will divide the sum by length on every itteration
console.log(total);
}

average(nums) // 5

let letterPicker = (letters) => {
nums.forEach(funciton(ele,i){
if(ele === "a"){

}
});
return true;            // return otside of loop and conditional since fat arrow function

}

let nums = [2,4,6,8]
function sum(nums){
let sum = 0;
nums.forEach(function(ele){
sum += ele

});
return sum;             // return outside of loop
}

console.log(sum(nums)); // prints: 20

// forEach() will iterate only forwards and in order hitting ever element on the way.


///// Array Map Method///////////////////////

// have an array and modify elemnts of that array and return a new array

// origional way

// call it on an array
// give it a funciton telling it what you want it to do to each element


// also take in element, index, array in that order
// the.map will iterate for you, no need chain to a forEach or for loop
let people = [ 'Michael', 'Stanley', 'Karen', 'Hannah']
let yellingPeople = people.map(function(ele){
return ele.toUpperCase();                           // have it return new elements
})
console.log(yellingPeople) //prints: [ 'MICHAEL', 'STANLEY', 'KAREN' , 'HANNAH']
// what map is doing specifically is iterating through given array, passing each element in to the funcion given
//and takeing that functions return value and storeing it in a NEW array
// so you must save that return value to a variable

// thats what
let yellingPeople =
// is doing so to call on the return value of the map call on yellingPeople

// MODIFY ELEMENTS OF AN EXISTING ARRAY AND RETURN A NEW ARRAY
// USE WHEN YOU NEES TO MODIFY ELEMENTS OF AN ARRAY BUT ALSO GET THE SAME NUMBER OF ELEMETS RETURNED

let nums = [1,2,3,4,5,6]

// funciton that takes in array of nums and returns a rew array with each element multiplied by 3

function multBy3(nums){
let newArr =nums.map(function(ele){     // these inner functions only take in 3 things, Current element, index, and the entire array
return ele * 3                        // we are modifying each element at the same time
});
return newArr;          // to access return value you must set the whole .map funciton to a variable so it can be called
}

console.log(multBy3(nums)) // prints: [3,6,9,12,15,16]


let str = [ 'google', 'youtube', 'binance', 'netflix']
function addSym (str){
let sites = str.map(function(str){
return str + ".com"
});
return sites;
}
console.log(addSym(str)); // prints: ['google.com', 'youtube.com', 'binance.com', 'netflix.com']

let message = ["I", "Love" , "You"]
let love = (message) => {
let heart = message.map(function(ele){
return "<3"+ ele + "<3";
});
return heart;
}
console.log(love(message)) // prints [ '<3I<3', '<3Love<3', '<3You<3' ]

let nums = [0,1,2,3,4]
let maths = (nums) => {
let seconds = nums.map(function(ele){
return ele + 1 + " mississippi"
})
return seconds;
}
console.log(maths(nums)) // prints: [1 mississippi, 2 mississippi, 3 mississippi, 4 mississippi, 5 mississippi]

//////////// filter Method //////////////////////
// have an array of items and want to chose an eleement that fits the condition
// they also take in a function

let locations = [ "Sctanton", "Nashuwa", "Buffalo", "Saracuse", "Bingupton"]

let sLocations = locations.filter(function(ele){
return ele[0] === "S";
});
console.log(sLocation)

// the return value of filter evaluates to true or false, if true it will retirn the elements that fit the condition
// if false it will return as an empty array


let locations = [ "Sctanton", "Nashuwa", "Buffalo", "Saracuse", "Bingupton"]

let include = locations.filter(function(ele){
return = ele[0] === "S"           // if the element starts with s return that element
});

console.log(include) // prints: ['Scranton', 'Bingupton']



/////////////Reduce////////////////////////////////
// call on an array and accepts a function as arg

let nums = [1,2,3,4,5]

// args passed in are in a diffrent order (accumulator, element)

let total = nums.reduce(function (accum, ele){
return accum + ele;
})
console.log(total) // 15


// accum is the first element, like declareing sum and having it += each iteration

// if you leave as above the accum will start out as 1
// if you want to give it a vlaue to start you pust pass in tht value after the function arg

let total = nums.reduce(function(accum, ele){
return accum + ele;
} 200 )

console.log(total) // prints: 215

// if you didnt pass in a accumulator it picks the first ele in the array to start
let nums = [1,2,3,4,5]

let max = nums.reduce(function (accum, ele){
if(accum > ele){
  return accum;
} else{
  return ele;
}
});
console.log(max) // prints: 5

let nums = [1,2,3,4,5]
let mult = nums.reduce(function(accum, ele){
return accum * ele
});

console.log(mult) // prints 120

let arr = [-1,2,3,4,-7,20]
function smallestNum(arr){
let small = arr.reduce(function(accum, ele){
  if(accum < ele){
    return accum
  } else{
    return ele;
  }
});
return small;
}

console.log(smallestNum(arr)) // prints -7


let arr = [-1,2,3,4,-7,20]
let average = (arr) => {
let sum = arr.reduce(function(accum, ele){
return accum + ele
})
return sum / arr.length;
}
console.log(average(arr)); // prints 3.5
