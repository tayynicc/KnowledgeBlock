// itterating


// the process of calling a function within itself
console.log(console.log("Hello"));

// there are two cases or expected outputs for a particular input
    //base case
    //recursive case

//base case
    // data is passed into the funciton without any additional recursion
    //when base case is executed the funciton runs once and ends
    // also refered to as the terminating case as

//recursive case
    // situation where the fucntoi recurses
    // causes funciton to call itself


// in fruit crates scenerion
    // the base case is when the crate has fruit in it because we ant it to stop there or do something else wiht that
    //the recursive case is when the crate has another crate in it because we want to continue and open that one up too


//Without a base case, we might be creating an infinite loop
//We need to know when to stop the process before we start it.


//////////////////////example

//Imagine you're meeting a friend in a movie theater. The lights have gone down, it's totally dark, and your friend just sent you a message asking which row you're seated in.
//Without being able to see the rows or your ticket,
// how might you figure out the row number?


//What if we tap the person in front of us on the shoulder? If there's someone in front of us, we know that we're at least one row back from the front
//of the theater. If someone is in front of them, we're at least two rows back! This pattern continues until we reach the screen.

//If each person performs this action and they all report back, we can count how many rows back we are! We've missed a key part in this analysis, though - when do we stop tapping each other?
//If someone reaches forward and there's no one else in front of them, we can assume we've reached the front of the theater. That person becomes "Row #1", and our test stops.

//In this example, our base case is "No one in front of me = Row #1" and our recursive case is "Someone in front of me = Row #(1 + person in front of me's row #)". Now the we know both cases,
// we can build a recursive function out of them!


determineRow = function(moviegoer) {
  if (moviegoer.personInFront) {
      return 1 + determineRow(moviegoer.personInFront);
  } else {
      return 1;
  }
}
