//list all possible arguments that can be used with the Array.prototype.splice method
//That is, Array.splice will modify the existing array and not return a new array.

//use splice to remove OR INSERT
//The first two arguments for splice correspond to 1) the target index and 2) how many elements to remove.

array.splice(2,3);

//this is removing elements starting at element 2 and removing the next 3 elements


//Note that splice returns an array containing the elements that were removed and also has the effect of removing the elements from the original array, mutating it in-place.

console.log(colors); // [ 'red', 'yellow', 'brown', 'gray' ]
console.log(returnVal); // [ 'blue', 'green', 'orange' ]

//Using splice to insert
//To use the splice method to insert new elements into an array, we can pass in any number of additional arguments representing the values to insert:

array,splice(1,0,"addthis","add some more of this")

// two strings will be added at index 1


//Naturally, we can combine these two functionalities! Say we wanted to target index 2, remove the next 3 elements, then insert 'Gainsboro', 'Ivory', and 'Khaki':

let colors = ["red", "yellow", "blue", "green", "black", "beige"];
let removed = colors.splice(2, 3, "Gainsboro", "Ivory", "Khaki");
console.log(colors); // [ 'red', 'yellow', 'Gainsboro', 'Ivory', 'Khaki', 'beige' ]
console.log(removed); // [ 'blue', 'green', 'black' ]
