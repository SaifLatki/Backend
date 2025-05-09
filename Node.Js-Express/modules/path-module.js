const path= require('path');

const pathObj= path.parse(__filename);// This line uses the path module to parse the current file's path and store it in the pathObj variable
console.log(pathObj);// This line prints the parsed path object to the console