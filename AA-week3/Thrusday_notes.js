//Thread of execution
    //A sequence of tasks
//Single-threaded execution
    //Only ONE task can be processed at a time
//Multi-threaded execution
    //Multiple tasks can be process at a time
//Event Loop
    //The model of execution
    //Two parts in JS
        //Call Stack
            //  Tracks the 'current task in progress'
//Message Queue
    //Tracks the 'to-do' tasks.

// enqueue new items are added to the back of the line 
// dequeue items are removed from the front of the line 

// items storeed in message que are called messages 
// when a new event occurs the rurntime is busy rocessing another command and a message for that event is enqued 
// when the run time finishes its current command the next message is deques and processed
//The message queue is a line of Function boxes, the call stack unpacks the boxes, which could contain another box inside.  the whole box needs to be unpacked on the stack, before the next box on the message queue can be unpacked.


set time out funciton 

// take in function and time to delay before runnig 

function hello(){
    console.log("hello");
}

settimeOut(hello, 500)


// asencionout will let the rest of the code run wihtout finishing its part 