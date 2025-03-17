const readline = require('readline');
readline.emitKeypressEvents(process.stdin);
if (process.stdin.isTTY) {
  process.stdin.setRawMode(true);
}

process.stdin.on('keypress', (str, key) => {
  if (key.name === 'b') {
    process.stdout.write("\x07");
  } else if (!isNaN(str) && str != ' ') {
    process.stdout.write(`setting timer for ${key.name} seconds...\n`);
    setTimeout(() => process.stdout.write("\x07"), key.name * 1000)
  } else if (key.ctrl && key.name === 'c') {
    process.stdout.write(`Thanks for using me, ciao!\n`);
    process.exit();
  } else {
    console.log(`Key pressed: ${key.name}\n`);
  }
});

process.stdin.resume();

