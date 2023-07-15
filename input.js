const setupInput = function () {
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
  }
  
  let alphabet = {
    w : "\u0087",
    a : "\u0065",
    d : "\u0068",
    s : "\u0083"
  }
  let keyboard = key;
  for (const direction in alphabet) {
    if (keyboard === direction) {
      connection.write(alphabet[direction]);
     }
  }
};

setupInput();

module.exports = {setupInput}