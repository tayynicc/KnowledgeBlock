//The function setTimeout is called with 2 arguments: a message to add to the queue, and a time value (optional; defaults to 0). The time value represents the (minimum) delay after which the message
// will actually be pushed into the queue

// If there is no other message in the queue, and the stack is empty, the message is processed right after the delay.

//However, if there are messages, the setTimeout message will have to wait for other messages to be processed. For this reason, the second argument indicates a minimum time—not a guaranteed time.

