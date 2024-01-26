//abc173_a payment.js
##############################
function num(input) {
  const change = Number(input);
  console.log((10000-change) % 1000);
}
num(require("fs").readFileSync("/dev/stdin", "utf8"));
##############################
const main = input => {
  const N = Number(input.trim());
  
  const res = N % 1000;
  const ans = res === 0 ? res : 1000 - res;
  console.log(ans);
}
const input = require('fs').readFileSync('/dev/stdin', 'utf8');
main(input);
##############################
const N = parseInt((require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"))[0], 10);
const X = N % 1000;
if (X === 0) {
  console.log(X);
} else {
  console.log(1000 - X);
}
##############################
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const N = fs.readFileSync(filePath).toString().split("\n")[0];

const A = (1000-N%1000)%1000;
console.log(A);
##############################
