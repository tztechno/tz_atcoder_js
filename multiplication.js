//abc169_a multiplication.js
################################
[a,b]=require('fs').readFileSync(0,'utf8').split` `;console.log(a*b)
################################
const main = input => {
  const [A, B] = input.trim().split(' ').map(n => Number(n));
  const ans = A * B;
  console.log(ans);
}
const input = require('fs').readFileSync('/dev/stdin', 'utf8');
main(input);
################################
const [A, B] = ((require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"))[0].split(" ")).map(x => parseInt(x, 10));
console.log(A * B);
################################
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n")[0];
const X = input.split(' ').map(Number);
console.log(X[0]*X[1]);
################################
const main = (input) => {
  const [a,b] = input.split(" ").map(Number);
  console.log(a*b);
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
################################
