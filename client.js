const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost', 
    port: 50541
    
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on("data", (data) => {
  console.log("Server says: ", data);
  });

  //write when connected to server
  conn.on("connect", () => {
  console.log("Successfully connected to game server");
  });

  //write back to server, sending Name
  conn.on("connect", () => {
  conn.write("Name: ABC");
  });

  return conn;
};

console.log("Connecting ...");
connect();

module.exports = {connect};