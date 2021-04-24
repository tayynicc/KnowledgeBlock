Describe the difference between synchronous and asynchronous code
Give one example illustrating why we would need to deal with asynchronous code




/////////////////////synchronous vs asynchronous/////////////////////

////////////////////////synchronous 
    // there is an inherent order among the commands and the order of the  command is guarenteed

// example
console.log("one");
console.log("two");
console.log("three");
// the order may not be denoted by the positional order of the lines of code 

//The above code is synchronous because we can predict with total certainty the relative order of the print statements.


//////////////////////Asynchronous 
//  THERE IS NO GAURENTEE IN THE TOTAL ORDER THE COMMANDS ARE EXECUTED 

// EXAMPLE
    // setTimout 
        // executed a given callback avter a given amount of time 
    
        setTimeout(function() {
            console.log("time is up!");
          }, 1500);
    
          // althought it is called it will not block the execution of lines after it
          // while timer ticks down code will contine to be executed because the setTimeout method is async
          //we cannot treat setTimeout as synchronous under any circumstance
            // the time given to setTimeout is not a strict time it is the MINIMUM  amount of time that will elapse before executing the callback 
        // setInterval 