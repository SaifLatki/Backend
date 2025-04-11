function log(message) {// This function logs a message to the console
    // The message is passed as a parameter
    console.log(message);// This line prints the message to the console
}

module.exports.log = log;// This line exports the log function so it can be used in other files
// The function is assigned to the log property of the module.exports object