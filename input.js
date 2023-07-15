const { stdin } = require("process");

let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  
  return stdin;
};



const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }else if (key === 'n') {
    //user chat message
  connection.write("Say: Hello")
}

  
  let alphabet = {
    w : "Move: up",
    a : "Move: left",
    d : "Move: right",
    s : "Move: down"
  }
  if (key in alphabet)
  connection.write(alphabet[key]);

};


module.exports = {setupInput}