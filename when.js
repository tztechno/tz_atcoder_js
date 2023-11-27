const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n")[0];

const K = parseInt(input);
const h = Math.floor(21 + K / 60);
const m = K % 60;

const ans = `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;

console.log(ans);
