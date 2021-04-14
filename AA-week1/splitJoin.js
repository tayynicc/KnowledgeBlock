//use the string.split method to turn a string into an array
//use the array.join method to turn an array into a string


//The string.split method is called on a string and accepts a "separator" string as an argument. The method will return an array where the elements are the resulting substrings when we cut at the "separators"
let sentence = "follow the yellow brick road";
let words = sentence.split(" ");
console.log(words); // [ 'follow', 'the', 'yellow', 'brick', 'road' ]
console.log(sentence); // 'follow the yellow brick road'


//A pattern you may find useful is that when you split on a separator string, it is guaranteed that that separator will not be in the resulting array,
//effectively removing it

console.log(sentence.split("the")); // [ 'follow ', ' yellow brick road' ]

//The array.join method is called on an array and accepts a "separator" string as an argument. The method will return a string where elements of the ARRAY are concatenated together with the "separator" between each element:
//array.join does not mutate the original array, instead it will return a new string.


//we use split to turn a string into a array
//we use join to turn an array into a string


//By combining these two methods we can accomplish some cool behavior:

let str = "I don't know what I want to eat";
let newStr = str.split("I").join("we");
console.log(newStr); // 'we don't know what we want to eat'

//Whoa! We were able to replace every substring "I" with the substring "we". We know that the line str.split('I').join('we') evaluates from left to right. This means that the split will cut the string wherever there is an 'I',
// leaving a gap where the 'I's were. Then, the join will fill those gaps with 'we's.

