//Describe how JavaScript determines what task to execute next using the Event Loop.
    //JavaScript uses the event loop as a model of execution it consist or the call stack and the message que 
    // the call stack is what comprised of .... and the message Qeueu is a place were things wait to be put onto the callstack os they can be execuuted, since JS is a single thread language is onlu executes on things at a time si things will be staged to wait on the
    // message qeueu for the callstack to be empty wherer it can the be pushed on and ran. 


//JavaScript uses an event loop model for execution.
// even loop consist of 
    // call stack
    // message queue
        // queue waits syncronously for a message to arrive 
        // each message is processed and completed before another message is processed 
        // messages are used 
    // is responsiable for 
        // executing code, collection and processing events and executing queued subtask 

// in JS the exectution of an ongoing task wil never be interupted by another task 


// this all takes place because javaScript is single threaded and does one thing at a time 
// the event loop is the model of execution used by javaScript 
    // call stack is apart of the event loop 

    // callstack : structure used to keeo track of current task in progress 
        // a single task may consist of mulpile function calls 


//message queue 
    //keeps track of the task that cannot be executed in that moment 
    // but they will be executed once the current task is finsihed and poped off the callstack 
    // used to Queue data structures 
    
    // new items are added to he back of the queue
        // called : enqueueing
    
    // items can only leave through th front of a que 
        // called : dequeueing
    
// events in JS are handled asynchronously 
    //Like always, the events can be things such as a setTimeout expiring or the user clicking a button.

    // items stored on message que correspond to events that have occured but have not yet processed
        // refered to as messages 

// the message que only grows substantually is the current taks takes a while to complete 
    // if runtime is not busy tending to task the new messages can be processed immediately because there is little or no wait time on the que 


// We don't manipulate the queue because a new message is only enqueued when an event occurs and our timeout events have not yet triggered.

    // setTimeout is only added to the stack once the timer is up JS will continue to run events while the timer id counting down 

