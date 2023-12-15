const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n")[0];

const [a, b, c, d] = input.split(' ').map(Number);
const A = [a, b, c, d];

const ans = Math.min(...A);

console.log(ans);
