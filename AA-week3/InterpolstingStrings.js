//Temprate litterals
// used to interpolate a value into a string
// and used to interpolate expressions into a string

//defining  string wiht added functionality
// use ` ` for this instead of "" or ' '
let pineapple = `dog`
console.log(pineapple); // prints dog

function sayHello(name){
    return "Hello " + name +"!";
}
console.log(sayHello("Creed"));
// Hello Creed!

function sayBye(name){
    return `Bye ${name}!`
}
console.log(sayBye("Kevin"));
// Bye Kevin!


// interpolation taking the name of var and evaluating it and replacing it wihtin the seting
// temprate litterrals evaluate the varable or expression that is passed in and return its value

function dundies (name,award,response){
    return `And the award for ${award} goes to ${name}, ${response}`;
}
console.log(dundies("Pam","The Whitest Sneakers", "I have so many peple to thank, God gave me this Dundie and I feel God in this Chilies tonight."))

// prints : And the award for The Whitest Sneakers goes to our very own Pam Beesly!, I have so many people to thank, but God gave me this Dundie and I feel God in this Chilies tonight.
