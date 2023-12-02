const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n")[0];

const N=input
const M = [Math.floor(N / 16), N % 16];
const mapping = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

let M2 = '';
for (const mi of M) {
  M2 += mapping[mi];
}

console.log(M2);
