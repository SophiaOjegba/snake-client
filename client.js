const net = require("net");

// Establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  // Interpret incoming data as text
  conn.setEncoding("utf8");

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

module.exports = { connect };
