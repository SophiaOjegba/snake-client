const net = require("net");

// Establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  // Interpret incoming data as text
  conn.setEncoding("utf8");

  let currentDirection = null; // snake current direction

  conn.on("data", (data) => {
    console.log("Server says:", data);
  });

  // Write when connected to server
  conn.on("connect", () => {
    console.log("Successfully connection");

    // Send the name to the server
    conn.write("Name: Sam");
  });

  // Update currentDirection variable when receiving movement data
  conn.on("data", (data) => {
    if (data.includes("Moved")) {
      const movement = data.split(" ")[1];
      currentDirection = movement;
    }
  });

  return {
    conn,
    getCurrentDirection: () => currentDirection // Expose a method to get the current direction
  };
};

console.log("Connecting ...");
const { conn, getCurrentDirection } = connect();

// Move the snake up after a delay of 3 seconds if not moving down
setTimeout(() => {
  if (getCurrentDirection() !== "down") {
    conn.write("Move: up");
  }
}, 3000);
setTimeout(() => {
  if (getCurrentDirection() !== "left") {
    conn.write("Move: right");
  }
}, 5000);
setTimeout(() => {
  if (getCurrentDirection() !== "right") {
    conn.write("Move: left");
  }
}, 7000);setTimeout(() => {
  if (getCurrentDirection() !== "up") {
    conn.write("Move: down");
  }
}, 9000);

module.exports = { connect };
