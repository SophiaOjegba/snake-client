// Importing net module
const net = require("net");

// Importing the "IP, PORT" property from the "constants" module
const { PORT, IP } = require("./constants");

// Establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // Interpret incoming data as text
  conn.setEncoding("utf8");

  //sending a message to the client from server
  conn.on("data", (data) => {
    console.log("Server says:", data);
  });

  // Write when connected to server
  conn.on("connect", () => {
    console.log("Successfully connection");

    // Send the name to the server
    conn.write("Name: Sam");
  });


 return conn;
};

console.log("Connecting ...");

//exporting connect function
module.exports = { connect };
