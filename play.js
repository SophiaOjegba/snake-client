//Importing net module
const net = require("net");

// Importing connect function from client module
const { connect } = require("./client");
// Importing the setInput function from input module
const { setupInput } = require("./input");


// Calling the "connect" function and storing in variable 'connection'
const connection = connect();

// Calling the "setupInput" function for "connection" object to be passed as an argument
setupInput(connection);

// Importing the "client" module and storing its contents in the "myFunction" variable
const myFunction = require("./client");

// Accessing the "connect" function from the "client" module
myFunction.connect;


