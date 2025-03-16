if (process.argv.length <= 2) {
  throw new Error('No input detected.\n')
}

let filterdInput = [];

for (const element of process.argv) {
  if (typeof(Number(element)) === 'number' && Number(element) >= 0) {
    filterdInput.push(Number(element));
  }
}

let sortedArray = [...filterdInput].sort((a,b) => a - b);


for (let i = 0; i < sortedArray.length; i++) {
  setTimeout(() => process.stdout.write("\x07"), sortedArray[i] * 1000)
}

