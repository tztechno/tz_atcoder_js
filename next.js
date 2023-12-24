#ABC329_B
#next

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n")[1]; 

const A = input.split(' ').map(Number);
const B = new Set(A);
const C = Array.from(B).sort((a, b) => b - a);

console.log(C[1]);

