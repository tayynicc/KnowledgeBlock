// a closer is when a inner function uses or changes variables in an outer funciton 


  
/* Closures */

/*********** Problem 1 ***********/
function appleTree() {
    let aVariable = 'apple';

    function tree() {
        return aVariable; // returns a `closed over` variable `aVariable`
    }

    return tree();
}
console.log(appleTree());
/* 
What will print to the console? 
Answer: apple
*/ 




// inner function changes value of outter funciton value. 
function appleTree2() {
    let tree = { type: 'apple', grown: false };

    function growTree() {
        tree.grown = true; // changing a `closed over` variable `tree`.
    }

    growTree();
    return tree;
}
console.log(appleTree2());
/* 
What will print to the console? 
Answer: { type: 'apple', grown: true }
*/

// it changes the value because the growTree functuion is invoked before the console.log
// so it goes into the growTree funciton and runs it which insuide of it it is reasinging the obj/key of tree.grow to true
// then it returns the modified object now containging that true 

/*********** Problem 4 ***********/
function createCounter() {
    let count = 0;

    return function () {
        // we are returning an anonymous function here.
        count++; // we are changing a closed over variable here.
        return count;
    };
}
let counter1 = createCounter();
console.log(counter1);
console.log(counter1());
console.log(counter1());

let counter2 = createCounter();
console.log(counter2);
console.log(counter2());
console.log(counter2());
/* 
What will print to the console from the first console.log?
Answer: function 
What will print to the console from the second console.log?
Answer: 1
What will print to the console from the third console.log?
Answer: 2
What will print to the console from the fourth console.log?
Answer: function 
What will print to the console from the fifth console.log?
Answer:1
What will print to the console from the sixth console.log?
Answer:2
*/


  
/** Closures Code Demo */

/*********** Problem 1 ***********/
function pizzaMaker(food) {
    // we are inside the `outer` function
    let order = "I'd like a pizza with ";

    function oven() {
        // we are inside the `inner` function
        return order + food; // food comes from the outer scope (see line 11)
    }

    return oven();
}

console.log(pizzaMaker('cheese'));
/* 
What will print to the console? 
Answer:
*/ "I'd like a pizza with cheese"

/*********** Problem 2 ***********/
function groceryList(list) {
    let groceries = list;

    function addItem() {
        groceries.push('and ice cream!'); // mutates closed over `groceries` variable
    }

    addItem();
    return groceries;
}
console.log(groceryList(['milk', 'eggs']));
/* 
What will print to the console? 
Answer:['milk', 'eggs', 'and ice cream'];
*/  

/*********** Problem 3 ***********/
function elephantCollector() {
    const elephants = ['dumbo'];

    return function (name) {
        // we are returning a FUNCTION
        elephants.push(name);
        return elephants; // this is a CLOSED OVER variable
    };
}

const elephantParade = elephantCollector();
console.log(elephantParade);
console.log(elephantParade('Obi'));
console.log(elephantParade('Gerald'));
/* 
What will print to the console from the first console.log?
Answer: function 
What will print to the console from the second console.log?
Answer: ['dumbo', 'obi']
What will print to the console from the third console.log? 
Answer: ['dumbo', 'Gerald']
*/


/// an inner fucntion can change an outter fuctions variable. 