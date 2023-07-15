// Declaring a variable to store the TCP connection
let connection;


// Defining the function to set up input handling
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  
  return stdin;
};

// Defining the function to handle user input
const handleUserInput = function (key) {
  // If "Ctrl + C" is pressed, exit the process
  if (key === '\u0003') {
    process.exit();
  }
  // If "n" key is pressed, send a chat message "Say: Hello" to the server
  else if (key === 'n') {
    connection.write("Say: Hello");
  }

  // Object that maps keyboard inputs to movement commands
  let alphabet = {
    w: "Move: up",
    a: "Move: left",
    d: "Move: right",
    s: "Move: down"
  };

  // If the key pressed is a valid movement key, send the corresponding movement command to the server
  if (key in alphabet) {
    connection.write(alphabet[key]);
  }
};

// Exporting the "setupInput" function 
module.exports = { setupInput };
