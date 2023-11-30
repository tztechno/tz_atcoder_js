const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

  rl.question('Enter N: ', (N) => {
  rl.question('Enter A: ', (inputA) => {
    const A = inputA.split(' ').map(Number);

  console.log(N);
  console.log(...A);

  rl.close();
    
});
});
