const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n")[0];

const [A, B] = input.split(' ').map(Number);
const A2 = Array.from(String(A), Number);
const B2 = Array.from(String(B), Number);

const ans = Math.max(A2.reduce((sum, ai) => sum + ai, 0), B2.reduce((sum, bi) => sum + bi, 0));

console.log(ans);
