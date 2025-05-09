const EventEmitter = require('events');


class Logger extends EventEmitter { // Create a Logger class that extends EventEmitter
     log(message) {// This function logs a message to the console
        // The message is passed as a parameter
        console.log(message);// This line prints the message to the console

        this.emit('messageLogged',{id: 1, url: 'http://'}); // Emit the 'event' event, triggering the listener
    }
}


module.exports = Logger;// This line exports the log function so it can be used in other files
// The function is assigned to the log property of the module.exports object