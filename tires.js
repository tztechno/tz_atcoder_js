const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n")[0];

const S=input
if (S.slice(-2) === 'er') {
    console.log('er');
} else {
    console.log('ist');
  }
