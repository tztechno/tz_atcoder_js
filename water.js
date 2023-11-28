const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n")[0];

const N = parseInt(input); // Convert input to an integer
const m = Math.floor(N / 5); // Use Math.floor for integer division
const diff = N % 5;

if (diff <= 2) {
  console.log(m * 5);
} else {
  console.log((m + 1) * 5);
}
