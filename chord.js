const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a string: ', (s) => {
  const name = ["ACE", "BDF", "CEG", "DFA", "EGB", "FAC", "GBD"];

  if (name.includes(s)) {
    console.log('Yes');
  } else {
    console.log('No');
  }

  rl.close();
});
