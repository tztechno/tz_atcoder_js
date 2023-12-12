const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n")[0];

const [A, B] = input.split(' ').map(Number);
console.log(Math.pow(32, A - B));
