const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n")[0];

const [V, T, S, D] = input.split(' ').map(Number);

if (V * T <= D && D <= V * S) {
  console.log('No');
} else {
  console.log('Yes');
}
