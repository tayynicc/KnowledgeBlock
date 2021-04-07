Craft a clear, concise coding question to a more experienced developer
//Research unknown JavaScript code syntax using MDN


//Identify and fix a bug in code based on an error message
// the error message
Manage your time and stress at AppAcademyDescribe the properties of a string
// Given a working REPL interface, write and execute a statement that will print “hello world” using console.log

    console.log("hello World");


//Identify that strings are a list of characters defined by using double or single quotes

    console.log("that's a string buck-o")
    console.log('another string containing speach "The things I do for love" ')

//Given an arithmetic expression using +, -, *, /, %, compute its value
Given an expression, predict if its value is NaN
Construct the truth tables for &&, ||, !
Given an expression consisting of >, >=, ===, <, <=, compute it’s value
Apply De Morgan’s law to a boolean expression
Given an expression that utilizes operator precedence, compute its value
Given an expression, use the grouping operator to change it’s evaluation
Given expressions using == and ===, compute their values
Given a code snippet using postfix ++, postfix --, +=, -=, /=, *=, predict the value of labeled lines
Create and assign a variable using let to a string, integer, and a boolean. Read its value and print to the console.
Create a string
Find the length of a string
Find the character at a certain index in a string
Concatenate two strings together
Find the first instance of a character in a string
Create a new string from a sub-section of another string

//1.Define a function that accepts a sentence string and two words as args. The function should return a boolean indicating if the sentence includes either word.

    function includes (sentence, word1, word2){
        if(sentence.includes(word1) || sentence.includes(word2)){
            return true;
        } else {
            return false;
        }
    }

    console.log(includes("One does not simpily walk into Mordor.", "walk" , "Smaug"))
    console.log(includes("fish are friends not food", "Righteous" , "Nigel"))

2.Identify a pair of mutually exclusive conditions.

3.Given a for loop, translate it into a while loop, and vice-versa.

for(let i = 0; i < someValue; i++)

let i = 0;
while (i < someValue){
    
}
4.Write a function that iterates through a provided string argument.
5.Given a description of pig latin, write a function that takes in a string argument and utilizes String's slice() method to translate the string into pig latin.
6.Write a function that takes in an array of words and a string as arguments and returns a boolean indicating whether the string is located inside of the array.
 The function must use Array's indexOf() method.
7.Define that an array literal is an ordered list of values defined by using bracket and individual values are read by indexing.
