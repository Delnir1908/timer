if (process.argv.length <= 2) {
  throw new Error('No input detected.\n')
}

let filterdInput = [];

for (const element of process.argv) {
  const num = Number(element);
  if (typeof(num) === 'number' && num >= 0) {
    filterdInput.push(num);
  }
}

let sortedArray = [...filterdInput].sort((a,b) => a - b);


for (let i = 0; i < sortedArray.length; i++) {
  setTimeout(() => process.stdout.write("\x07"), sortedArray[i] * 1000)
}

