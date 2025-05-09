const EventEmitter = require('events');

const Logger= require('./logger');// Importing the logger module
const logger = new Logger(); // Create an instance of the Logger class

logger.on('messageLogged', (arg) => { // Register an event listener for the 'event' event    
    console.log('Listener called!',arg); // This function will be called when the 'event' event is emitted
}); // End of the event listener registration


logger.log('message');// This line calls the log function from the logger module