const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Nを入力
rl.question('Enter N: ', (N) => {
  // Aを入力
  rl.question('Enter A: ', (inputA) => {
    const A = inputA.split(' ').map(Number);

    // NとAを出力
    console.log(N);
    console.log(...A);

    rl.close();
  });
});
