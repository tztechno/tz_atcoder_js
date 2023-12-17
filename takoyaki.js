const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const s = fs.readFileSync(filePath).toString().split("\n")[0];

const [N, X, T] = s.split(' ').map(Number);
const t = Math.floor(N / X); // Use Math.floor for integer division

if (N % X === 0) {
   console.log(t*T)
} else {
   console.log((t+1)*T);
}
